const axios = require("axios");
const fs = require("fs");

const SHOP_ID = 153209431;
const EXCLUDED_ITEM_ID = 23445283414; // chọc sim ❌
const LIMIT = 20;
const MAX_PAGE = 10;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Check sản phẩm có phải sim ghép hay không
 */
function isSimGhep(product) {
  if (!product || !product.name) return false;

  return (
    product.itemid !== EXCLUDED_ITEM_ID &&
    product.name.toLowerCase().includes("sim ghép")
  );
}

/**
 * Check comment có hợp lệ không
 * - không rỗng
 * - không chỉ toàn space / xuống dòng
 * - tối thiểu 3 ký tự
 */
function hasValidComment(comment) {
  return (
    typeof comment === "string" &&
    comment.trim().length >= 3
  );
}

/**
 * Convert mtime (unix) -> yyyy-MM-dd HH:mm
 */
function formatTime(unixTime) {
  return new Date(unixTime * 1000)
    .toISOString()
    .replace("T", " ")
    .slice(0, 16);
}

async function crawlReviews() {
  let offset = 0;
  let results = [];
  const seenUsers = new Set(); // chống trùng user (optional)

  for (let page = 1; page <= MAX_PAGE; page++) {
    console.log(`👉 Crawling page ${page}...`);

    const res = await axios.get(
      "https://shopee.vn/api/v4/seller_operation/get_shop_ratings_new",
      {
        params: {
          userid: SHOP_ID,
          shopid: SHOP_ID,
          limit: LIMIT,
          offset
        },
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          accept: "application/json",
          referer: "https://shopee.vn/"
        }
      }
    );

    const items = res.data?.data?.items || [];
    if (items.length === 0) break;

    for (const r of items) {
      const product = r.product_items?.[0];

      if (
        r.rating_star === 5 &&
        product &&
        isSimGhep(product) &&
        hasValidComment(r.comment)
      ) {
        // chống spam 1 user nhiều review (có thể bỏ nếu không cần)
        if (seenUsers.has(r.author_username)) continue;
        seenUsers.add(r.author_username);

        results.push({
          author_username: r.author_username,
          rating_star: r.rating_star,
          comment: r.comment.trim(),
          product_name: product.name,
          model_name: product.model_name || "",
          mtime: formatTime(r.mtime)
        });
      }
    }

    offset += LIMIT;
    await sleep(1200); // tránh rate-limit
  }

  // Sort mới -> cũ
  results.sort((a, b) => new Date(b.mtime) - new Date(a.mtime));

  fs.writeFileSync(
    "reviews-sim-ghep-5sao-co-comment.json",
    JSON.stringify(results, null, 2),
    "utf-8"
  );

  console.log(`✅ DONE: ${results.length} review hợp lệ`);
}

crawlReviews().catch(console.error);

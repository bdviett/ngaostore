#!/usr/bin/env node
/**
 * Batch update shopeeUrl, videoUrl và inStock trong products.json
 *
 * Cách dùng:
 * 1. Chỉnh sửa scripts/product-update.json (dùng id hoặc slug sản phẩm làm key)
 * 2. Chạy: npm run update-products
 *
 * Ví dụ product-update.json:
 * { "1": { "shopeeUrl": "...", "videoUrl": "...", "inStock": true }, "sim-ghep-dual-eid": { "videoUrl": "...", "inStock": false } }
 */

const fs = require("fs");
const path = require("path");

const PRODUCTS_PATH = path.join(__dirname, "../src/data/products.json");
const UPDATE_PATH = path.join(__dirname, "product-update.json");

function getProductSlug(product) {
  if (product.slug) return product.slug;
  const slugify = (t) =>
    t
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  return `${slugify(product.name)}-${product.id}`;
}

function main() {
  const products = JSON.parse(fs.readFileSync(PRODUCTS_PATH, "utf8"));
  const updates = JSON.parse(fs.readFileSync(UPDATE_PATH, "utf8"));

  const byId = new Map(products.map((p) => [p.id, p]));
  const bySlug = new Map(products.map((p) => [getProductSlug(p), p]));

  let count = 0;
  for (const [key, data] of Object.entries(updates)) {
    if (key.startsWith("_")) continue;

    const product = byId.get(key) || bySlug.get(key);
    if (!product) {
      console.warn(`⚠ Không tìm thấy sản phẩm: ${key}`);
      continue;
    }

    if (data.shopeeUrl) {
      product.shopeeUrl = data.shopeeUrl;
      count++;
    }
    if (data.videoUrl && product.media) {
      const video = product.media.find((m) => m.type === "video");
      if (video) {
        video.url = data.videoUrl;
        count++;
      }
    }
    if (data.inStock !== undefined) {
      product.inStock = !!data.inStock;
      count++;
    }
  }

  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(products, null, 2) + "\n", "utf8");
  console.log(`✓ Đã cập nhật ${count} URL trong products.json`);
}

main();

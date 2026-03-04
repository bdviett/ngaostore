#!/usr/bin/env node
/**
 * Export shopeeUrl và videoUrl hiện tại ra urls-update.json
 * Dùng để có template sẵn khi cần batch update
 * Chạy: npm run export-urls
 */

const fs = require("fs");
const path = require("path");

const PRODUCTS_PATH = path.join(__dirname, "../src/data/products.json");
const OUTPUT_PATH = path.join(__dirname, "urls-update.json");

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
  const result = {};

  for (const p of products) {
    const video = p.media?.find((m) => m.type === "video");
    if (p.shopeeUrl || video?.url) {
      result[p.id] = { name: p.name, slug: getProductSlug(p) };
      if (p.shopeeUrl) result[p.id].shopeeUrl = p.shopeeUrl;
      if (video?.url) result[p.id].videoUrl = video.url;
    }
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2) + "\n", "utf8");
  console.log(`✓ Đã export ${Object.keys(result).length} sản phẩm ra urls-update.json`);
}

main();

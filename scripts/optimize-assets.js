/**
 * Tối ưu ảnh assets cho LCP (logo, hero-banner, zalo)
 * - Tạo WebP với kích thước phù hợp display
 * - Giảm dung lượng ~60-80%
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC = path.join(__dirname, "../public");

async function optimizeLogo() {
  const src = path.join(PUBLIC, "logo.png");
  if (!fs.existsSync(src)) return;
  // Display: 64x64, retina 128x128
  const sizes = [64, 128];
  for (const w of sizes) {
    const dest = path.join(PUBLIC, `logo-${w}.webp`);
    await sharp(src)
      .resize(w, w)
      .webp({ quality: 85 })
      .toFile(dest);
    const stat = fs.statSync(dest);
    console.log(`  ✓ logo-${w}.webp: ${(stat.size / 1024).toFixed(1)} KiB`);
  }
}

async function optimizeHeroBanner() {
  const src = path.join(PUBLIC, "images/hero-banner.png");
  if (!fs.existsSync(src)) return;
  // Mobile ~346px, desktop ~800px
  const sizes = [384, 768];
  for (const w of sizes) {
    const dest = path.join(PUBLIC, "images", `hero-banner-${w}.webp`);
    await sharp(src)
      .resize(w, w)
      .webp({ quality: 82 })
      .toFile(dest);
    const stat = fs.statSync(dest);
    console.log(`  ✓ hero-banner-${w}.webp: ${(stat.size / 1024).toFixed(1)} KiB`);
  }
}

async function optimizeZalo() {
  const src = path.join(PUBLIC, "zalo.png");
  if (!fs.existsSync(src)) return;
  // Display: 24x24, retina 48x48
  const dest = path.join(PUBLIC, "zalo-48.webp");
  await sharp(src)
    .resize(48, 48)
    .webp({ quality: 85 })
    .toFile(dest);
  const stat = fs.statSync(dest);
  console.log(`  ✓ zalo-48.webp: ${(stat.size / 1024).toFixed(1)} KiB`);
}

async function main() {
  console.log("Tối ưu assets (logo, hero-banner, zalo)...\n");
  await optimizeLogo();
  await optimizeHeroBanner();
  await optimizeZalo();
  console.log("\nXong. Cập nhật components để dùng file .webp.");
}

main().catch(console.error);

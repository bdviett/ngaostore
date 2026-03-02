/**
 * Nén ảnh trong public/images/products/
 * - JPG: resize max 800px + quality 80 (giảm ~70% dung lượng)
 * - PNG: chuyển sang WebP (giảm ~60-70%), cập nhật products.json
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PRODUCTS_DIR = path.join(__dirname, "../public/images/products");
const MAX_SIZE = 800;

async function compressJpeg(filePath) {
  const stats = fs.statSync(filePath);
  const sizeBefore = stats.size;
  const meta = await sharp(filePath).metadata();
  const needsResize = meta.width > MAX_SIZE || meta.height > MAX_SIZE;

  const buffer = await sharp(filePath)
    .resize({
      width: needsResize ? MAX_SIZE : undefined,
      height: needsResize ? MAX_SIZE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(filePath, buffer);
  return { sizeBefore, sizeAfter: buffer.length };
}

async function compressPngToWebp(filePath) {
  const stats = fs.statSync(filePath);
  const sizeBefore = stats.size;
  const meta = await sharp(filePath).metadata();
  const needsResize = meta.width > MAX_SIZE || meta.height > MAX_SIZE;

  const webpPath = filePath.replace(/\.png$/i, ".webp");
  const buffer = await sharp(filePath)
    .resize({
      width: needsResize ? MAX_SIZE : undefined,
      height: needsResize ? MAX_SIZE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 85 })
    .toBuffer();

  fs.writeFileSync(webpPath, buffer);
  fs.unlinkSync(filePath);
  return { sizeBefore, sizeAfter: buffer.length, newPath: path.basename(webpPath), oldPath: path.basename(filePath) };
}

async function main() {
  const files = fs.readdirSync(PRODUCTS_DIR).filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
  const pngFiles = files.filter((f) => /\.png$/i.test(f));
  const jpgFiles = files.filter((f) => /\.(jpg|jpeg)$/i.test(f));

  console.log(`Nén ${files.length} ảnh (JPG: resize+quality, PNG: →WebP)\n`);

  const pathUpdates = {};
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of jpgFiles) {
    const filePath = path.join(PRODUCTS_DIR, file);
    try {
      const result = await compressJpeg(filePath);
      totalBefore += result.sizeBefore;
      totalAfter += result.sizeAfter;
      const saved = ((1 - result.sizeAfter / result.sizeBefore) * 100).toFixed(1);
      console.log(`  ✓ ${file}: ${(result.sizeBefore / 1024).toFixed(0)}KB → ${(result.sizeAfter / 1024).toFixed(0)}KB (-${saved}%)`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  for (const file of pngFiles) {
    const filePath = path.join(PRODUCTS_DIR, file);
    try {
      const result = await compressPngToWebp(filePath);
      totalBefore += result.sizeBefore;
      totalAfter += result.sizeAfter;
      pathUpdates[`/images/products/${result.oldPath}`] = `/images/products/${result.newPath}`;
      const saved = ((1 - result.sizeAfter / result.sizeBefore) * 100).toFixed(1);
      console.log(`  ✓ ${file} → ${result.newPath}: ${(result.sizeBefore / 1024).toFixed(0)}KB → ${(result.sizeAfter / 1024).toFixed(0)}KB (-${saved}%)`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  if (Object.keys(pathUpdates).length > 0) {
    const productsPath = path.join(__dirname, "../src/data/products.json");
    let json = fs.readFileSync(productsPath, "utf8");
    for (const [oldPath, newPath] of Object.entries(pathUpdates)) {
      json = json.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), newPath);
    }
    fs.writeFileSync(productsPath, json);
    console.log(`\n  Đã cập nhật products.json: ${Object.keys(pathUpdates).length} đường dẫn PNG → WebP`);
  }

  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\nTổng: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB (-${totalSaved}%)`);
}

main().catch(console.error);

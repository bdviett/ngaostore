/**
 * Post-build: inject font preload vào HTML để break chain HTML→CSS→Font.
 * Font được tải song song với CSS thay vì chờ CSS parse xong.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../out");
const CSS_DIR = path.join(OUT, "_next/static/css");
const MEDIA_DIR = path.join(OUT, "_next/static/media");

function findFontFromCss() {
  const cssFiles = fs.readdirSync(CSS_DIR).filter((f) => f.endsWith(".css"));
  for (const file of cssFiles) {
    const content = fs.readFileSync(path.join(CSS_DIR, file), "utf8");
    const match = content.match(/url\([^)]*?\/([a-f0-9]+-s\.woff2)\)/g);
    if (match) {
      const fonts = match.map((m) => m.match(/\/([a-f0-9]+-s\.woff2)/)[1]);
      return [...new Set(fonts)];
    }
  }
  return [];
}

function getLargeFonts() {
  const fonts = fs.readdirSync(MEDIA_DIR).filter((f) => f.endsWith(".woff2") && !f.includes(".p."));
  return fonts
    .map((f) => ({ name: f, size: fs.statSync(path.join(MEDIA_DIR, f)).size }))
    .filter((f) => f.size > 50000)
    .sort((a, b) => b.size - a.size)
    .map((f) => f.name);
}

function injectPreload(htmlPath, fontFile) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const preload = `<link rel="preload" href="/_next/static/media/${fontFile}" as="font" type="font/woff2" crossOrigin="anonymous"/>`;
  if (html.includes(`preload" href="/_next/static/media/${fontFile}"`)) return;
  html = html.replace(/<link rel="stylesheet"/, `${preload}<link rel="stylesheet"`);
  fs.writeFileSync(htmlPath, html);
}

function main() {
  const fonts = getLargeFonts();
  if (fonts.length === 0) {
    console.log("No large fonts found.");
    return;
  }
  const fontToPreload = fonts[0];
  console.log(`Injecting preload for ${fontToPreload} (${(fs.statSync(path.join(MEDIA_DIR, fontToPreload)).size / 1024).toFixed(0)} KiB)`);

  const htmlFiles = [];
  function walk(dir) {
    for (const f of fs.readdirSync(dir)) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith(".html")) htmlFiles.push(p);
    }
  }
  walk(OUT);

  for (const htmlPath of htmlFiles) {
    injectPreload(htmlPath, fontToPreload);
  }
  console.log(`  ✓ Injected into ${htmlFiles.length} HTML files`);
}

main();

import sharp from "sharp";
import { mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/process-logo.mjs <source-png>");
  process.exit(1);
}

const publicOut = join(root, "public", "nzo-icon.png");
const appIconOut = join(root, "src", "app", "icon.png");
const appAppleOut = join(root, "src", "app", "apple-icon.png");

function isLogoPixel(r, g, b) {
  // Blue "n" - keep original blue tones including anti-aliased edges
  if (b > r + 12 && b > g + 8 && b > 45) return true;

  const avg = (r + g + b) / 3;
  const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

  // Grey step symbol - keep medium/dark neutral pixels only
  if (avg < 168 && maxDiff < 55) return true;

  return false;
}

async function processToTransparent(inputPath, outputPath, size) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    data[i + 3] = isLogoPixel(r, g, b) ? 255 : 0;
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 1 })
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);
}

mkdirSync(dirname(publicOut), { recursive: true });
mkdirSync(dirname(appIconOut), { recursive: true });

await processToTransparent(source, publicOut, 72);
await processToTransparent(source, appIconOut, 32);
await processToTransparent(source, appAppleOut, 180);

console.log("Processed transparent logo written to:");
console.log("-", publicOut);
console.log("-", appIconOut);
console.log("-", appAppleOut);

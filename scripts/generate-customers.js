const fs = require("fs");
const path = require("path");

const LOGOS_DIR = path.join(process.cwd(), "public", "customer-logos");
const OUT_FILE = path.join(process.cwd(), "src", "data", "customers.json");

/** Derive customer name from filename (without extension). e.g. "acme-dental" → "Acme Dental" */
function fileNameToName(filename) {
  const base = path.basename(filename, path.extname(filename));
  return base
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

const files = fs.readdirSync(LOGOS_DIR).filter((f) => {
  const p = path.join(LOGOS_DIR, f);
  return fs.statSync(p).isFile();
});

const customers = files.map((file) => ({
  name: fileNameToName(file),
  logo: file,
}));

fs.writeFileSync(OUT_FILE, JSON.stringify(customers, null, 2) + "\n");
console.log(`Generated ${OUT_FILE} with ${customers.length} customers from public/customer-logos`);
console.log(customers.map((c) => `  ${c.logo} → "${c.name}"`).join("\n"));

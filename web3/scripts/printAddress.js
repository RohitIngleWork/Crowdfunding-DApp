// web3/scripts/printAddress.js
// Load environment variables explicitly from web3/.env so script behavior is deterministic
require("dotenv").config({ path: __dirname + "/../.env" });
const { Wallet } = require("ethers");

const envPath = __dirname + "/../.env";
const pk = process.env.PRIVATE_KEY;

// Mask helper: show first 6 and last 4 characters
function maskKey(key) {
  if (!key) return "<undefined>";
  const visibleStart = key.slice(0, 6);
  const visibleEnd = key.slice(-4);
  return `${visibleStart}…${visibleEnd}`;
}

console.log("Loaded env from:", envPath);

if (!pk) {
  console.error("PRIVATE_KEY is not defined (after loading env).");
  process.exit(1);
}

// Basic validation
const pkTrimmed = pk.trim();
const beginsWith0x = pkTrimmed.startsWith("0x");
const hexPart = beginsWith0x ? pkTrimmed.slice(2) : pkTrimmed;
const isHex = /^[0-9a-fA-F]+$/.test(hexPart);
const validLength = hexPart.length === 64;

console.log("PRIVATE_KEY defined:", maskKey(pkTrimmed));
console.log("PRIVATE_KEY looks like hex:", isHex && validLength ? "yes" : "no");
if (!beginsWith0x) console.warn("PRIVATE_KEY does not begin with '0x'.");
if (pkTrimmed.includes(" ")) console.warn("PRIVATE_KEY contains whitespace.");

// Instantiate wallet (works for ethers v5 and v6)
try {
  const wallet = new Wallet(pkTrimmed);
  console.log("Address:", wallet.address);
} catch (err) {
  console.error("Failed to create wallet:", err.message);
  process.exit(1);
}

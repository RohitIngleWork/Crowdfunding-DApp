// web3/scripts/deploy.js
// Load environment variables explicitly from web3/.env to avoid CWD or shell overrides
require("dotenv").config({ path: __dirname + "/../.env" });

const { JsonRpcProvider, Wallet, ContractFactory } = require("ethers");
const path = require("path");

function maskKey(key) {
  if (!key) return "<undefined>";
  const s = key.slice(0, 6);
  const e = key.slice(-4);
  return `${s}…${e}`;
}

async function main() {
  // Read config from env
  const rpc = process.env.SEPOLIA_RPC || "https://sepolia.rpc.thirdweb.com";
  const pk = process.env.PRIVATE_KEY;
  const envPath = path.join(__dirname, "../.env");

  console.log("Loaded env from:", envPath);
  if (!pk) {
    console.error("PRIVATE_KEY is not defined (after loading env). Aborting.");
    process.exit(1);
  }

  console.log("Using deployer (masked):", maskKey(pk));

  // Create provider and wallet
  const provider = new JsonRpcProvider(rpc);
  const wallet = new Wallet(pk.trim(), provider);
  console.log("Deployer address:", wallet.address);

  // Load compiled artifact (from artifacts-zk)
  const artifactPath = path.join(__dirname, "../artifacts-zk/contracts/CrowdFunding.sol/CrowdFunding.json");
  let artifact;
  try {
    artifact = require(artifactPath);
  } catch (err) {
    console.error("Could not read artifact:", artifactPath, err.message);
    process.exit(1);
  }

  const factory = new ContractFactory(artifact.abi, artifact.bytecode, wallet);

  console.log("Deploying contract...");
  const contract = await factory.deploy();
  console.log("Deploy tx hash:", contract.deployTransaction.hash);

  await contract.deployed();
  console.log("CrowdFunding deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error in deploy:", err);
    process.exit(1);
  });

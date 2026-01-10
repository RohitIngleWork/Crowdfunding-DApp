# Crowdfunding-DApp  
### Decentralized Crowdfunding Platform using Blockchain

Crowdfunding-DApp is a **blockchain-based decentralized crowdfunding application** that allows users to create, fund, and manage campaigns in a **secure, transparent, and trustless manner** using Ethereum smart contracts.

---

## 🚀 Project Overview

Traditional crowdfunding platforms are centralized and often suffer from issues such as lack of transparency, fund misuse, and dependency on intermediaries.  
**Crowdfunding-DApp** overcomes these challenges by leveraging **blockchain technology**, where all campaign operations and transactions are executed through **immutable smart contracts**.

This ensures:
- Full transparency
- No third-party interference
- Trustless fund handling

---

## ✨ Key Features

- 🔐 **Decentralized System** – No central authority controls user funds  
- 📜 **Smart Contract Enforcement** – Campaign rules executed on-chain  
- 💸 **Secure Fund Transfers** – Direct blockchain-based transactions  
- 👥 **Campaign Creation** – Anyone can start a crowdfunding campaign  
- 🔍 **Public Transparency** – All transactions are verifiable on Ethereum  
- 🌐 **Web3 Wallet Integration** – MetaMask-based authentication  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- HTML5, CSS3, JavaScript  
- Web3.js / Ethers.js  

### Blockchain
- Ethereum  
- Solidity (Smart Contracts)  

### Tools & Frameworks
- Hardhat / Truffle  
- MetaMask  
- Node.js  
- Git & GitHub
- Thirdweb
  
**Thirdweb** is a tool for creating, deploying, and managing dApps on the Ethereum blockchain and **hardhat** is a development environment for Ethereum smart contract development.

---

## 🧩 System Architecture

1. User connects wallet via MetaMask  
2. React frontend interacts with Ethereum smart contracts  
3. Smart contracts manage:
   - Campaign creation
   - Contributions
   - Fund withdrawal logic  
4. Blockchain ensures immutability and transparency  

---

## Challenges faced While Building this project:

Though there were many but some of the major challenges we faced while building this crowdfunding DApp are:
- Migrating from Goerli testnet to Sepolia testnet
- Integration of Sepolia test network with the Ethereum Blockchain
- Keeping an eye on deprecated standards of web3 adding new functionality to the DApp

## How to Install and Run?

To Install and run this Blockchain based crowdfunding platform locally, one must follow all the steps mentioned below:

### Prerequisites
- Node.js (v16 or higher)
- MetaMask browser extension
- Git

### Steps

# Clone the repository
git clone https://github.com/RohitIngleWork/Crowdfunding-DApp.git

# Navigate to the project directory
cd Crowdfunding-DApp

# Install dependencies
npm install

# Deploy smart contracts
npx hardhat run scripts/deploy.js --network localhost ->This needs to be changed

# Start frontend application
npm start

Open your browser and visit http://localhost:5173 to view the user interface of the crowdfunding platform.

## How to Use?

To use this DApp user must have an extension called [Metamask](https://metamask.io/download/), this is a web browser extension, you can install it on Firefox, Chrome, Opera,etc.


## 🔐 Security Considerations

- Smart contracts are designed following best practices to mitigate common blockchain vulnerabilities  
- Immutable blockchain transactions ensure that funds cannot be altered or tampered with  
- Wallet-based authentication (MetaMask) removes the need for password storage, reducing security risks  

---

## 📈 Future Enhancements

- Campaign milestones with conditional and automated fund release  
- DAO-based voting mechanism for decentralized campaign governance  
- IPFS integration for decentralized storage of campaign media and metadata  
- Multi-chain deployment support (Polygon, BSC, and other EVM-compatible networks)  

---

## 🎯 Learning Outcomes

- Gained practical hands-on experience with **Ethereum and Solidity**  
- Developed a strong understanding of **Web3 and DApp architecture**  
- Learned smart contract development, deployment, and testing  
- Implemented seamless integration between frontend applications and blockchain networks  

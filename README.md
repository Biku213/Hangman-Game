# Hangman Game on Aptos Blockchain

## Project Description

This project is a decentralized Hangman game built on the Aptos blockchain. It combines the classic word-guessing gameplay with blockchain technology, offering a unique and secure gaming experience. Players can start a new game, make guesses, and reset the game, all through blockchain transactions. The game features a user-friendly interface built with React and integrates seamlessly with Aptos wallets.

## Primary Purpose

The primary purpose of this project is to demonstrate the integration of blockchain technology with traditional gaming concepts, showcasing how smart contracts can be used to create decentralized applications (dApps) with familiar gameplay mechanics.

## Objectives

- Implement a fully functional Hangman game using Aptos smart contracts
- Create an intuitive and engaging user interface for the game
- Demonstrate secure interaction between a frontend application and blockchain smart contracts
- Showcase the potential of blockchain technology in gaming applications

## Key Features

- Decentralized game logic implemented in Move smart contracts
- Real-time game state updates through blockchain transactions
- Integration with Aptos wallet for secure user authentication and transaction signing
- Responsive and visually appealing user interface
- Word selection from a predefined list using a deterministic algorithm
- Game state persistence on the blockchain

## Tech Stack

- **Blockchain**:

  - Aptos Blockchain
  - Move Programming Language

- **Smart Contract**:

  - Aptos Framework
  - Move Standard Library

- **Frontend**:

  - React.js
  - TypeScript
  - Ant Design (UI components)

- **Blockchain Integration**:

  - Aptos Web3 SDK
  - @aptos-labs/wallet-adapter-react

- **Development Tools**:
  - Node.js
  - npm/yarn

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Configure the Aptos network settings in `utils/aptos.ts`
4. Start the development server: `npm start` or `yarn start`
5. Connect your Aptos-compatible wallet i.e Petra to play the game

## Smart Contract Deployment

1. Install the Aptos CLI following the [official documentation](https://aptos.dev/cli-tools/aptos-cli-tool/install-aptos-cli).
2. Generate your module address and initialize your account:
   ```
   aptos init
   ```
   Choose `testnet` when prompted.
3. Compile the Move module:
   ```
   aptos move compile
   ```
4. Publish the module:
   ```
   aptos move publish
   ```
   Confirm the transaction when prompted.
5. Note the account address output during initialization. You'll use this as your `REACT_APP_MODULE_ADDRESS` and `my_addr`.

### Frontend Setup

1. Clone the repository and install dependencies:
   ```
   git clone <repository-url>
   cd <repository-name>
   npm install
   ```
2. Create a `.env` file in the project root:
   ```
   REACT_APP_MODULE_ADDRESS=<your-account-address>
   ```
3. Set up your Aptos wallet (Petra) and connect to the Testnet.
4. Run the application:
   ```
   npm run start
   ```

Your dApp is now connected to your deployed smart contract on the Aptos testnet.



### The Hangman game smart contract is deployed at the following address on the Aptos testnet:

0xb611addd177ad6191bd7de5a5bb1f15893dfbff8782e6a1f05a6bca5297984e7

**Ensure that your wallet is connected to the Aptos testnet to interact with the game.**

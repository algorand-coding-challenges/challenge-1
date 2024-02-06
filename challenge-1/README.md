# Algorand Fix The Bug Challenge #1

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

Inside of `index.ts` file, there is a script that sends a payment transaction that sends 1,000,000 microAlgos (1 ALGO) to the receiver's wallet. However if you try running the `index.ts` file after opening Docker Desktop and then running:
```bash
algokit bootstrap all
algokit localnet start
npm start
```
it will fail and show this error: `TypeError: Argument must be byte array`

**Find out what is wrong and fix the bug.**

## Prerequisites

1. Install [AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run local Algorand network for development.

## Instructions

### 1. Steps to fix the bug

1. Install dependencies using AlgoKit. Run the below command inside of the `challenge-1` folder.
```bash
algokit bootstrap all
```
2. Create a `.env` file inside of `challenge-1` folder and copy paste the contents inside of `.env.template` file.
3. Open Docker Desktop and launch Algorand localnet with `algokit localnet start`. 
4. Run `npm start` in your terminal to run the `index.ts` file and see the error message.
5. Go to `index.ts` file and fix the code to make it work. 
6. Run `npm start` in your terminal to run the `index.ts` file.
If you see: `Payment of 1000000 microAlgos was sent to [receiver's address]` in the console, you successfully fixed the bug! 👏

### 2. How to Submit Your Answer

1. After fixing the bug, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the logged sentence.
   4. Wallet address to receive the reward NFT.
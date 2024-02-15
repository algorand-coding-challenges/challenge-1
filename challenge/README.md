# Algorand Coding Challenge #1: Fix the Bug!

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

Inside of `index.ts` file, there is a script that sends a payment transaction that sends 1,000,000 microAlgos (1 ALGO) to the receiver's wallet. However if you try running the `index.ts` file after opening Docker Desktop and then running:
```bash
algokit bootstrap all
algokit localnet start
npm run start
```
it will fail and show this error: `TypeError: Argument must be byte array`

**Find out what is wrong and fix the bug.**

## Instructions

### 1. Set up your development environment

Install dependencies and autogenerate the `.env` file using AlgoKit. Run the below command inside of the `challenge` folder.
```bash
algokit bootstrap all
```

Now you are ready to fix the bug!

### 2. Steps to fix the bug

1. Open Docker Desktop and launch Algorand localnet with `algokit localnet start`. 
2. Run `npm run start` in the `challenge` directory to run the `index.ts` file and see the error message.
3. Go to `index.ts` file and fix the code to make it work. 
4. Run `npm run start` in `challenge` directory to run the `index.ts` file.
If you see: `Payment of 1000000 microAlgos was sent to [receiver's address]` in the console, you successfully fixed the bug! 👏

### 3. How to Submit Your Answer

1. After fixing the bug, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the logged sentence.
   4. Wallet address to receive the reward NFT.
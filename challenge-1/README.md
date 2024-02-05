# Algorand Fix The Bug Challenge #1

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

Inside of `index.ts` file, there is a script that sends a payment transaction that sends 1,000,000 microAlgos (1 ALGO) to the receiver's wallet. However if you try running the `index.ts` file after opening Docker Desktop and then running:
```bash
algokit localnet start
bun run index.ts
```
it will fail and show this error: `TypeError: Argument must be byte array`

**Find out what is wrong and fix the bug.**

## Prerequisites

1. Install [Bun](https://bun.sh/docs/installation). Bun was used as it can [directly run TypeScript files](https://bun.sh/docs/runtime/typescript). 
2. Install [AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
3. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run local Algorand network for development.

## Instructions

### 1. Set up your development environment
1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Go to the directory you want to work in with your terminal and clone the forked repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing. The below code example works only if you are using VSCode as your default editor and have the `code .` shorthand set up.
```bash
cd [CLONED_REPO]
code . 
```
4. Install dependencies using AlgoKit. Run the below command inside of the `challenge-1` folder.
```bash
algokit bootstrap all
```

Now you are ready to fix the bug!

### 2. Steps to fix the bug
1. Go to `index.ts` file and fix the code to make it work. 
2. Open Docker Desktop and launch Algorand localnet with `algokit localnet start`. 
3. Run `bun run index.ts` in your terminal.
If you see: `Payment of 1000000 microAlgos was sent to [receiver's address]` in the console, you successfully fixed the bug! 👏

### 3. How to Submit Your Answer

1. After fixing the bug, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the logged sentence.
   4. Wallet address to receive the reward NFT.

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

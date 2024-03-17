import algosdk from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

const algodClient = algokit.getAlgoClient();

// Retrieve 2 accounts from localnet kmd
const sender = await algokit.getLocalNetDispenserAccount(algodClient);
const receiver = await algokit.mnemonicAccountFromEnvironment(
    { name: 'RECEIVER', fundWith: algokit.algos(100) },
    algodClient,
);

/*
TODO: edit code below

Puzzle: 
The below code is trying to send a payment from accounts[0] to accounts[1]. 
However, the code is not working. Fix the code so that the payment is sent 
successfully. 

When solved correctly, the console should print out the following:
"Payment of 1000000 microAlgos was sent to RRYKB23LFR62G3P4SFINZDQ4FVDUNWWQ4NOF7K6TP5GO65BQCHYMNTR3CU at confirmed round 59"
*/

// Retrieve suggested transaction parameters
const suggestedParams = await algodClient.getTransactionParams().do();

// Create payment transaction
const txn = algosdk.makePaymentTxnWithSuggestedParams(
    sender.addr, // Sender's address
    receiver.addr, // Receiver's address
    1000000, // Amount in microAlgos
    undefined, // CloseRemainderTo: the address to close any remaining balance to
    undefined, // Note: optional, any arbitrary data
    suggestedParams // Suggested transaction parameters
);

// Sign the transaction
const signedTxn = txn.signTxn(sender.sk);

// Submit the transaction
const txId = signedTxn.txID().toString();
await algodClient.sendRawTransaction(signedTxn.blob).do();

// Wait for confirmation
const confirmedTxn = await algodClient.waitForConfirmation(txId, 3);

console.log(`Payment of ${txn.amount} microAlgos was sent to ${receiver.addr} at confirmed round ${confirmedTxn['confirmed-round']}`);

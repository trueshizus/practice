const {
  Keypair,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const Solana = () => <h1>Solana</h1>;

export default Solana;

let secretKey = Uint8Array.from([
  194, 255, 136, 4, 230, 116, 60, 144, 171, 161, 156, 5, 139, 80, 243, 51, 211,
  222, 0, 59, 234, 49, 225, 252, 173, 125, 212, 71, 249, 169, 95, 100, 205, 18,
  139, 146, 134, 58, 229, 148, 19, 208, 231, 69, 221, 7, 188, 95, 43, 98, 76,
  210, 18, 168, 253, 148, 30, 107, 95, 81, 138, 90, 125, 207,
]);

let keypair = Keypair.fromSecretKey(secretKey);

let fromKeypair = Keypair.generate();
let toKeypair = Keypair.generate();
let transaction = new Transaction();

transaction.add(
  SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey,
    toPubkey: toKeypair.publicKey,
    lamports: LAMPORTS_PER_SOL,
  })
);

await web3.sendAndConfirmTransaction(connection, allocateTransaction, [payer, keypair]);

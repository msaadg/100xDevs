import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);


  async function sendTokens() {
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(toAddress),
      lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + toAddress);
  }

  return (
    <div>
      <br /> <br />
      <input type="text" placeholder="To" value={toAddress} onChange={(e) => setToAddress(e.target.value)}/>
      <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={sendTokens}>Send</button>
    </div>
  )
}
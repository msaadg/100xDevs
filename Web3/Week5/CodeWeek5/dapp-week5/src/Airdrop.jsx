import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    const amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
    alert("Airdrop completed");
  }

  return <div>
    <br></br>
    <input id="amount" type="text" placeholder="Amount" />
    <button onClick={requestAirdrop}>Airdrop</button>
  </div>;
}
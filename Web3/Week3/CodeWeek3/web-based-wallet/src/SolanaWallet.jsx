import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Connection, Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export const SolanaWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  const connection  = new Connection("https://solana-mainnet.g.alchemy.com/v2/Gwi4KUSWfCni4D4sUaVuxcBxTZqQRiLN")

  return (
    <div>
      <button onClick={async function() {
        const seed = await mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`
        const derivedSeed = derivePath(path, seed.toString('hex')).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);

        const publicKey = keypair.publicKey;
        const balance = await connection.getBalance(publicKey);

        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, { publicKey, balance }]);
      }}>
        Add Wallet
      </button>
      {
        wallets.map(({ publicKey, balance }, index) => <div key={index}>
          Solana - {publicKey.toBase58()} - Balance: {(balance / 1_000_000_000).toFixed(9)} SOl
        </div>
      )}
    </div>
  )
}
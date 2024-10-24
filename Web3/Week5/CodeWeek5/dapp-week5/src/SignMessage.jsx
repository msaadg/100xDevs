import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from 'bs58';

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function sign() {
    if (!publicKey) throw new Error("Wallet not connected");
    if (!signMessage) throw new Error("Wallet does not support message signing");

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Invalid signature");
    alert('success', `Message signature: `);
  }

  return (
    <div>
      <br /> <br />
      <input id="message" type="text" placeholder="Message" />
      <button onClick={sign}>Sign</button>
    </div>
  )
}
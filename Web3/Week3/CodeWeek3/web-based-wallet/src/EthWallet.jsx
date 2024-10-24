import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet, ethers } from "ethers";

export const EthWallet = ({mnemonic}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  const alchemyUrl = "https://eth-mainnet.g.alchemy.com/v2/Gwi4KUSWfCni4D4sUaVuxcBxTZqQRiLN";
  const provider = new ethers.JsonRpcProvider(alchemyUrl);

  return (
    <div>
      <button onClick={async function() {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        const address = wallet.address;

        const balanceInWei = await provider.getBalance(wallet.address);
        const balanceInEth = ethers.formatEther(balanceInWei);

        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, { address, balanceInEth }]);
      }}>
        Add ETH wallet
      </button>
      {
        wallets.map(({ address, balanceInEth }, index) => <div key={index}>
          Eth - {address} - Balance: {balanceInEth} ETH
        </div>
      )}
    </div>
  )
}
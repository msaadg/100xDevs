import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { ShowBalance } from './ShowBalance';
import { SignMessage } from './SignMessage';
import { SendTokens } from './SendTokens';

export default function App() {
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Gwi4KUSWfCni4D4sUaVuxcBxTZqQRiLN"}>
      <WalletProvider wallets={[]} autoConnect>   {/* wallets={Phantom} only if Phantom does not follow the wallet standard  */}
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <Airdrop />
          <ShowBalance />
          <SignMessage />
          <SendTokens />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateMnemonic } from 'bip39'
import { SolanaWallet } from './SolanaWallet'
import { EthWallet } from './EthWallet'

function App() {
  const [mnemonic, setMnemonic] = useState('')

  return (
    <div>
      <button onClick={async function() {
        const mn = await generateMnemonic()
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>
      <br />
      <input value={mnemonic} readOnly />
      <br />
      <SolanaWallet mnemonic={mnemonic} />
      <br />
      <EthWallet mnemonic={mnemonic} />
    </div>
  )
}

export default App

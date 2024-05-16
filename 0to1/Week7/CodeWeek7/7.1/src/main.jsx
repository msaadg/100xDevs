import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouting from './AppRouting.jsx'
import AppPropDrilling from './AppPropDrilling.jsx'
import AppContextAPI from './AppContextAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextAPI />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BidList from './Bid-List.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BidList/>
  </React.StrictMode>,
)

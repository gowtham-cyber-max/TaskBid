import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BidList from './Frontend/BidList.jsx'
import { HashRouter } from 'react-router-dom'
import Pathing from './Pathing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Pathing/>
  </HashRouter>
)

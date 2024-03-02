import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { BreakingNewsContextProvider } from './context/breakingNewsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <BreakingNewsContextProvider>
        <App />
      </BreakingNewsContextProvider>
    </HashRouter>
  </React.StrictMode>,
)

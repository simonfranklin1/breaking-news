import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { newsContextProvider } from "./context/breakingNewsContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <newsContextProvider>
        <App />
      </newsContextProvider>
    </HashRouter>
  </React.StrictMode>,
)

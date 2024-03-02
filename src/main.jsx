import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { breakingNewsContextProvider } from '../context/breakingNewsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <breakingNewsContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </breakingNewsContextProvider>
  </React.StrictMode>,
)

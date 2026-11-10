import React from 'react'
import ReactDOM from 'react-dom/client'
// Global styles first, so each component's CSS Module can override them.
import './styles/global.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('No se encontró el elemento #root en index.html')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

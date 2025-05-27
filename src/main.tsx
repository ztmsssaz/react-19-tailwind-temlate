import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import { loadRuntimeConfig } from './config/runtimeConfig'

loadRuntimeConfig().then(() => {
   createRoot(document.getElementById('root')!).render(
      <StrictMode>
         <App />
      </StrictMode>
   )
})

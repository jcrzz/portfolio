import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('Client main.tsx loaded')

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (err) {
  // ensure errors surface in browser console
  // eslint-disable-next-line no-console
  console.error('Render error:', err)
}

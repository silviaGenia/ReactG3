import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StoreApp } from './StoreApp'
import { CounterApp } from './01-useSate/CounterApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StoreApp title=" Clase" /> */}
    <CounterApp />
  </StrictMode>,
)


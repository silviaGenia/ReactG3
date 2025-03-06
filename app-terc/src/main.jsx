import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StoreApp } from './StoreApp'
import { CounterApp } from './01-useSate/CounterApp'
import { CounterCustomHook } from './01-useSate/CounterCustomHook'
import { LuzHabitacion } from './01-useSate/LuzHabitacion'
import { SimpleFormulario } from './02-useEffect/SimpleFormulario'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <StoreApp title=" Clase" /> */}
    {/* <CounterApp /> */}
    {/* <CounterCustomHook /> */}
    {/*  <LuzHabitacion /> */}
    <SimpleFormulario />
  </StrictMode>,
)


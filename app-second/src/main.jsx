import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreApp } from './StoreApp'
import "./style.css"
import { Button } from './Button'
import { PropType } from './PropType'
import { NavBar } from './NavBar'
import { CounterApp } from './CounterApp'
import { CountApp } from './CountApp'
import { ButtonApp } from './ButtonApp'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <StoreApp title="Mañana" description="Frutas" />
    <StoreApp title="Noche" description="Cenas" /> */}
    {/* <Button label="Guardar" color="white" />
    <Button label="Cancelar" color="red" /> */}
    {/* <PropType description={12} /> */}

    {/* <NavBar value={12} /> */}
    {/* <CounterApp /> */}
    {/* <CountApp value={15} /> */}
    <ButtonApp />
  </React.StrictMode>
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sklep from './components/Sklep.jsx'
import Temperatura from './components/Temperatura.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h1>Zadanie 1.3</h1>
        <Sklep/>
      <h1>Zadanie 2.3</h1>
        <Temperatura/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './App.jsx'
import Hero from './components/Hero.jsx'
import BeneficiosCftv from './components/BeneficiosCftv.jsx'
import Servicos from './components/Servicos.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <Header />
    <Hero/>
    <BeneficiosCftv />
    <Servicos/>
  </StrictMode>
  </>
)

import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import DrugaKompa from './DrugaKompa'
import PrvaKompa from './PrvaKompa'
import Dohvati from './Dohvati'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrvaKompa />
      <DrugaKompa />
      <Dohvati />
    </>
  )
}

export default App

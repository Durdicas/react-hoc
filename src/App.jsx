import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import DrugaKompa from "./components/DrugaKompa";
import PrvaKompa from "./components/PrvaKompa";
import Dohvati from "./Dohvati";
import Login from "./components/Login"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*<PrvaKompa />
      <DrugaKompa />
  <Dohvati />*/}
      <Login />
    </>
  );
}

export default App;

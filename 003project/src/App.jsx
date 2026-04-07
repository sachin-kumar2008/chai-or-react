import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import TableSection from "./components/TableSection";
import CardSection from "./components/CardSection";
import FooterSection from "./components/FooterSection";
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <Header/>
     <Hero/>
     <TextSection/>
     <TableSection/>
     < CardSection />
     <FooterSection/>
    </>
  )
}

export default App

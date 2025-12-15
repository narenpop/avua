import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Discover from './components/Discover'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
        <Navbar />
        <Discover/>
        <Results/>
        <Footer/>
    </div> 
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
          <Content></Content>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='container mx-autp'>
          Content
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

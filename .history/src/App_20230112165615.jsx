import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>
          
        </main>
      </div>
    </Router>
  )
}

export default App

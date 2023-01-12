import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route }
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-500" >
    <Navbar/>
      <h1 className="text-xl">Hello </h1>
      <button className="btn btn-">Text</button>
    </div>
  )
}

export default App

import { useState } from 'react'
import Portfolio from './components/portfolio/Portfolio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Portfolio />
  )
}

export default App

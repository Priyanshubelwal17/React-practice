import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cricket from './Cricket.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Cricket />
  )
}

export default App

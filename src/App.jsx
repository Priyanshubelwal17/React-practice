import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./Greeter.css"
import Cricket from './Cricket.jsx'
import Greeter from './Greeter.jsx'

function App() {
  return (
    <div>
      <Greeter person="bill" />
    </div>
  )
}

export default App

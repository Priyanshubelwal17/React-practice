import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./Greeter.css"
import Cricket from './Cricket.jsx'
import Greeter from './Greeter.jsx'
import Die from './Rolldie.jsx'

function App() {
  return (
    <div>
      <Greeter person='bob' />
      <Die numsides={3} />
      <Die numsides={5} />
      <Die numsides={34} />
      <Die />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./Greeter.css"
import Cricket from './Cricket.jsx'
import Greeter from './Greeter.jsx'
import Die from './Rolldie.jsx'
import ListPicker from './Listpicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'
import Slots from './Slots'
import ShoppingList from './ShoppingList.jsx'

const data = [
  { item: "eggs", quantity: 12, completed: false },
  { item: "milk", quantity: 1, completed: true },
  { item: "chicken breasts", quantity: 4, completed: false },
  { item: "carrots", quantity: 6, completed: true }
];


function App() {
  return (
    <div>
      {/* <Slots val1='🍌' val2='🍌' val3='🍇' /> */}
      <ShoppingList items={data} />


    </div>
  )
}

export default App

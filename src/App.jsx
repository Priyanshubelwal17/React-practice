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
import Property from './PropertyList.jsx'
import Clicker from './Clicker.jsx'
import Form from './form.jsx'
import Counter from './Counter.jsx'
// import Toggler from './Toggler.jsx'
import TogglerCounter from './TogglerCounter.jsx'
import ColorBox from "./ColorBox";
import ColorBoxGrid from './ColorBoxGrid.jsx'

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/* <ColorBox colors={colors} /> */}
    </div>
  );
}


export default App

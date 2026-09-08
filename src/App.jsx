import { useState } from 'react'
import './App.css'
import './Counter.css'
import { Counterapp } from './Counter'
import { SwitchApp } from './Switch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counterapp />
      <SwitchApp />
    </>
  )
}

export default App

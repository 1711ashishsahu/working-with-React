import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15
  const addValue = ()=>{
    // counter = counter + 1
    if (counter>=20) {
      return alert('maximum attempt reached')
    }
    else{
      setCounter(counter + 1)
    }
    // console.log(counter);
  }
  const removeValue = ()=>{
    if (counter<=0) {
      return alert('minimum attempt reached')
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value</button>
      <br />
      <button 
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

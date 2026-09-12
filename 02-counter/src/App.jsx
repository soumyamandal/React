import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1)
  }
 
  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1> chai or react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value : {counter + 1}</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </> 
  )
}

export default App

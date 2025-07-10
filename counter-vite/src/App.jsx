import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setcounter] = useState(15)
    // let counter = 15;
    let addvalue = () => {
      // console.log("counter" , counter);
      if(counter >= 20){
        alert('cant take value greater than 20')
        return
      }
      counter++;
      setcounter(counter);
      /*
      if we increase counter multiple times such as 
      setcounter(counter);
      setcounter(counter);
      setcounter(counter);
      ----these are sent in batches and have a single +1 effect 
      to avoid these we use the callback property of useState
      setcounter(prevcounter => prevcounter + 1)
      setcounter(prevcounter => prevcounter + 1)
      ----two times doing this will result into +2 effect and so on
      */
    }
    let removevalue = () => {
      if(counter <= 0){
        alert('negative number not acceptable')
        return
      }
      counter = counter - 1
      setcounter(counter);
    }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addvalue}
      >Add Value : {counter}</button>
      <br /> 
      <br />
      <button
      onClick={removevalue}
      >Remove Value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App

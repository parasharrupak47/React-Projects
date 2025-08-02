import { useCallback, useState, useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setlength] = useState(8);
  const [numallow , setnumallow] = useState(false)
  const [charallow , setcharallow] = useState(false)
  const [pass , setpass] = useState("")

  /*
  usecallback(function , dependency)
  */

  // to increase the user experience we use useref 
  const passref = useRef(null)
  const copyclipboard = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
  } , [pass])

  const Passwordgenerator = useCallback(() => {
      let pas = ""
      let str = "ABCDEFGHEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numallow){
        str += "01234556789"
      }
      if(charallow){
        str += "~!@#$%^&*()<>?/\|{}[];:'"
      }
      for (let i = 0; i < length; i++) {
        let char = Math.floor((Math.random() * str.length)) + 1
        pas += str.charAt(char);
        
      }
      setpass(pas)
  } , [length , numallow , charallow , setpass])

  useEffect(() => {
    Passwordgenerator()
  } , [length , numallow , charallow , setpass])


  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 bg-gray-700 text-orange-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='bg-amber-950 flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={pass}
          className='outline-none w-full py-2 px-4'
          placeholder='PASSWORD'
          readOnly
          ref={passref}
        />
        <button
        onClick={() => {
          copyclipboard()
        }}
        className='bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition duration-200'
      >
        Copy
      </button>
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setlength(parseInt(e.target.value))
          }}
          />
        </div>
       <label className='text-white'>length : {length}</label>
        <div className='flex items-center gap-x-1'>
          <label className='text-white'>Numbers : {numallow}</label>
          <input
          type='checkbox'
          defaultChecked={numallow}
          id='numberinput'
          onChange={() => {
            setnumallow((prev) => !prev)
          }}
          />
        </div>
        <div className='flex items-center gap-x-1'>
          <label className='text-white'>Characters : {charallow}</label>
          <input
          type='checkbox'
          defaultChecked={charallow}
          id='characterinput'
          onChange={() => {
            setcharallow((prev) => !prev)
          }}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

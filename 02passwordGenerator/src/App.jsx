import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {

  const [length,setLength] = useState(9);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(numberAllowed) str+="~!@#$%^&*()_-=+{}"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length+1)
        pass = str.charAt(char)

    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,password])

  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg px-4 py-4 my-8 bg-gray-500'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
      </div>
      <div className='flex text-center text-sm gap-x-2'>
        <div className='flex  items-center gap-x-1'>
          <input 
          type="range"
           min={6} 
           max={40}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{
            setLength(e.target.value)
           }}
           />
          <label>Length: {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) =>
              !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) =>
              !prev);
          }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

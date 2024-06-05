import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("")
  return (
    <div className='w-full h-screen duration-200 flex justify-center'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white' 
          onClick={() => setcolor("red")}
          style={{backgroundColor:"red"}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' 
          onClick={() => setcolor("green")}
          style={{backgroundColor:"green"}}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' 
          onClick={() => setcolor("gold")}
          style={{backgroundColor:"gold"}}>Gold</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' 
          onClick={() => setcolor("crimson")}
          style={{backgroundColor:"crimson"}}>Crimson</button>
          <button className='outline-none px-4 py-1 rounded-full text-white' 
          onClick={() => setcolor("midnightblue")}
          style={{backgroundColor:"midnightblue"}}>Blue</button>
          
        </div>
      </div>
    </div>
  )
}

export default App

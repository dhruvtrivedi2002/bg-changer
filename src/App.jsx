import React from 'react'
import { useState } from 'react'

function App() {

  let [color,setcolor]=useState("black")


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex-wrap flex bottom-12 inset-x-0 justify-center text-black px-2 ">
      <div className="flex flex-wrap justify-center gap-3 bg-white">
        <button onClick={()=>{setcolor("pink")}}className="rounded text-2xl px-4 py-3 text-pink-950 bg-pink-400 ">violet</button>
        <button onClick={()=>{setcolor("blue")}}className="rounded text-2xl px-4 py-3 text-blue-950 bg-blue-400 ">blue</button>
        <button onClick={()=>{setcolor("orange")}}className="rounded text-2xl px-4 py-3 text-orange-950 bg-orange-400 ">orange</button>
        <button onClick={()=>{setcolor("red")}}className="rounded text-2xl px-4 py-3 text-red-950 bg-red-400 ">red</button>
        <button onClick={()=>{setcolor("yellow")}}className="rounded px-4 text-2xl py-3 text-yellow-950 bg-yellow-400 ">yellow</button>
        <button onClick={()=>{setcolor("green")}}className="rounded px-4 py-3 text-2xl text-green-950 bg-green-400 ">green</button>
          </div>
        </div>
    </div>
  )
}
export default App
import React, { useState } from 'react'
import './App.css'

function App() {
  return (
<div className=' bg-linear-to-r from-slate-950 to-indigo-950 w-full min-h-screen'>
  <div className='flex justify-center '><h1 className=' font-bold text-2xl text-gray-100 text-shadow-md italic m-14'>Welcome to my Portfolio</h1></div>

  <h2 className="text-gray-100 underline-offset-12 ">
    ABOUT ME 
    <p className="text-gray-100">
      Hi,I'm Naman! I am a passionate software developer who is currently studying at Vidyalankar Institute of technology(wadala).
      I am really interested in coding and specially in how software interacts with the computer hardware where coding comes into play and solving 
      problems in different ways.The projects I have made aims to represent my coding capability and to showcase my skills in problem solving
      and creativity.
    </p>
  </h2>

  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 scrollbar-track-emerald-400">
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
    <div className="border-2 border-red-50 w-96 h-64 snap-center shrink-0"></div>
  </div>
</div>
  )
}

export default App

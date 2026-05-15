import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './Demo'
import Props from './Components/Props'
import Experiment7 from './Components/experiment7'
import UseStateHook from './Components/Hooks/UseStateHook'
import StudentReg from './Components/StudentReg'

function App() {
  const name = "ABES Engineering College"
  const students=[{name:"Jeherpal", rollno:"2503215400056", course:"B.Tech"},
    {name:"Toxic", rollno:"2503215400172", course:"B.Tech"},
    {name:"Anant", rollno:"2503215400032", course:"B.Tech"}];

  return (
    <>
      {/* <h1>Welcome to React</h1>
      <h2>Hello {name}</h2>
      <Demo/>
      <Props name="Jeherpal" rollno="2503215400056" course="B.Tech"/>
      <Experiment7 students={students}/>
      <UseStateHook/> */}
      <StudentReg/>
    </>
  )
}

export default App

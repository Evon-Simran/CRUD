import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emp from './components/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Emp/>
    </>
  )
}

export default App

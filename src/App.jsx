import { useState } from 'react' 
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setpassword] = useState("")
  

  return (
    <>
      <h1 className='text-4xl text-center
       text-white'> Password generator</h1>
    </>
  )
}

export default App

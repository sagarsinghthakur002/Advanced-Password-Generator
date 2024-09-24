import { useCallback, useState } from 'react' 
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setpassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()* str.length +1 )
      password += str[char]

      }

      setpassword(password)



     [length, numberAllowed, charAllowed, setpassword]
  })
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'></div> 
        </div>
    </>
  )
}

export default App

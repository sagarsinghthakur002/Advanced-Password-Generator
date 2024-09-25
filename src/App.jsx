import { useCallback, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  const passwordRef = useRef(null); // Password input ref

  const [form, setForm] = useState({ value: '' });

  // handleForm function
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const PasswordGenerator = useCallback(() => {
    let generatedPassword = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+~`|}{[]:;?';
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length); // index calculation
      generatedPassword += str[charIndex];
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  const passwordMaker = useCallback(() => {
    
      passwordRef.current.select(); // Select password 
      navigator.clipboard.writeText(password); // Copy password 
    
  }, [password]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <div className="w-full max-w-md bg-gray-700 shadow-md rounded-lg px-6 py-8 text-orange-500">
        <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>

        <div className="flex items-center mb-4">
          <input
            ref={passwordRef} // useRef 
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-800 text-white rounded-md"
            placeholder="Generated Password"
            readOnly
          />
          <button
            onClick={passwordMaker}
            className="ml-2 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(e.target.value)} 
          /> 
          <span className="text-white ml-3">Length: {length}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
            className="cursor-pointer"
          />
          <label className="text-white">Allow Numbers</label>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            className="cursor-pointer"
          />
          <label className="text-white">Allow Special Characters</label>
        </div>

        <button
          onClick={PasswordGenerator}
          className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;

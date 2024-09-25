import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({ value: '' });

  // Corrected handleForm function
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
      const charIndex = Math.floor(Math.random() * str.length); // Corrected index calculation
      generatedPassword += str[charIndex];
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>

        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
        />

        <button
          onClick={() => navigator.clipboard.writeText(password)} // Clipboard copy logic
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 ">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)} // Changed onClick to onChange
          />
          <label> Length </label>
        </div>
      </div>

      <div className="flex item-center gap-x-1">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)} // Checkbox for allowing numbers
        />
        <label> Allow Numbers </label>
      </div>

      <div className="flex item-center gap-x-1">
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)} // Checkbox for special characters
        />
        <label> Allow Special Characters </label>
      </div>

      <button
        onClick={PasswordGenerator}
        className="outline-none bg-green-700 text-white px-3 py-0.5 shrink-0 mt-3">
        Generate Password
      </button>
    </>
  );
}

export default App;

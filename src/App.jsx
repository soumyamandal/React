import { useState , useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {str += "0123456789"}
    if(charAllowed) {str += "!@#$%^&*()+-=~`"}

    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  } ,
   [length, numberAllowed,charAllowed , setPassword]
  ) 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator ])

  return (
    <>  
    <div className="w-full max-w-md mx-auto my-8 px-4 py-6 bg-gray-800 rounded-2xl shadow-xl">

  <div className="flex overflow-hidden rounded-xl shadow-lg border border-gray-600">

    <input
      type="text"
      value={password}
      className="w-full bg-gray-900 text-white px-4 py-3 outline-none placeholder-gray-400"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />

    <button
      onClick={copyPasswordToClipboard}
      className="px-5 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-200"
    >
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cusrsor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label className='text-orange-500'>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput" className='text-orange-500'>Numbers</label>
      </div>
       <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput" className='text-orange-500'>Character</label>
      </div>

    </div>
</div>
    </>
  )
}

export default App

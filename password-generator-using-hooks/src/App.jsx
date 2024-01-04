import { useState,useCallback,useEffect,useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [Password, setPassword] = useState("")
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (characters) str += "~!@#$%^&*<>"
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,numbers,characters,setPassword])
  const PasswordRef = useRef(null)
  const copytoClipcoard = useCallback(() => {
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])
useEffect(()=>generatePassword(),[length,numbers,characters,generatePassword])
  return (
    <>
      <div className="w-full max-w-md  text-orange-600 bg-gray-700 rounded-lg shadow-md px-4 py-3 my-8  text-center ">
        <h1 className=" text-white text-2xl mb-4 " >Password generator</h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
          <input type="text"
            value={Password}
            placeholder="Password"
            className=" w-full outline-none px-3 py-1 "
            readOnly
            ref={PasswordRef}
          />
          <button onClick={copytoClipcoard} className=" outline-none bg-blue-600 px-3 py-0 text-white" >copy</button>
        </div>
        <div className="flex gap-x-3 text-sm">
          <div className="flex items-center gap-x-1">
            <input type="range"
              value={length}
              min={8}
              max={20}
              className=" cursor-pointer  "
            onChange={e=>setLength(e.target.value)}
            /> <label >Length:{ length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numbers} id="numberInput"
            onClick={()=>{setNumber(prev=>!prev)}}
            /> <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characters} id="characterInput"
            onClick={()=>{setCharacters(prev=>!prev)}}
            /> <label >Characters</label>
          </div>
          </div>
      </div>
    </>
  )
  }

export default App

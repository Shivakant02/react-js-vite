import { useContext } from "react"
import { useState } from "react"
import userContext from "../context/usercontext"

function Login() {
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')  
    const {setUser}=useContext(userContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="username" />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
   </div>
    )
}
export default Login

import { useState } from 'react'
import Map from './components/Map'
import Avatar from './components/Avatar'


function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
      <h1>value of counter : {count} which is { count%2==0 ? 'Even':'Odd' }</h1>
      <div>
        <button onClick={()=>{setCount(count+1)}}>inc</button>
        <button onClick={() => {
          setCount(count-1)
        }}>dec</button>
        
      </div>
      <Map />
      
      
      <Avatar src="https://wallpapercave.com/wp/wp2722874.jpg" width="100px" height="100px" />
      <Avatar src="https://wallpapercave.com/wp/wp2722874.jpg" width="100px" height="100px" />
      <Avatar src="https://wallpapercave.com/wp/wp2722874.jpg" width="100px" height="100px" />
      {/* use of children props */}
      <div>Hi</div>
      <div>Hello</div>
      <Avatar />

        
      
    </>
  )
}


export default App

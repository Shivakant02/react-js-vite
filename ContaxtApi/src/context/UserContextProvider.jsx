import { useState } from "react";
import userContext from "./usercontext";
// import React from "react";
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserContextProvider

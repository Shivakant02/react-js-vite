import { useContext } from "react"
// import { useCallback } from "react"
import userContext from "../context/usercontext"


function Profile() {
    const { user } = useContext(userContext)
    if (!user) return <div>Please login</div>
    else
    return <div>Welcome { user.username}</div>
}
export default Profile
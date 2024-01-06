import { useParams } from "react-router-dom";

export function User() {
    const { userId } = useParams()
    return (
        <div>
            User: {userId}
        </div>
    )
}
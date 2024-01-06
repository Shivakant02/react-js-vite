import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export function GitHub() {
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shivakant02').then(response => response.json()).then(data => {
    //         // console.log(data);
    //          setData(data)
    //     })
    // },[])
    const data=useLoaderData()
    
    return (
        <div className=" 
        text-center ">Github Id: {data.id }</div>
    )
}
export const githubInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/Shivakant02')
        return response.json()
}

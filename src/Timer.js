import React,{useEffect, useState} from 'react'

export default function Timer() {
    const [time,setTime]=useState(new Date().toLocaleTimeString())

//mounting phase .... 

//unmounting phase

    //onload
    useEffect(()=>{
        console.log("use effect is running ....")
       let interval = setInterval(()=>{
           console.log("running setinterval ......")
        setTime(new Date().toLocaleTimeString())
       },1000)

       return ()=>{
           console.log("component is unmounting ...")
            clearInterval(interval)
       }
    },[])

  return (
    <div>
        <h1>Timer</h1>
        <h2>{time}</h2>
    </div>
  )
}

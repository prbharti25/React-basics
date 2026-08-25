import { useState } from "react";
import Decrement from "./Decrement"

export default function Increment({counts,setCounts}){  //destructure of counts and setCounts (they come as objects)
 
    return (
        <>
        <h2>Child Counter is {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        </>
    )
} 
import { useState } from "react";

export default function Decrement({counts, setCounts}){ //destructure of counts and setCounts (they come as objects)
 
    return (
        <>
        <button onClick={()=>setCounts(counts-1)}>Decrement</button>
        </> 
    )
}
import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Increment from "./Increment"
import Decrement from "./Decrement"

function App(){

  const [count,setCount] = useState(0);

  // {counts}, {setCounts} in Increment/Decrement is like passing argument to function.
  // Parent can call its children({argument}) but children can't call its parent.
  return (
    <>
    <h1>Parent counter is: {count}</h1> 
    <Increment counts = {count} setCounts={setCount}/>  
    <Decrement counts = {count} setCounts={setCount}/>
    </> 
  )
}





ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"

// useMemo hook
// 1: Counter button: increase
// 2: Input field: Fibonnaci number
// 0 1 1 2 3 5 8 13 21 34
// Recursive Code: Time Complexit 2^n

 function App(){
  
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState("")
  // const [result,setResult] = useState(null);
  // counter

  
const Fibbonnaci = useCallback((n)=>{
  if(n<=1)
    return n;

  return Fibbonnaci(n-1)+Fibbonnaci(n-2);
}
,[]);   //empty dependency : since it doesn't depend on any variable, 'n' is argument not dependency

// use the previous result of Fibonacci if counter is changed (only). (similar as useEffect)
// useMemo(callback function, dependency)  Dependency here is [number] when changed then call the Fibbonacci function otherwise use the previous result
  const result = useMemo(()=>Fibbonnaci(number),[number]);

  // useEffect(()=>{
  //   setResult(Fibbonnaci(number));
  // },[number]);


  return (
    <>
     <h1>Counter is: {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>

     <div>
      <h2>Fibbonnaci number is: {result}</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
     </div>
    </>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
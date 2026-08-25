import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Colorful  from "./Component/Colorful";



function Main(){

   const [count, setCount] = useState(0);

   return (
      <>
      <div className="count-container">
         <h1>Counter is: {count} </h1>
         <button onClick={()=>setCount(count+1)} style={{backgroundColor:"grey", width:"100px"}}>Increment {count}</button>
         <button onClick={()=>setCount(count-1)} style={{backgroundColor:"black", width:"100px"}}>Decrement {count}</button>
      </div>
      {/* <Colorful name={count}></Colorful> */}
      <Colorful></Colorful>
      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
import React , { useState,useEffect } from "react";



// background color changer
// color = black(useState)
// body color = black(body.style)
// re-render => call the function again (onClick => setColor())
// useEffect Hook: executed last(when everything has been rendered then callback function is executed)


function Colorful({name}){
   
  const [color, setColor] = useState("black"); //created each time the function is called (re-render)
  // console.log(name);

   // useEffect(callback function, dependency)
  useEffect(()=>{
    console.log("useEffect executed");
    document.body.style.backgroundColor = color  //execute only when color changes
  },[color]);

  // document.body.style.backgroundColor= color;

  return(<>

    <h1>Background Color Changer</h1>
    <div className="button">
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
    </div>

  </>)

}

export default React.memo(Colorful);
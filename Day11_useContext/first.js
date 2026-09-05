import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";



function App(){

  const [count,setCount] = useState(0);
  // console.log(GlobalContext);  //this is an object
 
  // use GlobalContect.Provider to store data in Global file so that everyone can have access over it.
  // Passing value in GlobalContect.Provider as objects
  // on Passing value as GlobalContect.Provider, the previous value present in Global file will be replaced (example : createContext("This is Global context") will be removed)
  return (
    <>
    <Fifth></Fifth>
    <GlobalContext.Provider value={{count:count,setCount:setCount}}> 
      <h1>Hello Coder Army {count}</h1>
      <Second count={count} setCount={setCount} />
    </GlobalContext.Provider>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


// First create a Create Context
// Provid data ko uske andar: Descendent
// Consume the context


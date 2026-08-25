import GlobalContext from "./Global"
import { useContext } from "react"  //to use the data present in the GlobalContext file

export default function Third(){
    
        // const data = useContext(GlobalContext);
        // console.log(GlobalContext);

        const {count,setCount} = useContext(GlobalContext);     //destructuring the data (as count and setCount) present in GlobalContext 

    return (
        <>
         <h2>I am printing (third): {count}</h2>
         <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={()=>setCount(count-5)}>Decrement</button>
        </>
 
    )
}
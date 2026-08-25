import React, {useState} from "react"
import ReactDOM from 'react-dom/client'


function Counter(){

    // let count = 0
    let [count, setCount] = useState(2);

    function incrementNumber(){
        setCount(count+1);
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    } 

    function decrementNumber(){
        setCount(count-1);
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    return (
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={incrementNumber}>Increment {count}</button>
            <button onClick={decrementNumber}>Decrement {count}</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)
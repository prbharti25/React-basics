import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello Coder Army: My clients</h1>
// JSX: {JS Expression} (Output laake de: Result produce)
// JSX: {Statement cannot be written here: like let x=2 or something that produces result or compute something} (inko aap nahi likh sakte)

// props = {
//     name:"Pushp Raj Bharti",
//     age:"20"
// }

// Result produce hona chaiye: string , number, array
function Greet(props) {
    console.log(props);
    return <h2>Ram Ram Bhaiyoo.. {props.name} {props.age}</h2>
};

// const element = <Function_call/>
const element2 = <Greet name="Pushp Raj Bharti" age="20"/>  //get converted into object as props (argument passed and catched as object)

const element3 = <h1 id="first" className="Second"></h1>    //This is argument for h1(id, className)

// <Greet/>: Function call(user defined)
// <div> <h1> <ul>
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(element2);

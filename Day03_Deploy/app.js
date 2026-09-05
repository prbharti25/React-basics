import React from "react";
import ReactDOM from "react-dom/client";

// This gives React element (or JS object)
const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");

// JSX(Javascript XML) : Write HTML like code in JS,  JSX : HTML like syntax
// JSX --(babel (transpiler))-->React element (React.createElement())--->HTML element
// JSX : we can use JS expressions using { object(inside) }

const names = "Pushp"
const obj ={
    age: 20,
    salary: 1234567,
}

const obj2 ={
    backgroundColor : "black",
    color : "green",
    fontSize : "30px",
}


const newElement = (
    <>
        <h1 id="first" className="second">Hello everyone, this is {names}</h1>
        <h2 money="Hello" style={obj2} myattribute={obj.age}>Enjoying the moment...{obj.age}</h2>
        {/* <h2 money="Hello" style={{backgroundColor : "black",color : "green",fontSize : "30px",}} myattribute={obj.age}>Enjoying the moment...{obj.age}</h2> */}
    </>
)   


// from JS object tO HTML element --> by render
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);



// React Component
// class based component(used earlier)
// function based component (to be studied)------

function greet(){
    return <h1>Aur bhai kem cho?..</h1>
};

const meet = ()=>{
    return <h2>Maje me bhai log..</h2>
}

const newElement3 = meet();
const newElement2 = greet();

// const newElement4 = <>{newElement2} {newElement3}</>   //or
const newElement4 = <>{meet()}{greet()}</>

const Reactroot1 = ReactDOM.createRoot(document.getElementById('root'));
Reactroot1.render(newElement2);

// Reactroot1.render(<>{greet()} {meet()}</>);
Reactroot1.render(newElement4);

// Reactroot1.render(meet());

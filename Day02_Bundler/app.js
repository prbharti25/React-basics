const element = React.createElement("h1",{id:"first", className:"Ram", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");

// ReactDOM.render(element,document.getElementById('root'));
// element : 50 card pade hue hai

const div1 = React.createElement('div',{},[element,element2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
// Reactroot.render(element);
// Reactroot.render(element2);
Reactroot.render(div1);

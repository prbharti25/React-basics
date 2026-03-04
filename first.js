

// //---------------------------Create element through JS


// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "Red";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');
// header2.innerText = "Kaise ho aap sab log";
// header2.style.backgroundColor = "black"; 
// header2.style.fontSize = "25px";
// header2.style.color = "white"; 

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);



// //----------------------- React: Object
const React = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);
        
        //itterate over array
        if(typeof children === 'object'){
            for(let val of children)     
            element.append(val);
        }
        else
            element.innerText = children;
        
        //itterate over object
        for(let key in styles){      
            element.style[key] = styles[key];
        }
        return element;
    }
}

const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello Coder Army");
const header2 = React.createElement('h2',{fontSize:"25px", backgroundColor:"green", color:"white"},"Kaise ho aap sab log");
const header3 = React.createElement("h3", {fontSize: "40px", backgroundColor:"red", color: " white"}, 'This is header3 created by me');
const para = React.createElement("p", {fontSize: "20px", backgroundColor: "pink", color: "white"}, "This is paragraph");


// // ReactDOM: is Object (For DOM manipulation- Change in HTML tree)
const ReactDOM = {
        render: function(element,root){ 
                root.append(element);
            }
        }
        
            
const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");
const li4 = React.createElement('li', {}, "Git/GitHub");
const li5 = React.createElement('li', {}, "TypeScript");
const Ul = React.createElement('ul',{fontSize:"30px", backgroundColor:"black", color:"white"}, [li1,li2,li3,li4,li5] )  //array ke form me bhej rhe hai list ko

const para2= React.createElement('p', {fontSize:"25px", color:"black", backgroundColor:"pink"}, "lorem25");
        
        
// // unordered list
// // HTML 
// // CSS
// // JS
        
        

const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);
// root.append(header3);
// root.append(para);

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(header3, document.getElementById('root'));
ReactDOM.render(para, document.getElementById('root'));
ReactDOM.render(Ul,document.getElementById('root'));
ReactDOM.render(para2, document.getElementById('root'));

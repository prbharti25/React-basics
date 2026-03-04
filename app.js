const element = React.createElement("h1",{fontsize:"40px"},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));    //to not use this if we are using React18 or further

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot container controls 'root'

Reactroot.render(element); 
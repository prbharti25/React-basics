import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./Counting";

import { Provider } from "react-redux";
import stores from "./stores";



function App(){
    
    console.log(stores);

    return (
        <Provider store={stores}>
        <Counting></Counting>
        </Provider>
    )
} 


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);

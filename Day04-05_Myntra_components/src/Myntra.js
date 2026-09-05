import React, {useState} from "react";
import ReactDOM from "react-dom/client";

import Header,{Header_1} from "./components/Header"
import Card from "./components/Card";
import Footer from "./components/Footer";
import arrData from "./components/utils/dummy"
 
 
// Header 
// Body(Cards)
// Footer


function App(){

// arrData ki value arr ke ander chali gyi(so use arr.map instead arrData.map)
    let[arr, set_arr] = useState(arrData)

    // it makes changes in the given array
    function sortArray(){
        const sorted = [...arr].sort((a,b)=> a.price-b.price);  //whenever change in arr call set Function
        set_arr(sorted);   //call this set_arr function (...arr -> duplicate array)
    }

    // filter gives new array for the given array
    function filterArray(){
        const new_arr = arrData.filter((value)=> value.price >= 1199);
        set_arr(new_arr);
    }

    function view_all(){
        set_arr([...arrData]);
    }

    return(<>
        <Header/>
        <Header_1/>

        <div className="price-action">
            <button className="sort-by-price" onClick={sortArray}>SORT-PRICE</button>
            <button className="filter-by-price" onClick={filterArray}>1199/- & ABOVE</button>
            <button className="view-all" onClick={view_all}>VIEW ALL</button>
        </div>

        <div className="card-container">
            {
                arr.map((value, index)=> 
                <Card 
                    key={index}
                    cloth={value.cloth} 
                    offer={value.offer}
                    price={value.price} 
                    img={value.img}
                />
                )
            }

        </div>

        <Footer/>

        </>        
    )
}

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(<App/>);

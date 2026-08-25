import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Restaurant(){

    const [restData, setRestData] = useState([]);
    
    useEffect(()=>{

        async function fetchData(){
            try{

                const proxyServer = "https://cors-anywhere.herokuapp.com/"; //need to have temporary access by going to the link and ask to allow access
                const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2198&is-seo-homepage-enabled=true";

                const response = await fetch(proxyServer + swiggyAPI);

                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            }
            catch(error){
                console.log("Fetch error: ", error);
            }
        }
        
        fetchData();

    },[]);

    return(
        <div className="mx-auto mb-40 w-[80%]">
            <div className="text-2xl font-bold mb-5">Top restaurant chains in Delhi</div>
            <div className="grid grid-flow-col grid-rows-1 gap-8 overflow-x-scroll">
                {
                    restData.map((restInfo)=> <RestaurantCard key={restInfo.info.id} restInfo={restInfo} ></RestaurantCard>)
                }
            </div>
        </div>
    )


}
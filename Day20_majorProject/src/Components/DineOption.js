import {dineoutRestaurants} from "../Utils/RestaurantData";
import DineCard from "./DineCard";

export default function DineOption(){

    return(
        <div className="w-[80%] mx-auto my-30">
            <div><p className="text-3xl font-bold mb-2">Discover best restaurants on Dineout</p></div>
            <div className="grid grid-flow-col grid-rows-1 gap-4 overflow-x-auto">
            {
                dineoutRestaurants.map((restaurantData)=> <DineCard key={restaurantData.info.id} restaurantData={restaurantData} ></DineCard>)
            }
            </div>
        </div>
    )

} 
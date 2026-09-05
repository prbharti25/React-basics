import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard";

export default function FoodOption(){

    return (

        <div className="mt-40">
            <div className="text-3xl font-bold mb-5">Order our best food options</div>
            <div className="grid grid-flow-col grid-rows-2 gap-5 pt-5 pb-5 overflow-x-scroll">
                {
                    imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </div>
    
    );

};
import { groceryGridCards } from "../Utils/GroceryData";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){

    return(
        <div className="mt-40">
            
            <div className="text-3xl font-bold mb-2">Shop groceries on Instamart</div>
            <div className="grid grid-flow-col grid-rows-1 gap-10 pt-5 pb-15 overflow-x-auto">
                {
                    groceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
                }
            </div>
        </div>
    );

};
export default function FoodCard({foodData}){

    return(
        <div className="flex size-52">
            <a href={foodData.action.link}>
            <img className="h-52 w-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,h_330/" + foodData?.imageId } />
            </a>
        </div>

    )
    
}
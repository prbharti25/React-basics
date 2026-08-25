export default function RestaurantCard({restInfo}){
    return(
        <div className="w-68 max-h-65">
            <div className="w-68 h-45 rounded-2xl">
            <img className="size-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
            </div>
        </div>
    )
}
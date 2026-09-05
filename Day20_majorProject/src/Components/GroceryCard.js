export default function GroceryCard({groceryData}){

    return(
        <div className="flex h-50 w-40 mb-15">
            
            <div className="h-48 w-40">
                <a href={groceryData.action.link}>
                    <img className="h-48 w-40" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,h_330/" + groceryData?.imageId}></img>
                </a>
            <div><h2 className="text-center text-gray-600 text-xl font-bold mt-3">{groceryData?.action.text}</h2></div>
            
            </div>
        </div>
    )

}
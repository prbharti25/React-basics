export default function DineCard({restaurantData}){

    return(
        <a target="_blank" href={restaurantData.cta.link}>
        <div className="w-82 border-2 rounded-2xl border-gray-200 mb-15">
            
            <div className="relative">
                <img className="w-full block max-h-45 rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restaurantData?.info?.mediaFiles[0]?.url} ></img>
                <div className="absolute inset-0 bg-linear-to-t from-black/85 from-5% via-black/70 via-10% to-transparent to-25%"></div>
                <div className="flex text-white font-bold">
                    <p className="absolute text-xl left-4 bottom-2 max-w-[75%] truncate">{restaurantData?.info?.name}</p>
                    <p className="absolute right-4 bottom-2 whitespace-nowrap">{restaurantData?.info?.rating?.value}<span className="text-yellow-400 text-sm relative ml-0.5 bottom-px left-0.5">★</span></p>
                </div>
            </div>


            <div className="p-3 flex flex-col gap-1 text-[13px]">

                <div className="flex justify-between text-gray-700">
                    <div className="flex gap-1 truncate">{restaurantData?.info?.cuisines[0]} <span className="font-bold text-xl h-1 relative bottom-2">.</span> {restaurantData.info.cuisines[1]}</div>
                    <div className="ml-2 whitespace-nowrap">{restaurantData?.info?.costForTwo}</div>
                </div>

                <div className="flex justify-between text-gray-700">
                    <div className="truncate">{restaurantData?.info?.locationInfo?.formattedAddress}</div>
                    <div className="ml-2 whitespace-nowrap">{restaurantData?.info?.locationInfo?.distanceString}</div>
                </div>


                <div className="text-lg text-center font-bold text-white bg-[#1BA672] px-2 py-1 mt-2 rounded-lg">Flat {restaurantData?.info?.vendorOffer?.infos?.[0]?.discountInfo?.discountValue}% OFF</div>
                <div className="bg-[#C8F9E5] font-bold text-center p-2 mt-2 rounded-lg text-sm text-[#0a8156] font-serif">{restaurantData?.info?.customerOffer?.infos[0]?.description}</div>

            </div> 
            
        </div>
        </a>
    )
}
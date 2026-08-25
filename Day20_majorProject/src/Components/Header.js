// first div : Swiggy logo, buttons and SignIn


export default function Header(){

    return(
        <header className="bg-[#ff5200] font-serif pt-2">
            <div className="py-6 text-[18px]">
                <div className="flex justify-between max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                    <img className="w-50 h-15" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                    <div className="text-white font-bold gap-8 flex items-center">
                        <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                        <a className="border rounded-2xl border-white w-45 px-8 py-5 flex justify-center items-center">Get the App</a>
                        <div className="border rounded-2xl border-black bg-black w-42 px-8 py-5 flex justify-center items-center"><a>Sign in</a></div>
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="h-112.5 w-62.5 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-112.5 w-62.5 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>

                <div className="max-w-[60%] text-[48px] mx-auto px-4 sm:px-6 lg:px-8 text-white font-bold text-center">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                
                <div className="flex justify-center mt-4 max-w-[65%] gap-4 mx-auto pt-2 ">
                        
                    <div className="flex border h-18 border-gray-300 bg-white rounded-2xl w-[35%]">
                        <div className="size-10 my-auto"><img className="rounded-[15px]" src="https://www.clipartmax.com/png/middle/114-1148777_pin-map-pushpin-location-icon-location-pin-icon-transparent.png"></img></div>
                        
                        <input className="bg-white px-0 py-5 w-[75%] font-bold text-gray-800 rounded-2xl" placeholder="Enter your delivery location"></input>
                        {/* <div>icon</div> */}
                    </div>


                    <div className="flex bg-white border h-18 border-gray-300 rounded-2xl w-[55%]">
                        <input className="w-[70%] px-5 py-6 text-[18px] font-bold rounded-2xl" placeholder="Search for restaurant, item or more"></input>
                    </div>
                   
                </div>
            </div>


            <div className="w-[80%] flex justify-center container mx-auto pt-4 pb-10">
                <div>
                    <a href="https://www.swiggy.com/restaurants">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                    </a>
                </div>
            </div>

        </header>
    )

}
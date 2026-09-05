import React, { useState } from "react";
import ReactDOM from "react-dom/client"


function App(){

 
    return (
        
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">

        <div className="w-70 h-100 overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://i.ndtvimg.com/i/2015-07/625-kalam-apj_625x350_71438082260.jpg"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Dr. APJ Abdul Kalam</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>The “Missile Man of India” who inspired millions through science and education.🚀</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        <div className="w-70 h-100  overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://miro.medium.com/v2/0*hF_5HGHBjFayTQbt"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Kalpana chawla</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>The first woman of Indian origin to travel to space and a symbol of courage and ambition. 🌌</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        <div className="w-70 h-100  overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://www.manahotels.in/traveller/wp-content/uploads/2015/04/Jagjit-Singh-latest-album.jpg"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Jagjit Singh</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>The legendary singer who popularized ghazal music in India with his soulful voice. 🎵</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        <div className="w-70 h-100  overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://i.pinimg.com/236x/7c/86/1d/7c861d8c13b4695a2a2fa81a95f596bc.jpg"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Lata Mangeshkar</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>One of the greatest playback singers in Indian history, known as the “Nightingale of India.” 🎤</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        <div className="w-70 h-100  overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://www.onthisday.com/images/people/bhagat-singh.jpg"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Bhagat Singh</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>Fearless Indian revolutionary who fought against British rule, symbol of patriotism</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        <div className="w-70 h-100  overflow-hidden bg-white shadow-md p-4 mt-5">

            <div>
                <img className="w-full h-48 object-cover rounded-2xl" src="https://cdn.britannica.com/26/259826-050-B18132F8/Bhimrao-Ramji-Ambedkar-served-as-Indias-law-minister-from-1947-1951.jpg"/> 
            </div>

            <div className="mt-2 font-bold text-2xl text-gray-700 text-center">
                <h1>Dr. B.R. Ambedkar</h1>
            </div>
            
            <div className="text-gray-500 mt-2 text-center ">
                <p>The chief architect of the Indian Constitution and a champion of social justice and equality. 📜</p>
            </div>

            <div className="mt-3 flex justify-center">
                <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800">Know More</button>
            </div>
             
        </div>

        </div>
             
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



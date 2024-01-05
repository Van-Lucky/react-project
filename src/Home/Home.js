// import React from "react";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom'
import background from '../images/background.jpg'
import logo from'../images/logo2.png';
import bg2 from '../images/bg2.png';
import Facebook from '../images/facebook.gif';
import instargram from '../images/instagram.gif';
import youtube from '../images/youtube.gif';
import twitchter from '../images/twitter.gif';
import telegram from '../images/telegram.gif';

import doctor from '../images/doctor.jpg';


function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden bg-gray-100">
            {/* Make the World */}
                <div className="grid sm:grid-cols-2 gap-4 mt-32 text-gray-800  w-full py-10">
                    <div className="w-full flex flex-col gap-8 lg:justify-center items-center">
                        <div className="span-text flex justify-center items-center gap-2 flex-col text-white">
                            <span className="world-text large rise text-gray-800 text-2xl sm:text-4xl text-center font-bold tracking-wide">Dennics</span>
                            <span className="better large rise outline text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">Check Your DentalHeal Today</span>
                            <p className="text-sm sm:text-md text-gray-900 text-center mt-5">Let's check how your dental health is by our professions with compleate and modern facilities services only at our clinic</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-bold text-gray-600">
                            <Link className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow bg-yellow-500 rounded hover:bg-green-400 duration-300 text-center" to={'./Book'}>BOOK APPOINMENT</Link>

                            <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow rounded hover:bg-green-400 duration-300 text-center">ONLINE CONSULTANT</div>

                            <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow rounded hover:bg-green-400 duration-300 text-center">PROMOTION</div>

                            <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow rounded hover:bg-green-400 duration-300 text-center">READ ARTIVLES</div>
                        </div>
                    </div>

                    <div className="">
                        <img src={doctor} className=""></img>
                    </div>
                </div>
        
            <div className="">
                <div className="">
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}

export default Home;

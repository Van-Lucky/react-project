// import React from "react";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom'
import background from '../about-img/Bg.png'
import logo from'../images/logo2.png';

import nature1 from'../images/nature1.png';

import earth1 from'../images/earth1.png';
import earth2 from'../images/earth2.png';
import earth3 from'../images/earth3.png';
import earth4 from'../images/earth4.png';
import earth5 from'../images/earth5.png';
import earth6 from'../images/earth6.png';

import photo1 from'../images/photo-1.jpg';
import photo2 from'../images/photo-2.jpg';
import photo3 from'../images/photo-3.jpg';

import img1 from'../images/img1.jpg';
import img2 from'../images/img2.jpg';
import img3 from'../images/img3.jpg';

import fotter1 from'../images/fotter1.jpg'
import fotter2 from'../images/fotter2.jpg'
import fotter3 from'../images/fotter3.jpg'
import fotter4 from'../images/fotter4.jpg'
import fotter5 from'../images/fotter5.jpg'
import fotter6 from'../images/fotter6.jpg'


import { FaCalendarAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { RiLoginCircleLine } from "react-icons/ri";


function Appointment () {
    
    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Make the World */}
            <div className="w-full mt-16 h-[388px] flex flex-col justify-center items-center lg:flex-row lg:justify-between bg-no-repeat" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold">SERVICE</span>
                    <div className="flex mt-3 gap-1.5">
                        <span className="world-text block text-md text-yellow-500">Home</span>
                        <span className="world-text block text-md"> // Service</span>
                    </div>
                </div>
            </div>

            {/* What we do */}
            <div className="flex justify-center items-center mt-20">
                <div className="text-sm flex flex-col text-gray-800 max-w-7xl p-4">
                    <span className="world-text text-center text-gray-600">Respon to choose us</span>
                    <span className="text-3xl sm:text-4xl font-bold text-center">WHAT WE ARE DOING</span>
                    <div className="flex justify-center items-center mt-4">
                        <div className="w-16 h-0.5 bg-yellow-500"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth1} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">RECYCLING</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>
                        
                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth2} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">ECO SYSTEM</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth3} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">SAVING FORESTS</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth4} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">WATER REFINING</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth5} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">WIND ENERGY</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth6} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">SAVING ANIMALS</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            {/* the best time */}
            <div className="w-full h-[400px]" style={{background: `url(${nature1})`,}}>
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <span className="text-3xl sm:text-5xl font-bold text-white text-center">THE BEST TIME TO <span className="text-yellow-500">PLANT TREE </span> IS NOW</span>
                        <span className="world-text text-md sm:text-lg font-normal text-center">The only way to make this happened is to take action!</span>
                    </div>
                    <div className="flex gap-4 text-sm mt-8 font-bold">
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border bg-yellow-500 rounded hover:bg-green-400 duration-300">DONATE NOW</div>
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border rounded hover:bg-green-400 duration-300">TAKE ACTION</div>
                    </div>
                </div>
            </div>

            {/* Recent project */}
            <div className="flex justify-center items-center mt-16">
                <div className="text-sm flex flex-col text-gray-700 max-w-7xl p-3">
                    <span className="world-text text-center text-gray-600">Our New</span>
                    <span className="text-3xl font-bold text-center">RECENT PROJECT</span>
                    <div className="flex justify-center items-center mt-3">
                        <div className="w-16 h-0.5 bg-yellow-500"></div>
                    </div>
                    
                    {/* ... */}
                    <div className="flex flex-wrap justify-between items-center mt-5">
                        <div className="flex gap-2 md:gap-8 cursor-pointer">
                            <span className="world-text link link-underline py-1">All</span>
                            <span className="world-text link link-underline py-1">Enviroment</span>
                            <span className="world-text link link-underline py-1">Recycling</span>
                            <span className="world-text link link-underline py-1">Ecology</span>
                            <span className="world-text link link-underline py-1">Climate</span>
                        </div>

                        <div className="">
                            <div className=" py-2 px-4 md:px-6 border border-green-400 rounded text-xs md:text-sm hover:bg-green-500 duration-300 cursor-pointer font-semibold">ALL PROJECT</div>
                        </div>
                    </div>
                    {/* ... */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {/* 1 */}
                        <div className="text-normal border">
                            <img src={photo1} className=""></img>
                            <div className="flex justify-center flex-col p-4 ">
                                <div className="flex flex-col py-4">
                                    <span className="text-md mt-2 text-gray-700 font-bold">GREEN ENVIROMENT</span>
                                    <span className="world-text text-xs mt-2 text-gray-500">Go Green</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* 2 */}
                        <div className="text-normal border">
                            <img src={photo2}></img>
                            <div className="flex justify-center flex-col p-4 ">
                                <div className="flex flex-col py-4">
                                    <span className="text-md mt-2 text-yellow-500 font-bold">CONTROLLING WATER POLLUTION</span>
                                    <span className="world-text text-xs mt-2 text-gray-500">Nature, Plant Seedling</span>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="text-normal border">
                            <img src={photo3}></img>
                            <div className="flex justify-center flex-col p-4 ">
                                <div className="flex flex-col py-4">
                                    <span className="text-md mt-2 text-gray-700 font-bold">PLANTING TREES</span>
                                    <span className="world-text text-xs mt-2 text-gray-500">Enviroment</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* footer */}

            <div className="flex justify-center items-center py-20 bg-gray-800 w-full">
                <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-3">
                    {/* 1 */}
                    <div className="text-sm text-gray-400 font-normal">
                        <img src={logo} className="w-20"></img>
                        <p className="mt-4">Lifting people social challenge democracy micro fight against malnutrition, think tank social innovation global health truth dignity civic engagement</p>
                        <div className=" flex gap-1 items-center mt-4">
                            <div className="text-lg text-white"><PiPhoneCallDuotone /></div>
                            <span className="text-gray-100"> Call us <span className="text-yellow-400">+855 282828</span></span>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="">
                        <div className="text-sm flex flex-col">
                            <span>LATEST POST</span>
                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img1} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img2} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img3} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col font-normal">
                        <span className="text-sm font-bold">INSTAGRAM</span>
                        <div className="grid grid-cols-3 mt-4">
                            <div className=""><img src={fotter1} className="w-32"></img></div>
                            <div className=""><img src={fotter2} className="w-32"></img></div>
                            <div className=""><img src={fotter3} className="w-32"></img></div>
                            <div className=""><img src={fotter4} className="w-32"></img></div>
                            <div className=""><img src={fotter5} className="w-32"></img></div>
                            <div className=""><img src={fotter6} className="w-32"></img></div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="">
                        <div className="text-sm font-normal">
                            <span className="text-sm font-bold">SUBSCRIBE</span>
                            <p className="mt-4">Design thinking diversification efficient recognize potential communities human potential governance change.</p>
                            <div class="w-full flex items-center justify-center mt-4">
                                 <input class="w-full tracking-wide mt-1.5 border border-gray-400 bg-gray-900 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Email' required />
                                 <div class="block text-gray-100 text-2xl bg-yellow-500 p-[7px] px-2 mt-1.5 text-center hover:bg-green-500 duration-300 cursor-pointer"><RiLoginCircleLine /></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Appointment;
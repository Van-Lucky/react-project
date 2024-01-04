// import React from "react";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import background from '../about-img/Bg.png'
import logo from'../images/logo2.png';

import photo1 from'../images/photo-1.jpg';
import photo2 from'../images/photo-2.jpg';
import photo3 from'../images/photo-3.jpg';

import blog1 from'../blog-img/blog1.jpg';
import blog2 from'../blog-img/blog2.jpg';
import blog3 from'../blog-img/blog3.jpg';
import blog4 from'../blog-img/blog4.jpg';
import blog5 from'../blog-img/blog5.jpg';


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

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Fa500Px } from "react-icons/fa";


function Blog () {
    
    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Make the World */}
            <div className="w-full mt-16 h-[388px] flex flex-col justify-center items-center lg:flex-row lg:justify-between bg-no-repeat" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold">BLOG</span>
                    <div className="flex mt-3 gap-1.5">
                        <span className="world-text block text-md text-yellow-500">Home</span>
                        <span className="world-text block text-md"> // Blog</span>
                    </div>
                </div>
            </div>

            {/* our new */}
            <div className="flex justify-center items-center mt-16">
                <div className="text-sm flex flex-col text-gray-700 max-w-7xl p-3">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {/* 1 */}
                        <div className="text-normal border">
                            <img src={photo1} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">HOW TO RECILE THINGS</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* 2 */}
                        <div className="text-normal border">
                            <img src={photo2} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-yellow-500">CONTROLLING WATER POLLUTION</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="text-normal border">
                            <img src={photo3} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">PLANTING TREES</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="text-normal border">
                            <img src={blog2} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">HOW TO RECILE THINGS</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* 5 */}
                        <div className="text-normal border">
                            <img src={blog4} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-yellow-500">CONTROLLING WATER POLLUTION</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="text-normal border">
                            <img src={blog5} className=""></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">PLANTING TREES</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex gap-1 text-sm text-gray-600 cursor-pointer font-bold mt-5 justify-center items-center">
                        <span className="px-3 py-3 bg-gray-200 border hover:bg-gray-300 duration-300">PREV</span>
                        <span className="px-5 py-3 bg-yellow-500 border hover:bg-yellow-400 duration-300">1</span>
                        <span className="px-5 py-3 bg-gray-200 border hover:bg-gray-300 duration-300">2</span>
                        <span className="px-5 py-3 bg-gray-200 border hover:bg-gray-300 duration-300">3</span>
                        <span className="px-3 py-3 bg-gray-200 border hover:bg-gray-300 duration-300">NEXT</span>
                    </div>
                </div>
            </div>

            {/* ... */}
            <div className="max-w-7xl mt-10 p-3">
                <div className="grid md:grid-cols-12 gap-6">
                    <div className="grid md:col-span-9 text-gray-700">
                        {/* 1 */}
                        <div className="text-normal border">
                            <img src={blog1} className=""></img>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>

                        <span className="world-text mt-8">Protect Nature</span>
                        <span className="font-bold mt-1 text-2xl text-yellow-500">CONTROLING WATER POLLUTION</span>

                        <p className="font-semibold mt-3 text-gray-600 text-justify">Empowerment, countries policy agency carbon rights interconnectivity participatory monitoring; aid, disruptor thinkers who make change happen sanitation nonviolent risistance agenda Bloomberg. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>

                        <p className="mt-4 text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam veritatis aliquam, cupiditate voluptatem labore officia, inventore dolorem eaque aut necessitatibus sapiente odio illum! Animi quas facere consectetur iure quibusdam. Empowerment, countries policy agency carbon rights interconnectivity participatory monitoring; aid, disruptor thinkers who make change happen sanitation nonviolent risistance agenda Bloomberg. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>

                        <p className="mt-4 text-gray-600 px-3 border-l-4 border-yellow-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam veritatis aliquam, cupiditate voluptatem labore officia, inventore dolorem eaque aut necessitatibus sapiente odio illum! Animi quas facere consectetur iure quibusdam. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>

                        <p className="font-normal text-gray-600 mt-4 text-justify">Empowerment, countries policy agency carbon rights interconnectivity participatory monitoring; aid, disruptor thinkers who make change happen sanitation nonviolent risistance agenda Bloomberg. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>

                        <div className="flex flex-wrap justify-between py-4 border-t text-gray-500">
                            <span>Tags: Recycling, Water Pollution</span>
                            <div className="flex gap-3 justify-center items-center">
                                <span>Share it on: </span>
                                <FaFacebook />
                                <FaTwitter />
                                <FaGooglePlusG />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:col-span-3">
                        <div className="">
                            {/* enter input */}
                            <div class="w-full flex ">
                                <input class="w-full tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-300 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Enter Keywords...' required />
                                <div class="block text-gray-100 text-2xl bg-yellow-500 p-[7px] px-2 mt-1.5 text-center hover:bg-green-600 duration-300 cursor-pointer"><Fa500Px /></div>
                            </div>

                            <div className="text-gray-700 mt-6">
                                <span className="text-xl font-bold">POPULAR POSTS</span>
                                <div className="h-0.5 mt-2 w-16 bg-yellow-500"></div>
                                <div className="grid grid-cols-12 gap-4 mt-6">
                                    <div className="grid col-span-4"><img src={blog2} className=""></img></div>
                                    <div className="grid col-span-8 text-sm">
                                        <span>Wind Turbines and Solar</span>
                                        <span>Panels</span>
                                        <span className="text-gray-500">09 jan 2018</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-6">
                                    <div className="grid col-span-4"><img src={blog3} className=""></img></div>
                                    <div className="grid col-span-8 text-sm">
                                        <span>Wind Turbines and Solar</span>
                                        <span>Panels</span>
                                        <span className="text-gray-500">08 April 2018</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-6">
                                    <div className="grid col-span-4"><img src={blog4} className=""></img></div>
                                    <div className="grid col-span-8 text-sm">
                                        <span>Wind Turbines and Solar</span>
                                        <span>Panels</span>
                                        <span className="text-gray-500">28 oct 2018</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-gray-700 mt-10">
                                <span className="text-xl font-bold">ARCHIEVES</span>
                                <div className="h-0.5 mt-2 w-10 bg-yellow-500"></div>
                                <div className="grid gap-4 mt-8 text-gray-500 text-sm">
                                    <span>Septerber 2021</span>
                                    <span>October 2021</span>
                                    <span>November 2021</span>
                                    <span>December 2021</span>
                                </div>
                            </div>

                            <div className="text-gray-700 mt-10">
                                <span className="text-xl font-bold">PRODUCT TAGS</span>
                                <div className="h-0.5 mt-2 w-10 bg-yellow-500"></div>
                                <div className="flex flex-wrap gap-2 mt-6 text-gray-500 text-sm">
                                    <span className="p-3 bg-gray-200">Wind Energy</span>
                                    <span className="p-3 bg-gray-200">Recycling</span>
                                    <span className="p-3 bg-gray-200">Forest</span>
                                    <span className="p-3 bg-gray-200">Trees</span>
                                    <span className="p-3 bg-gray-200">Planting</span>
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

export default Blog;
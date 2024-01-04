// import React from "react";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import background from '../about-img/Bg.png'
import logo from'../images/logo2.png';

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
import { PiPhoneCallDuotone } from "react-icons/pi";
import { RiLoginCircleLine } from "react-icons/ri";

import location from "../blog-img/world-location.gif"
import mail from "../blog-img/mail.gif"
import call from "../blog-img/call.gif"


function Contact() {
    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Contact */}
            <div className="w-full mt-16 h-[388px] flex flex-col justify-center items-center lg:flex-row lg:justify-between bg-no-repeat" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold">CONTACT</span>
                    <div className="flex mt-3 gap-1.5">
                        <span className="world-text block text-md text-yellow-500">Home</span>
                        <span className="world-text block text-md"> // Contact</span>
                    </div>
                </div>
            </div>

            {/* Get in touch */}
            <div className="max-w-7xl mt-20 p-3">
                <div className="grid md:grid-cols-12 gap-6 text-gray-700">
                    <div className="grid md:col-span-7">
                        <span className="text-2xl font-bold">SEND US MESSAGE</span>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <div className="w-full">
                                <span>Name*</span>
                                <input class="w-full tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-200 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Name' required />
                            </div>

                            <div className="w-full">
                                <span>Email*</span>
                                <input class="w-full tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-200 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Email' required />
                            </div>

                            <div className="w-full">
                                <span>Phone</span>
                                <input class="w-full tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-200 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Number' required />
                            </div>

                            <div className="w-full">
                                <span>Subject</span>
                                <input class="w-full tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-200 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Text' required />
                            </div>
                        </div>

                        <div className="w-full mt-5">
                            <span>Message*</span>
                            <textarea class="w-full h-72 tracking-wide mt-1.5 text-sm text-gray-900 tracking-wide border border-gray-400 bg-gray-200 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Message' required />
                        </div>
                    </div>
                    <div className="grid md:col-span-5">
                        <div className="">
                            <span className="text-2xl font-bold">GET IN TOUCH</span>
                            <p className="mt-4">Incubation cross-agency coordination; compassion theory of social change elevate. Inspiration working alongside scalable policy, tackling environmental asylum, donate partnership refugee lasting change.</p>

                            {/* Address */}
                            <div className="grid grid-cols-12 gap-4 mt-10">
                                <div className="grid col-span-3 p-3">
                                    <div className="w-16 sm:w-24 h-14 sm:h-20 bg-yellow-500 flex justify-center items-center">
                                        <img src={location} className="rounded-full"></img>
                                    </div>
                                </div>
                                <div className="grid col-span-9 text-sm">
                                    <div className="flex flex-col justify-center gap-3">
                                        <span>Address</span>
                                        <span>No 24, Downtown, KohPich</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mail */}
                            <div className="grid grid-cols-12 gap-4 mt-5">
                                <div className="grid col-span-3 p-3">
                                    <div className="w-16 sm:w-24 h-14 sm:h-20 p-2 bg-yellow-500 flex justify-center items-center">
                                        <img src={mail} className="rounded-full"></img>
                                    </div>
                                </div>
                                <div className="grid col-span-9 text-sm">
                                    <div className="flex flex-col justify-center gap-3">
                                        <span>Email</span>
                                        <span>info@diwali.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Call */}
                            <div className="grid grid-cols-12 gap-4 mt-5">
                                <div className="grid col-span-3 p-3">
                                    <div className="w-16 sm:w-24 h-14 sm:h-20 p-2 bg-yellow-500 flex justify-center items-center">
                                        <img src={call} className="rounded-full"></img>
                                    </div>
                                </div>
                                <div className="grid col-span-9 text-sm">
                                    <div className="flex flex-col justify-center gap-3">
                                        <span>Call us</span>
                                        <span>+855 86 282828</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="flex justify-center items-center mt-10 py-20 bg-gray-800 w-full">
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

export default Contact;
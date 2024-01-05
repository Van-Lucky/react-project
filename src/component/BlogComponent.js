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
        <div className="mt-20 flex justify-center items-center">
            <div className="w-[1080px] text-normal p-4">
                <span className="text-4xl font-bold text-center block mt-10">INVOICE</span>
                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold">Account No.</span>
                            <span>1234567890</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold">Account Name</span>
                            <span>Leslie Holden</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold">Address</span>
                            <span>2828 Poco Mas Drive</span>
                            <span>Dallas, FL, 2088</span>
                        </div>
                    </div>

                    <div className=" p-2 bg-yellow-300 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold">Statement Date</span>
                            <span>November 15,2021</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold">Period Statemnt from</span>
                            <span>November 01,2021</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold">Period Statemnt until</span>
                            <span>November 28,2021</span>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                        <span className="text-2xl font-bold">Meter Information</span>
                        <div className="grid grid-cols-12 mt-5 bg-blue-200">
                            <div className="grid col-span-1 text-center py-2 border"></div>
                            <div className="grid col-span-3 text-center py-2 border">Date</div>
                            <div className="grid col-span-3 text-center py-2 border">Usage</div>
                            <div className="grid col-span-3 text-center py-2 border">Cost</div>
                            <div className="grid col-span-2 text-center py-2 border">Amount</div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="grid col-span-1 text-center py-2 border">1</div>
                            <div className="grid col-span-3 text-center py-2 border">11/01/2021</div>
                            <div className="grid col-span-3 text-center py-2 border">300</div>
                            <div className="grid col-span-3 text-center py-2 border">10</div>
                            <div className="grid col-span-2 text-center py-2 border">800</div>
                        </div>
                </div>

                <div className="flex justify-center items-center mt-10">
                    <div className="max-w-6xl">
                        <span className="text-2xl font-bold mt-10">Bill Summary</span>
                        <div className="p-4 bg-blue-200 mt-5 flex flex-col gap-5">
                            <div className="flex justify-between">
                                <span className="font-bold">Previous Charges ($)</span>
                                <span className="text-gray-600">$ 1.00</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-bold">Current Charges ($)</span>
                                <span className="text-gray-600">$ $ 3,000.00</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-bold">Total Amount ($)</span>
                                <span className="text-gray-600">$ $ 3,008</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-bold">Due Date</span>
                                <span className="text-gray-600">November 19,2022</span>
                            </div>
                        </div>

                        <span className="text-lg font-semibold text-gray-700 mt-10 block">REMINDERS</span>
                        <p className="mt-5">1. Present your statement of Account when paying your utility bill.</p>
                        <p>2. Without this document, you will bie required to provide the account number, account name, and amount to be paid.</p>
                        <p>3. Please check your online accounts after payment in orer to make sur that the payment is pushed through.</p>
                        <p>4. If you have any questions, please contact us at (123) 123-4567 or email us at info@noemail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Blog;
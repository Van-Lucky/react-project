import React, { useEffect } from "react";
import "aos/dist/aos.css";

import doctor from "../images/doctor.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Book() {
  return (
    <div className="mt-20 flex justify-center items-center">
        <div class="mt-8 right-ck border p-5 text-2xl text-white w-[1080px] text-sm text-gray-800">
            <span class="text-3xl font-bold text-gray-800 text-center block">Appointment Request Form</span>
            <span class="text-lg text-gray-500 text-center block mt-2">Let us know how we can help you</span>
            <div class="grid sm:grid-cols-2 gap-4 mt-20">
                <div class="w-full">
                    <span class="block text-md text-gray-900 font-semibold">Frist Name</span>
                    <input class="w-full mt-1.5 border text-gray-800 border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="First Name" required />
                </div>

                <div class="w-full">
                    <span class="block sm text-gray-900 font-semibold">Last Name</span>
                    <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="Last Name" required />
                </div>

                <div class="w-full">
                    <span class="block text-md text-gray-900 font-semibold">Contact Number</span>
                    <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="Number" required />
                </div>

                <div class="w-full">
                    <span class="block sm text-gray-900 font-semibold">Email Address</span>
                    <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="infoflex@info.com" required />
                </div>
            </div>

            {/* address */}
            <div class="w-full mt-4">
                <span class="block sm text-gray-900 font-semibold">Address</span>
                <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="Address" required />
            </div>

            {/* street address */}
            <div class="w-full mt-4">
                <span class="block sm text-gray-900 font-semibold">Street Address</span>
                <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="Street" required />
            </div>

            <div class="grid sm:grid-cols-2 gap-4 mt-5">
                <div class="w-full">
                    <span class="block text-md text-gray-900 font-semibold">City</span>
                    <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="City" required />
                </div>

                <div class="w-full">
                    <span class="block sm text-gray-900 font-semibold">State/Province</span>
                    <input class="w-full text-gray-800 mt-1.5 border border-gray-800 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type="text" placeholder="State or Province" required />
                </div>
            </div>

            {/* service */}
            <div class="mt-6">
                <span className="text-gray-800 font-bold">What services are you interested in? </span>
                <textarea class="block text-gray-800 mt-3 w-full h-40 border border-gray-900 bg-gray-100 bg-opacity-25 focus:outline-none focus:ring-primary-300 p-3 placeholder-gray-500" placeholder="Write Your Message..." ></textarea>
            </div>

            {/* date and time */}
            <div className="mt-10">
                    <span className="text-2xl font-bold text-gray-800">What date and time work best for you?</span>
                <div className="grid sm:grid-cols-2 gap-10 text-gray-900 rounded border-2 border-blue-500 p-4 mt-2">
                    <div className="rounded-lg border border-gray-800 p-2 ">
                        <div className="flex justify-between border-b border-gray-800 py-3">
                            <span>1/05/2024</span>
                            <div><FaCalendarAlt /></div>
                        </div>

                        <div className="flex justify-between border-b border-gray-800 py-3 ">
                            <span>January</span>
                            <div className=""><FaAngleUp />
                            <FaAngleDown /></div>
                        </div>

                        <div className="border">
                            <div className="flex justify-between gap-3 p-2 text-blue-600 bg-gray-400">
                                <span>SUN</span>
                                <span>MON</span>
                                <span>TUE</span>
                                <span>WED</span>
                                <span>THU</span>
                                <span>FRI</span>
                                <span>SAT</span>
                            </div>

                            <div className="grid grid-cols-7 gap-3 p-2">
                                <span className="text-center">1</span>
                                <span className="text-center">2</span>
                                <span className="text-center">3</span>
                                <span className="text-center">4</span>
                                <span className="text-center">5</span>
                                <span className="text-center">6</span>
                                <span className="text-center">7</span>
                                <span className="text-center">8</span>
                                <span className="text-center">9</span>
                                <span className="text-center">10</span>
                                <span className="text-center">11</span>
                                <span className="text-center">12</span>
                                <span className="text-center">13</span>
                                <span className="text-center">14</span>
                                <span className="text-center">15</span>
                                <span className="text-center">16</span>
                                <span className="text-center">17</span>
                                <span className="text-center">18</span>
                                <span className="text-center">19</span>
                                <span className="text-center">20</span>
                                <span className="text-center">21</span>
                                <span className="text-center">22</span>
                                <span className="text-center">23</span>
                                <span className="text-center">24</span>
                                <span className="text-center">25</span>
                                <span className="text-center">26</span>
                                <span className="text-center">27</span>
                                <span className="text-center">28</span>
                                <span className="text-center">29</span>
                                <span className="text-center">30</span>
                                <span className="text-center">31</span>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between py-3 ">
                            <span>Friday, January 08</span>
                            <div className=""><FaAngleUp />
                            <FaAngleDown /></div>
                        </div>

                        <div className="mt-5">
                            <div className="grid grid-cols-2 gap-4">
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">09:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">10:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">11:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">13:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">14:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">15:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">16:00</span>
                                <span className="px-10 py-2 border border-blue-700 rounded-md hover:bg-gray-400 duration-300">17:00</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-10 flex justify-center items-center">
                <button class="text-lg text-center px-14 py-2 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-gray-900 duration-500">
                Submit
                </button>
            </div>
        </div>
    </div>
  );
}

export default Book;

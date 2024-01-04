// import React from "react";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


import doctor from '../images/doctor.jpg';
import doctorgroup from '../images/doctorgroup.jpg';



function Doctor () {
    
    return(
        <div className="flex flex-col justify-center items-center text-gray-900 w-full overflow-hidden bg-gray-100">
            {/* Make the World */}
                <div className="grid sm:grid-cols-2 gap-4 mt-32 text-gray-800  w-full">
                    <div className="w-full flex flex-col gap-8 lg:justify-center items-center">
                        <div className="span-text flex justify-center items-center gap-2 flex-col text-white">
                            <span className="world-text large rise text-gray-800 text-2xl sm:text-4xl text-center font-bold tracking-wide">Dennics</span>
                            <span className="better large rise outline text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider">DOGTOR PAGE</span>
                        </div>

                    </div>

                    <div className="">
                        <img src={doctorgroup} className=""></img>
                    </div>
                </div>

            {/* doctor grid */}
            <div className="mt-10 px-5 sm:p-10">
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>

                    <div className="flex flex-col border shadow">
                        <div className=""><img src={doctor}></img></div>
                        <div className="flex flex-col justify-center items-center gap-1 p-3">
                            <span className="font-semibold text-xl">Name</span>
                            <span className="text-gray-500">Position</span>
                        </div>
                        <Link className="py-2 bg-yellow-500 border text-center text-gray-100 hover:text-gray-900 tracking-wider hover:bg-yellow-300 duration-300 font-bold" to={'/Detail'}>Read More</Link>
                    </div>
                    
                </div>
            </div>

            {/* footer */}
            <div className="mt-10 w-full p-8 bg-gray-700 text-gray-300 text-center">
                <span className="text-center" >Copyright ©  2023-2024 Hospital All rights reserved.</span>
            </div>
        </div>
    );
    
}

export default Doctor;
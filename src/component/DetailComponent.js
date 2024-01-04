// import React from "react";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import doctor from '../images/doctor.jpg';



function Detail () {
    
    return(
        <div className="mt-20 flex flex-col justify-center items-center text-gray-900 w-full overflow-hidden">
            <div className="p-4 sm:p-10">
                <span className="text-2xl text-gray-700 font-bold border-b py-2 block">Doctor Profile</span>
                <div className="grid sm:grid-cols-12 gap-8 mt-5">
                    <div className="grid sm:col-span-4 text-sm shadow">
                        <div className=""><img src={doctor}></img> </div>
                        <div className="flex flex-col gap-2 py-10 px-5">
                            <span className="text-500">Timing</span>
                            <span className="text-2xl font-bold text-yellow-600">Availability</span>
                            <div className="flex justify-between items-center mt-5 border-b border-gray-300 text-gray-500">
                                <span className="">Monday-Friday</span>
                                <span className="py-3 font-semibold">8:00AM - 5:00PM</span>
                            </div>
                            
                            <div className="flex justify-between items-center mt-5 border-b border-gray-300 text-gray-500">
                                <span className="">Saturday</span>
                                <span className="py-3 font-semibold">8:00AM - 12:00PM</span>
                            </div>

                            <div className="flex justify-between items-center mt-5 border-b border-gray-300 text-gray-500">
                                <span className="">Sunday</span>
                                <span className="py-3 font-semibold">8:00AM - 5:00PM</span>
                            </div>
                        </div>
                    </div>


                    <div className="grid sm:col-span-8 text-sm text-gray-500">
                        <div className="w-full">
                            <span className="text-2xl text-gray-700 font-bold py-2 block">Dr. Weerarat Muenploy</span>
                            <span className=" text-gray-800 py-2 block">General Practitioner</span>
                            <div className="flex flex-col gap-4 mt-5">
                                <div className="grid sm:grid-cols-12">
                                    <div className="grid sm:col-span-3 font-semibold">Nationally</div>
                                    <div className="grid sm:col-span-9">THAI</div>
                                </div>

                                <div className="grid sm:grid-cols-12">
                                    <div className="grid sm:col-span-3 font-semibold">Language</div>
                                    <div className="grid sm:col-span-9">Thai/English</div>
                                </div>

                                <div className="grid sm:grid-cols-12">
                                    <div className="grid sm:col-span-3 font-semibold">Speaciality</div>
                                    <div className="grid sm:col-span-9">General Practioner</div>
                                </div>
                            </div>
                            

                            <div className="mt-8">
                                <div className="grid sm:grid-cols-12 py-2">
                                    <div className="grid sm:col-span-4">
                                        <span className="font-semibold">Education</span>
                                    </div>

                                    <div className="grid sm:col-span-8 gap-2">
                                        <span>- M.D., (First class honor, Chiang Mai University, Thailand</span>
                                        <span>- Master of Science Program in Anti-Aging and Regenerative Medicine, Mae Fah Luang University, Thailand</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="grid sm:grid-cols-12 py-2">
                                    <div className="grid sm:col-span-4">
                                        <span className="font-semibold">Diplomats, Certifications and Fellowships</span>
                                    </div>

                                    <div className="grid sm:col-span-8 gap-2">
                                        <span>- Thai Board of Preventive medicine (Lifestyle medicine), Thai Medical Council, Thailand</span>

                                        <span>- IV Nutritional Therapy for Wellness training course, the Integrative Nutrition and Herbal Medicine Association, Thailand</span>

                                        <span>- Practical Bioidentical Hormone Replacement Therapy workshop, H.E.A.T, Thailand</span>

                                        <span>- Chelation therapy course, CMAT, Thailand</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="grid sm:grid-cols-12 py-2">
                                    <div className="grid sm:col-span-4">
                                        <span className="font-semibold">Experience</span>
                                    </div>

                                    <div className="grid sm:col-span-8 gap-2">
                                        <span>- Internship, Lampang hospital, Thailand</span>

                                        <span>- Doctor at Wangnua hospital, Thailand</span>

                                        <span>- Doctor at Theppanya hospital, Chiangmai, Thailand</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Detail;
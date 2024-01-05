import React from "react";
// import React,{useState} from "react";

import { Link } from 'react-router-dom'
import logo from '../images/hospital.png'
import { FcSearch } from "react-icons/fc";
import {Divide as Hamburger} from 'hamburger-react'



function Header()  {

    return(
        <>
            <header className='head w-full flex justify-center items-center fixed top-0 shadow bg-gray-50 font-semibold text-gray-700 z-50 overflow-hidden border-t border-yellow-500'>
                <div className='head-item w-[1280px] flex items-center justify-between  gap-2 px-8 py-2'>
                    <div className="w-full flex items-center">
                        <div className="">
                        <Link to={"/"} ><img src={logo} className="w-16"/></Link> 
                        </div>
                        
                       <div>
                            <h3 className="header-title">Care Clinic</h3>
                       </div>
                    </div>

                    <div id='mySidepanel' className='menu'>
                        <div className="flex flex-col md:flex-row md:items-center leading-5 p-4 gap-6 tracking-wide">
                            <Link className="link link-underline py-1.5" to={'/'}>HOME</Link>
                            <Link className="link link-underline py-1.5" to={'/Doctor'}>DOCTOR</Link>

                            <Link className="link link-underline py-1.5" to={'/Appointment'}>APPOINTMENT</Link>

                            <Link className="link link-underline py-1.5" to={'/Blog'}>INVOICE</Link>

                            <div className="">
                                <Link className="px-6 py-1 shadow border border-green-400 rounded-full hover:bg-yellow-500 hover:border-gray-500 duration-500" to={'/Login'}>LOGIN</Link>
                            </div>
                        </div>
                    </div>

                    <div class="openbtn hidden cursor-pointer text-gray-800  shadow rounded-full z-40 hover:bg-none">
                        <Hamburger
                            direction="right" 
                            size={30} 
                            onToggle = {toggle => {
                            if(toggle){
                                document.getElementById("mySidepanel").style.width = "320px";
                            }
                            else{
                                document.getElementById("mySidepanel").style.width = "0%";
                            }
                        }}/>
                    </div>
                    
                </div>
            </header>
        </>
    );
    
}

export default Header
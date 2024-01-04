import React from "react";
import siginbg from '../images/SignBG.png';
import { SiKeepassxc } from "react-icons/si";
import { GoPasskeyFill } from "react-icons/go";

class Login extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className='w-full w-8/12 lg:w-5/12'>
                    <div className='flex justify-center'>
                        <div className='bg-gray-200 rounded-lg w-11/12 md:w-10/12 lg:w-8/12'>
                            <div className='relative'>
                                <span className='absolute right-0 left-0 top-16 text-center'>Welcome Login Form</span>
                                <img src={siginbg} className="rounded-t-md" alt="logo"/>
                            </div>
                            <span className='mt-6 text-2xl text-gray-600 tracking-wider block text-center'>USER LOGIN</span>
                            <form action='' className='flex gap-5 flex-col px-4 lg:px-16 py-6'>
                                <div className='relative'>
                                    <input className='w-full border rounded-full text-[15px] xl:text-[18px] py-2 px-14 bg-gray-600 focus:outline-none focus:ring-primary-300' type='text ' placeholder='Username' required />
                                    <div className='absolute left-4 top-1.5 md:top-3.5 text-[28px]'> 
                                        <GoPasskeyFill />
                                    </div>
                                </div>
        
                                <div className='relative'>
                                    <input className='w-full border rounded-full text-[15px] xl:text-[18px] py-2 px-14 bg-gray-600 focus:outline-none focus:ring-primary-300' type='text' placeholder='Password' required />
                                    <div className='absolute left-4 top-1.5 md:top-3.5 text-[28px]'>
                                        <SiKeepassxc />
                                    </div>
                                </div>
        
                                <div className='flex justify-between px-1'>
                                    <button class='text-[20px] text-gray-600 hover:text-gray-800 duration-300'>Remember</button>
                                    <button class='text-[20px] text-gray-600 hover:text-gray-800 duration-300'>Forgot Password?</button>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <button class="group relative h-10 w-40 overflow-hidden rounded-lg bg-white text-lg shadow border border-gray-400">
                                        <div class="absolute inset-0 w-0 bg-green-600 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                                        <span class="relative text-gray-600 group-hover:text-white text-md font-semibold tracking-wider">Login</span>
                                    </button>
                                </div>
                                
                            </form> 
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Login;
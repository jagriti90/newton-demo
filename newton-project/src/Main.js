import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Main.css';
const Main = () => { 
    // const opneNew =() => {
    //     window.open('/onflight');
    // }
    return (
        <div>
            <>
                <div className='first_line'>
                    <div className='flex bg-blue-600 p-3 text-mg'>
                        <div>
                            <p className='text-white ml-[35vh] font-bold'>
                                Black Friday is Coming!
                            </p>
                        </div>
                        <div>
                            <a href='#' className='text-white ml-12'>
                                Enjoy extra saving during our biggest sale of the year and become a Perfectland VIP memeber!
                            </a>
                        </div>
                    </div>
                </div>
                <nav className='nav_bar border-b border-gray-400'>
                    <div className='flex'>
                    <ul className='flex ml-[100px] py-3'>
                        <li className='text-blue-600 font-bold text-xl tracking-tight'><NavLink to='./Perfectland'>Perfectland</NavLink></li>
                        <div className='text-blue-600 text-xs font-black tracking-tight'>*</div>
                        <li className='text-gray-500 ml-[40px] hover:bg-blue-600 hover:text-white hover:font-bold rounded-full p-1 text-center'><NavLink to='/flight'>Flights</NavLink></li>
                        <li className='text-gray-500 ml-[40px] hover:bg-blue-600 hover:text-white hover:font-bold rounded-full p-1 text-center'><NavLink to='/hotels'>Hotels</NavLink></li>
                        <li className='text-gray-500 ml-[40px] hover:bg-blue-600 hover:text-white hover:font-bold rounded-full p-1 text-center'><NavLink to='/bundlesSave'>Bundle+Save</NavLink></li>
                        <li className='text-gray-500 ml-[40px] hover:bg-blue-600 hover:text-white hover:font-bold rounded-full p-1 text-center'><NavLink to='/experiences'>Experiences</NavLink></li>
                        <li className='ml-[45vh] bg-blue-700 rounded-full mt-1 p-1 items-center text-center h-6 w-6 text-yellow-400 font-bold text-xs'>VIP</li>
                        <li className='ml-[2px] text-blue-600 p-1  tex-sm text-center'><NavLink to='/JoinVIP'>Join VIP</NavLink></li>
                        <li className='ml-[10px] text-blue-600 p-1 tex-sm text-center'><NavLink to='/Signin'>Sign in</NavLink></li>
                        <li className='ml-[10px] text-blue-600 p-1 tex-sm text-center'> <NavLink to='/Findmytrip'>Find My Trip</NavLink></li>
                        <li className='ml-[10px] text-blue-600 p-1  tex-sm text-center'><NavLink to='/Help'>Help</NavLink> </li>
                    </ul>
                    </div>
                </nav>
            </>
        </div>
    )
}

export default Main
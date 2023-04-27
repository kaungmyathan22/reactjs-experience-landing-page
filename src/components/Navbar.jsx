import { HiMenuAlt3 } from 'react-icons/hi';
import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    function handleNav () {
        setShowNav(perv => !perv)
    }

    return <div className='w-full absolute z-10 mx-auto'>
        <div className='container py-3 flex justify-between items-center'>
            <h1 className='text-white text-3xl font-bold'>
                Experiences
            </h1>
            <ul className='lg:flex hidden gap-10 text-white text-md font-semibold'>
                <li className='cursor-pointer hover:text-white/70'>Home</li>
                <li className='cursor-pointer hover:text-white/70'>Destination</li>
                <li className='cursor-pointer hover:text-white/70'>Reservations</li>
                <li className='cursor-pointer hover:text-white/70'>Amenities</li>
                <li className='cursor-pointer hover:text-white/70'>Rooms</li>
            </ul>
            <HiMenuAlt3 onClick={handleNav} className='text-white cursor-pointer lg:hidden' size={25} />
        </div>
        <div className={`absolute bg-black/90 inset-0 h-screen w-full z-10 lg:hidden ${showNav ? "translate-y-0" : "-translate-y-[100%]"} transition-all duration-500`}>
            <div className="h-full w-full flex items-center justify-center relative">
                <FaTimes onClick={handleNav} className={`text-white font-bold top-[20px] right-[30px] absolute cursor-pointer ${showNav ? "scale-1 opacity-100" : "scale-0 opacity-50"} transition-all delay-500`} />
                <ul className='text-white text-2xl gap-10 flex flex-col items-center'>
                    <li className='cursor-pointer hover:text-white/70'>Home</li>
                    <li className='cursor-pointer hover:text-white/70'>Destination</li>
                    <li className='cursor-pointer hover:text-white/70'>Reservations</li>
                    <li className='cursor-pointer hover:text-white/70'>Amenities</li>
                    <li className='cursor-pointer hover:text-white/70'>Rooms</li>
                </ul>
            </div>
        </div>
    </div >;
};

export default Navbar;

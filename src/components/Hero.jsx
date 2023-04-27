import React from "react";

const Hero = () => {
    return <div className='h-screen w-full relative'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="some alt name" />
        <div className="bg-black/40 absolute inset-0 z-0">
            <div className='z-10 text-white flex justify-center flex-col items-start h-full gap-3 max-w-5xl mx-auto lg:px-0 px-10'>
                <p>All Inclusive</p>
                <h1 className='font-bold lg:text-6xl text-4xl'>Private Beaches & Getaways</h1>
                <p className='lg:text-2xl text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis est, id consequuntur sequi ipsum vitae sit non exercitationem.
                </p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>;
};

export default Hero;

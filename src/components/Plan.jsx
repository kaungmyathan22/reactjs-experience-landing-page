import React from "react";

const Plan = () => {
    return <div className='flex flex-col w-full items-center justify-center'>
        <div className="container grid gap-3 grid-cols-1 lg:grid-cols-2 place-content-center">
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh] lg:h-[80vh] place-content-center'>
                 <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
            </div>
            <div className='flex flex-col gap-4 lg:gap-6 justify-center'>
                <h1 className='lg:text-6xl text-4xl font-bold'>Plan Yourr Next Trip</h1>
                <p className='text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam?
                </p>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates nostrum dolorum reprehenderit error! Doloribus est illo eius saepe? Molestias sapiente perspiciatis doloribus consectetur nihil facilis aliquid eaque vel quisquam.
                </p>
                <div className="flex gap-5">
                    <button className='border-black'>Learn More</button>
                    <button className='text-white bg-black'>Book Your Trip</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Plan;

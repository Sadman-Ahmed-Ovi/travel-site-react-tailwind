import React from 'react';
import pic1 from '../assets/brown mountain.jpg';
import pic2 from '../assets/pexels-pixabay-290595.jpg';
import pic3 from  '../assets/li river.jpg';
import pic4 from '../assets/pexels-pixabay-460621.jpg';
import pic5 from '../assets/turkey.jpg'; 

const Destination = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center' id="destination">
            <h1>All-Inclusive Resorts</h1>
            <p className='py-4'>Best Destinations around the World</p>
            <div className='grid grid-rows-none md:grid-cols-5 gap-2 py-4 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={pic1} alt="/" />
            <img className='w-full h-full object-cover' src={pic2} alt="/" />
            <img className='w-full h-full object-cover' src={pic3} alt="/" />
            <img className='w-full h-full object-cover' src={pic4} alt="/" />
            <img className='w-full h-full object-cover' src={pic5} alt="/" />
        </div>
        </div>
    );
};

export default Destination;
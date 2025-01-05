import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className='container mx-auto px-6'>
                <div className="hero-content flex-col lg:flex-row-reverse gap-y-14 lg:gap-y-0">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Frontend Web Developer</h1>
                        <p className="py-4 italic text-gray-600">"Creative Frontend Web Developer specializing in crafting dynamic, responsive, and user-friendly websites. Proficient in modern technologies like React, Tailwind CSS, and JavaScript to bring innovative designs to life."</p>
                        
                        <button className="btn btn-primary flex justify-center items-center gap-x-1">
                            <ArrowDownTrayIcon className="size-5 text-white" />
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
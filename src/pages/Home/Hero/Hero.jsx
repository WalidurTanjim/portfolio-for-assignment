import React from 'react';
import my_img from "../../../assets/tanjim-removebg-preview.png";
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const Hero = () => {
    return (
        <div className="hero min-h-screen" id="hero">
            <div className='container mx-auto px-6'>
                <div className="hero-content flex-col lg:flex-row-reverse gap-y-14 lg:gap-y-0">
                    <img src={my_img} className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Frontend Web Developer</h1>
                        <p className="py-4 italic text-gray-600">"Creative Frontend Web Developer specializing in crafting dynamic, responsive, and user-friendly websites. Proficient in modern technologies like React, Tailwind CSS, and JavaScript to bring innovative designs to life."</p>
                        
                        <a href="https://docs.google.com/document/d/1g3d4jAGwXoRMr_9bSZYPMRGSlDEaZ_XSD9M2_ZEXEDk/export?format=pdf" download="Resume.pdf" className="btn btn-primary flex justify-center items-center gap-x-1 w-[200px]">
                            <ArrowDownTrayIcon className="size-5 text-white" />
                            Download Resume
                        </a>

                        <div className="mt-5 flex items-center gap-3">
                            <a href='https://www.facebook.com/' target='_block'><ion-icon size="large" name="logo-facebook"></ion-icon></a>
                            <a href='https://www.instagram.com/?hl=en' target='_block'><ion-icon size="large" name="logo-instagram"></ion-icon></a>
                            <a href='https://www.linkedin.com/' target='_block'><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
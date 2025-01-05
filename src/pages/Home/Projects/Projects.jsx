import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import gadgetHeaven from '../../../assets/project-ss/gadget_heaven.png'
import moviePortal from '../../../assets/project-ss/movie_hunt.png'
import peddy from '../../../assets/project-ss/peddy.png'
import teaStoll from '../../../assets/project-ss/tea_stoll.png'
import ecoAdventure from '../../../assets/project-ss/eco_adventure.png'
import serviceScout from '../../../assets/project-ss/service_scout.png'
import cricketMatch from '../../../assets/project-ss/cricket_match.png'
import panda from '../../../assets/project-ss/panda_commerce.png'
import chef from '../../../assets/project-ss/chef.png'

const Projects = () => {
    return (
        <section className='projects container mx-auto px-6 py-14'>
            <SectionTitle title="My Projects" sub_title="My some projects in here" />

            <div className="grid gap-5 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-2 rounded-md border-lg border group">
                    <img src={gadgetHeaven} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Gadget Heaven</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={moviePortal} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Movie Portal</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={peddy} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Peddy</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={teaStoll} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Tea stroll</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={ecoAdventure} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Eco Adventure</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={serviceScout} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Service Scout</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={cricketMatch} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Cricket Match</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={panda} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Panda Commerce</h1>
                </div>

                <div className="p-2 rounded-md border-lg border group">
                    <img src={chef} alt="" className='rounded-md w-full h-[175px]' />
                    <h1 className='mt-2 font-medium group-hover:text-purple-500 cursor-pointer'>Chef's Restaurant</h1>
                </div>
            </div>

            <div className='mt-7 flex items-center justify-center'>
                <button className='btn btn-primary'>Show More</button>
            </div>
        </section>
    );
};

export default Projects;
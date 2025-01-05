import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import WorkWithMe from '../WorkWithMe/WorkWithMe';

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Skills />
            <Education />
            <WorkWithMe />
        </section>
    );
};

export default Home;
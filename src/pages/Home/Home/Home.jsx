import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import WorkWithMe from '../WorkWithMe/WorkWithMe';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Skills />
            <Education />
            <WorkWithMe />
            <Contact />
        </section>
    );
};

export default Home;
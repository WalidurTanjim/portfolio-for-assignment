import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import WorkWithMe from '../WorkWithMe/WorkWithMe';
import Contact from '../../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Skills />
            <Education />
            <WorkWithMe />
            <Projects />
            <Contact />
        </section>
    );
};

export default Home;
import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';

const Home = () => {
    return (
        <section className='home'>
            <Hero />
            <Skills />
            <Education />
        </section>
    );
};

export default Home;
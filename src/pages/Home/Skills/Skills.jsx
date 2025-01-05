import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../../components/SkillCard/SkillCard';
import { CircleStackIcon, CodeBracketSquareIcon, CpuChipIcon, CogIcon } from '@heroicons/react/24/outline';

const Skills = () => {
    return (
        <section className='services py-14'>
            <div className='container mx-auto px-10'>
                <SectionTitle title="My Skills" sub_title="Showcasing Expertise in Modern Web Development" />

                <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    <ServiceCard icon={CircleStackIcon} title="Design" srv_1="HTML5" srv_2="CSS3" srv_3="ReactJS" srv_4="Responsive Design" srv_5="Firebase" />
                    <ServiceCard icon={CodeBracketSquareIcon} title="Development" srv_1="JavaScript" srv_2="Node" srv_3="Express" srv_4="MongoDB" srv_5="JWT" srv_6="Payment Gateway" />
                    <ServiceCard icon={CogIcon} title="Others" srv_1="Database Design" srv_2="Database Management" srv_3="MS Office" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <section className='project_details container mx-auto px-6 py-10 '>
            <h1>Project Details</h1>
        </section>
    );
};

export default ProjectDetails;
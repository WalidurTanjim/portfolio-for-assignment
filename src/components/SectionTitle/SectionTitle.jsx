import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='sectionTitle pb-12'>
            <h1 className='text-2xl font-medium text-center'>{title ? title : undefined}</h1>
        </div>
    );
};

export default SectionTitle;
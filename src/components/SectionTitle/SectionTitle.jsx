import React from 'react';

const SectionTitle = ({ title, sub_title }) => {
    return (
        <div className='sectionTitle pb-12'>
            <p className='text-gray-600'>|| {title ? title : undefined}</p>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-1'>{sub_title ? sub_title : undefined}</h1>
        </div>
    );
};

export default SectionTitle;
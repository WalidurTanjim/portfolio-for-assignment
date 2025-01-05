import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Education = () => {
    return (
        <section className='education container mx-auto px-10 py-14'>
            <SectionTitle title="Educational Qualification" sub_title="Highlight relevant degrees and certifications achieved" />

            <div className="">
                <div className='p-3 border rounded-md mb-5 shadow-sm hover:shadow-lg'>
                    <h1 className='font-medium text-slate-700'>Secondary School Certificate</h1>

                    <div className='mt-3'>
                        <h1 className='text-xl font-medium'>Sristy Academic School</h1>
                        <p>Group: <span className='text-gr mb-1ay-600'>Science</span></p>
                        <p>Passing year: <span className='text-gray-600'>2019</span></p>
                        <p>GPA: <span className='text-gray-600'>4.76</span></p>
                    </div>
                </div>

                <div className='p-3 border rounded-md mb-5 shadow-sm hover:shadow-lg'>
                    <h1 className='font-medium text-slate-700'>Higher Secondary Certificate</h1>

                    <div className='mt-3'>
                        <h1 className='text-xl font-medium'>Sristy College</h1>
                        <p>Group: <span className='text-gr mb-1ay-600'>Commerce</span></p>
                        <p>Passing year: <span className='text-gray-600'>2021</span></p>
                        <p>GPA: <span className='text-gray-600'>4.89</span></p>
                    </div>
                </div>

                <div className='p-3 border rounded-md mb-5 shadow-sm hover:shadow-lg'>
                    <h1 className='font-medium text-slate-700'>Bachelor of Business Administration</h1>

                    <div className='mt-3'>
                        <h1 className='text-xl font-medium mb-1'>Uttara University</h1>
                        <p>Group: <span className='text-gray-600'>Commerce</span></p>
                        <p>Session: <span className='text-gray-600'>2022 - 2026</span></p>
                        <p>Current CGPA: <span className='text-gray-600'>3.53</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
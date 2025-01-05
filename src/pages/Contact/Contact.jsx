import React from 'react';

const Contact = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Welcome back</h1>
                
                <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">Let us know your message</h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
                <form className="w-full lg:max-w-xl">
                    <div className="relative flex items-center">
                        <input type="text" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <textarea type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write Your Message..." rows="3" />
                    </div>

                    <div className="mt-8">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    );
};

export default Contact;
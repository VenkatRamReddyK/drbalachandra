import { HomeIcon, InformationCircleIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import { PhoneIcon } from '@heroicons/react/outline/';

function Contact() {
    return <div className="pt-20 ">
        <div className='container m-auto'>
            <h2 className='p-4 mt-16 text-3xl font-semibold text-center lg:text-5xl'> We welcome you to ours Offices</h2>
            <h3 className='p-4 text-center lg:text-2xl'> We got you covered at Two Major Places</h3>

            <div className='container'>
                <h3 className='p-5 my-5 text-4xl font-semibold'>First <span className='text-pink-400'>Office</span></h3>
                <div>
                    <section className="relative text-gray-600 body-font">
                        <div className="absolute inset-0 bg-gray-300">
                            <iframe width="100%" height="100%" frameborder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3173.46040542281!2d-121.8168121!3d37.3079205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32816eb04c19%3A0x55a5cae1e88ca700!2s1569%20Lexann%20Ave%2C%20San%20Jose%2C%20CA%2095121%2C%20USA!5e0!3m2!1sen!2sin!4v1643043771621!5m2!1sen!"></iframe>
                        </div>
                        <div className="container flex px-5 py-24 mx-auto">
                            <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
                                <h2 className="pb-6 mb-1 text-lg font-medium text-gray-900 title-font">Our First Office is located at</h2>
                                <div className='flex space-x-3'>
                                    <span><OfficeBuildingIcon className='text-pink-400 w-7' /></span>
                                    <p className="mb-5 leading-relaxed text-gray-600">
                                        Dr. Nirmala Balachandra
                                        995 Montague Expressway #119
                                        Milpitas, CA 95035
                                    </p>
                                </div>
                                <div className='flex space-x-3'>
                                    <span><PhoneIcon className='w-6 text-pink-400' /></span>
                                    <p className="mb-5 leading-relaxed text-gray-600">
                                        <a href="tel:408-684-4122">+1 408-929-2002</a>
                                    </p>
                                </div>
                                <div className='flex space-x-3'>
                                    <span><InformationCircleIcon className='w-6 text-pink-400' /></span>
                                    <p className='text-sm text-gray-400 '> Easy Access from 101/280/680/880</p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='container mt-16'>
                <h3 className='p-5 my-5 text-4xl font-semibold'>Second <span className='text-pink-400'>Office</span></h3>
                <div>
                    <section className="relative text-gray-600 body-font">
                        <div className="absolute inset-0 bg-gray-300">
                            <iframe width="100%" height="100%" frameborder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.978372690323!2d-121.8871776846927!3d37.413986079826735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fceb94a482afd%3A0x865a9d7f61016714!2s995%20Montague%20Expy%2C%20Milpitas%2C%20CA%2095035%2C%20USA!5e0!3m2!1sen!2sin!4v1643044705564!5m2!1sen!2sin"></iframe>
                        </div>
                        <div className="container flex px-5 py-24 mx-auto">
                            <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
                                <h2 className="pb-6 mb-1 text-lg font-medium text-gray-900 title-font">Our Second Office is located at</h2>
                                <div className='flex space-x-3'>
                                    <span><OfficeBuildingIcon className='text-pink-400 w-7' /></span>
                                    <p className="mb-5 leading-relaxed text-gray-600">
                                        Dr. Nirmala Balachandra
                                        1569 Lexann Ave., # 214
                                        San Jose, CA 95126
                                    </p>

                                </div>
                                <div className='flex space-x-3'>
                                    <span><PhoneIcon className='w-6 text-pink-400' /></span>
                                    <p className="mb-5 leading-relaxed text-gray-600">
                                        <a href="tel:408-684-4122">+1 408-684-4122</a>
                                    </p>
                                </div>
                                <div className='flex space-x-3'>
                                    <span><InformationCircleIcon className='w-6 text-pink-400' /></span>
                                    <p className='text-sm text-gray-400 '> We are located in San Jose Evergreen Area and close to intersection of Capitol Expressway and Silver Creek / Aborn Road. Easy Access from 101 and Capitol Expressway.</p>
                                </div>
                                <p>

                                </p>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    </div>;
}

export default Contact;

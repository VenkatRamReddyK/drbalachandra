import React from 'react';

function Services() {
    return <div className='bg-gray-50'>


        <section className="w-full bg-gray-50 pt-7 pb-7 md:pt-20 md:pb-24">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-full lg:px-16">

                <div className=" flex justify-center box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src="services.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                </div>

                <div className="box-border order-first max-w-5xl text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        We are specialized in the diagnosis and treatment of the following:
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        We are always confident that our exceptional skills and gentle procedures make you and your family happy and comfortable.
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300 space-y-3">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-300 rounded-full"><span className="text-sm font-bold">✓</span></span>
                            Crowns and Bridges
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Teeth Straightening Using Invisalign

                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Wisdom Teeth Extraction

                        </li>

                    </ul>
                    <div className=' mt-10'>
                        <a href="" className='colorButton w-max'>
                            More Services
                        </a>

                    </div>
                </div>
            </div>

        </section>

    </div>;
}

export default Services;

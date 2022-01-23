import React from 'react';

function Features() {
    return <div>

        <section class="py-20 bg-gray-50">
            <div class="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div class="flex flex-wrap items-center -mx-3">
                    <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div class="w-full lg:max-w-md">
                            <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">We served happy to serve you always</h2>
                            <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">We always provide the highest standard of personalized quality dental care in a professional and in friendly manner.:</p>
                            <ul>
                                <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <img src="pointer.png" alt="" />
                                    <span class="font-medium text-gray-500">  New Patients Welcome</span>
                                </li>
                                <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <img src="pointer.png" alt="" />
                                    <span class="font-medium text-gray-500">Discount for Students and Senior Citizens</span>
                                </li>
                                <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <img src="pointer.png" alt="" />
                                    <span class="font-medium text-gray-500">We use State Of The Art Equipments and Sterlization Techniques</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm" src="doctor-visit.png" alt="feature image" /></div>
                </div>
            </div>
        </section>

    </div>;
}

export default Features;    

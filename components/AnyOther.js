import React from 'react';

function AnyOther() {
    return <div>
        <section class="py-20 bg-white">
            <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-5xl">
                    Still running something in mind 
                </h2>
                <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-3xl">
                   Our Faq has some previously asked question check that out or else reach us by clicking the contact button.
                </p>
                <div class="flex justify-center mt-8 space-x-3">
                    <a href="/Contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow hover:bg-pink-700">Contact Us now</a>
                    <a href="/Faq" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-pink-700 bg-pink-100 border border-transparent rounded-md hover:bg-pink-200">Check out Faq</a>
                </div>
            </div>
        </section>

    </div>;
}

export default AnyOther;

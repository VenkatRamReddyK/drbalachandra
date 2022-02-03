import Link from 'next/link';
import React from 'react';

function AnyOther() {
    return <div>
        <section className="py-20 bg-white">
            <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-5xl">
                    Still running something in mind
                </h2>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-3xl">
                    Our Faq has some previously asked question check that out or else reach us by clicking the contact button.
                </p>
                <div className="flex justify-center mt-8 space-x-3">

                    <Link href="/Contact" ><a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow hover:text-white hover:bg-pink-700">Contact Us now</a></Link>
                    <Link href="/Faq" ><a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-pink-700 bg-pink-100 border border-transparent rounded-md hover:bg-pink-200">Check out Faq</a></Link>
                </div>
            </div>
        </section>

    </div>;
}

export default AnyOther;

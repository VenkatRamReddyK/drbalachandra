
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'


function LandingPage() {
    return <div className='' >
        <main className=''>
            <div className='bg-center bg-cover bg-hero-section 2xl:bg-contain'>
                <div className='container flex flex-row items-center justify-between mx-auto mt-12 -mb-12 lg:mt-5 '>
                    <div className='flex flex-col justify-center m-6'>
                        <h1>
                            This is great and awesome
                        </h1>
                        <p className='mb-10 text-xl'>
                            Served
                            <Typewriter
                                words={[' more than 1M Happy Customers', ' for 18+ years and running still', ' as Family instead of client', ' with confidence']}
                                loop={10}
                                cursor
                                cursorStyle='🦷'
                                typeSpeed={90}
                                deleteSpeed={100}
                                delaySpeed={2000}
                            />
                        </p>
                        <Link className="colorButton w-max" href="/Services">
                            <a className="colorButton w-max">Our Services</a>
                        </Link>
                    </div>
                    <div className=''>
                        <img className='hidden object-contain md:inline-block lg:inline-block' src="/doctor.png" alt="" />
                    </div>

                </div>
            </div>
        </main>
    </div>;
}

export default LandingPage; 

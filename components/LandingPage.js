
import { Typewriter } from 'react-simple-typewriter'


function LandingPage() {
    return <div className='' >
        <main className=''>
            <div className='bg-center bg-cover bg-hero-section'>
                <div className='container flex flex-row items-center justify-between mx-auto '>
                    <div className='flex flex-col justify-center m-6'>
                        <h1>
                            This is great and awesome
                        </h1>
                        <p className='mb-10'>
                            Dentist and doctor are same &nbsp;
                            <Typewriter
                                words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <a href="" className='colorButton w-max'>
                            Our Services
                        </a>
                    </div>
                    <div className=''>
                        <img className='hidden object-contain lg:inline-block' src="/doctor.png" alt="" />
                    </div>

                </div>
            </div>
        </main>

    </div>;
}

export default LandingPage;

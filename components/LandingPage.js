import Card from './Card'

function LandingPage() {
    return <div className=' bg-white'>
        <div className='min-h-screen bg-slate-200 bg-no-repeat flex min-w-full text-center flex-col justify-evenly'>
            <div className=' text-6xl font-semibold  h-1/3 items-center 2xl:text-9xl'>
                Dr Koti Reddy
            </div>
            <div className=' z-10'>
                <div className='flex justify-around '>
                    <Card />
                    <Card />
                </div>
                <div className='flex justify-around '>
                    <Card />
                    <Card />
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1642764557">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

        </div>
    </div>;
}

export default LandingPage;

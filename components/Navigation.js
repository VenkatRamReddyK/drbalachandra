import {MailIcon,PhoneIcon} from  '@heroicons/react/outline/'

function Navigation() {
    return <div>

        <div className='flex justify-between px-3 py-2 z-10 sticky'>
            <h2 className='flex space-x-2'>
                <p className=' font-bold'><MailIcon className='w-5 h-5'/></p> <a href='mailto:drbala@gmail.com'>drbala@gmail.com</a>
            </h2>
            <h2 className='flex space-x-2'>
            <p className=' font-bold'><PhoneIcon className='w-5 h-5'/></p> <a href='mailto:drbala@gmail.com'>+91 987654321</a>
            </h2>
        </div>
        <div className=' flex justify-between h-20 items-center shadow-lg border-t-2 px-5 z-10 sticky'>
            <div className='flex items-center'>
            <img src={'teeth.svg'} alt="" /> <p className=' font-bold'>Dr Balakrishna
            </p></div>

            <div className=' space-x-3'>
                <button className='button'>
                    Home
                </button>
                
                <button>
                    About us
                </button>
                <button>
                    Contact
                </button>
            </div>
        </div>
    </div>;
}

export default Navigation;

import { MailIcon, PhoneIcon, MenuIcon, XIcon } from '@heroicons/react/outline/'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import Link from 'next/link'




function Navigation() {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/About' },
        { name: 'Gallery', href: '/Gallery' },
        { name: 'Services', href: '/Services' },
        { name: 'Contact', href: '/Contact' },
    ]
    // const [Navbar, setNavbar] = useState(false);
    // const changeBackground = () => {
    //     if (window.scrollY >= 80)
    //         setNavbar(true)

    //     else
    //         setNavbar(false)
    // }

    // if (typeof window !== "undefined")
    //     window.addEventListener('scroll', changeBackground);

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }




    return <div>

        <nav className={'navbar drop-shadow-lg z-[100]'}>
            <div className='z-10 flex items-center justify-between h-20 px-5 border-t-2 '>
                <div className='flex items-center'>
                    <a href="/" className='flex items-center'>
                        <img src={'about-tooth.png'} className='w-10 ' alt="" /> <h3 className='ml-2 text-base font-bold sm:text-base md:text-lg lg:text-2xl '>Dr Bala Chandra DDS
                        </h3>
                    </a>
                </div>


                <Popover className="z-10">
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <div className="flex items-center -mr-2 md:hidden">
                                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="w-6 h-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 navList">
                                {navigation.map((item, i) => (
                                    <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-300">
                                        <li className='rounded-md hover:bg-gray-100 hover:text-pink-400 hover:cursor-pointer' key={i}>
                                            <a className="font-medium ">
                                                {item.name}
                                            </a>
                                        </li>
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
                        >
                            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div className='flex items-center'>
                                        <img
                                            className="w-auto h-8"
                                            src={'about-tooth.png'}
                                            alt=""
                                        />

                                    </div>
                                    <h3 className='flex ml-2 text-base font-bold sm:text-sm md:text-base lg:text-2xl '>Dr Bala Chandra DDS
                                    </h3>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="w-6 h-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 text-center max-w-max navList">
                                    {navigation.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </div>

                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <div className='sticky z-10 flex hidden px-3 py-2 text-gray-900 md:hidden sm:hidden lg:flex'>
                    <div className='m-auto space-x-2 space-y-1'>
                        <h2 className='flex space-x-2 '>
                            <p className='font-bold '><MailIcon className='w-5 h-5 text-pink-400' /></p> <a href='mailto:drbala@gmail.com'>drbala@gmail.com</a>
                        </h2>
                        <h2 className='flex space-x-2'>
                            <p className='font-bold '><PhoneIcon className='w-5 h-5 text-pink-400' /></p> <a href='mailto:drbala@gmail.com'>+91 987654321</a>
                        </h2>
                    </div>
                    <div >
                        <img src="doc.jpg" className='object-cover w-16 h-16 rounded-full ' alt="" />
                    </div>

                </div>


            </div>
        </nav>


    </div>
}

export default Navigation;

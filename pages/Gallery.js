import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const firstOffice = [
    {
        src: 'Office1/FrontDoor.jpg',
        fullSrc: '/Office1/FrontDoor.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Hallway.jpg',
        fullSrc: '/Office1/Hallway.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Operatory.jpg',
        fullSrc: '/Office1/Operatory.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Operatory2.jpg',
        fullSrc: '/Office1/Operatory2.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Operatory3.jpg',
        fullSrc: '/Office1/Operatory3.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Reception.jpg',
        fullSrc: '/Office1/Reception.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/Reception2.jpg',
        fullSrc: '/Office1/Reception2.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/waiting1.jpg',
        fullSrc: '/Office1/waiting1.jpg',
        description: " this is text"
    },
    {
        src: 'Office1/waiting2.jpg',
        fullSrc: '/Office1/waiting2.jpg',
        description: " this is text"
    },
]

const App = () => {
    const options2 = {
        picsPerRow: 3,
        height:"400px"
    }

    return (
        <div className='pt-32'>
        
            <h1 className='text-4xl text-center '>Let have a quick virtual round in our Offices </h1>
            
            <h2 className='my-10 text-center '>Our First office is </h2>
            <div className='container flex flex-row justify-center p-10 m-auto '>
             
                <Carousel
                   images={firstOffice} style={{ height: 500, width: 800 }} 
                />
            </div>

        </div>
    )
}

export default App
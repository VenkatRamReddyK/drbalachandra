import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UserGroupIcon, UserIcon, StarIcon } from '@heroicons/react/outline'


function About() {
    const contentStyle = "background: 'rgb(233, 30, 99)', color: '#fff' ";

    return <div className='pt-20 bg-gray-100 bg-contain bg-hero-section'>
        <h2 className='p-5 font-semibold text-center text-7xl'>
            About Me
        </h2>
        <p className='mb-6 text-center'>My Journey was quite interesting and that is</p>
        
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    date="1995"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserGroupIcon />}
                >
                    <h3>
                        Doctor of Dental Surgery
                    </h3>
                    <h3 className="mt-4 text-gray-500 ">New York University, New York</h3>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ contentStyle }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="1996"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserGroupIcon />}
                >
                    <h3>Residency Training </h3>
                    <h4 className="vertical-timeline-element-subtitle">General Practice Residency</h4>
                    <h3 className="mt-4 text-gray-500 ">  St. Joseph's hospital, Patterson, New Jersey</h3>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Later "
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserGroupIcon className=' drop-shadow-lg' />}
                >
                    <h3 >Bachelors in Dental Surgery</h3>
                    <h3 className="mt-4 text-gray-500">University of Dharwad, Belgaum, India</h3>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=" Then after"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserGroupIcon />}
                >
                    <h3 className="">I was a member of Dean's list for outstanding scholastic achievements and clinical proficiency. </h3>
                    <h4 className="text-gray-500 ">San Francisco, CA</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserIcon />}
                >
                    <h3 className=""> I have moved from New Jersey to California and started my own practice</h3>
                    <h4 className="text-gray-500 ">Online Course</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Always"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserIcon />}
                >
                    <h3 className="text-gray-500 ">takes continuing education courses and attends numerous seminars every year.</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Achievements "
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<UserIcon />}
                >
                    <h3 className="text-gray-500 ">Dr. Balachandra loves music and performs in many bay area gatherings. She hails from a family of doctors and musicians. She was an All India Radio artist at Mangalore Radio Station. She lives in Evergreen, San Jose, with her husband and two children, Anil and Sapna.</h3>
                  
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    </div>;
}

export default About;

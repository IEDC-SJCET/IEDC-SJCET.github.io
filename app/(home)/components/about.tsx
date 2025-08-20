'use client'
import React, { useEffect, useRef } from 'react';
import Dot from './dot';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const About = () => {
    const borderRef = useRef(null);
    const aboutRef = useRef(null);
    const visionRef = useRef(null);
    const missionRef = useRef(null);
    const linesRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
        tl.from(linesRef.current, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 1,
            ease: 'power2.out',
        })
        .from(aboutRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6,
        }, '-=0.5')
        .from(visionRef.current, {
            x: -50,
            opacity: 0,
            duration: 0.6,
        }, '-=0.3')
        .from(missionRef.current, {
            x: 50,
            opacity: 0,
            duration: 0.6,
        }, '-=0.3');
    }, []);

    return (
        <div className='flex py-20 flex-col screen px-10' id='about'>
            {/* Animated green border lines */}
            <div
                ref={linesRef}
                className="w-full h-1 bg-primary mb-8"
                style={{ borderRadius: '2px', transform: 'scaleX(1)' }}
            ></div>
            <div className="main flex flex-col" ref={aboutRef}>
                <span className='text-primary font-semibold text-xl'>ABOUT</span>
                <span className='text-6xl text-white'>SJCET BOOTCAMP - IEDC</span>
                <span className='text-white/70 text-xl mt-5 font-light'>
                    The SJCET Startup Bootcamp- IEDC (Innovation and Entrepreneurship Development Centre) was set up on 9th March 2015 as a part of the Kerala Startup Mission (KSUM) initiative to develop a startup culture amongst students. The IEDCs are platforms set up in Engineering, Management, Arts & Science Colleges and Polytechnics with an aim to provide students an opportunity to experiment and innovate. KSUM has set up IEDCs in 226 institutions across the State which provide avenues for creative students to learn.....
                </span>
            </div>
            <div className="flex sm:flex-row flex-col w-full mt-5 border-t-[0.01rem] border-primary">
                <div className="w-50 flex flex-col pt-5 pe-5 pb-5 sm:border-b-[0rem] sm:border-r-[0.01rem] border-b-[0.01rem] border-primary" ref={visionRef}>
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>VISION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                        To create an innovation culture among Innovators by introducing them the State-of-the-art technologies and positioning the Institution as a Learning and Innovation Platform by delivering technically competent and skilled Entrepreneurs.
                    </span>
                </div>
                <div className="w-50 flex flex-col mt-5 sm:ps-5" ref={missionRef}>
                    <span className='sm:text-6xl text-4xl text-white flex items-end'>MISSION<Dot /></span>
                    <span className='text-white/70 text-xl mt-5 font-light'>
                        To create IEDC as an Innovation Platform and to create future founders by promoting Innovation, Technology and Business Learning among student community
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;
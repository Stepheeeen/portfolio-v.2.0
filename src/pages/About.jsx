import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Terminal from '../assets/icon/TerminalIcon.svg'
import Hobby from '../assets/icon/hobbyIcon.svg'
import Tool from '../assets/icon/ToolIcon.svg'
import Dropdown from '../assets/icon/DropdownIcon.svg'
import Close from '../assets/icon/CloseIcon.svg'
import ReadMe from '../assets/icon/ReadMe.svg'
import pdf from '../assets/icon/pdfIcon.svg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Dashboard bgImage={'bg-[#010C15]'} footerStyle={'bg-[#010C15]'} navStyle={'bg-[#010C15]'}>
            <Sidebar className={'hidden md:flex bg-[#010C15]'}>
                <div className='w-[25%] border border-1 border-[#1E2D3D] flex items-start justify-center pt-3'>
                    <ul>
                        <li>
                            <img src={Terminal} alt="" />
                        </li>
                        <li>
                            <img src={Tool} alt="" className='my-6' />
                        </li>
                        <li>
                            <img src={Hobby} alt="" />
                        </li>
                    </ul>
                </div>
                <div className='w-[75%]'>
                    <nav className='h-[7%] w-full border text-[14px] border-[#1E2D3D] flex items-center justify-center'>
                        <p className='ml-[-25px] flex items-center'>
                            <span><img src={Dropdown} alt="" className='mr-2' /></span>personal-info
                        </p>
                    </nav>
                    <ul className='p-4 px-2'>
                        <li className='flex items-center justify-start '>
                            <img src={ReadMe} alt="" />
                            <span className='text-[14px] text-[#607B96] ml-2'>profile-info</span>
                        </li>

                        <li className='flex items-center mt-4 justify-start'>
                            <img src={pdf} alt="" />
                            <span className='text-[14px] text-[#607B96] ml-[6px] mb-[-3px]'>Resume.pdf</span>
                        </li>
                    </ul>
                </div>

            </Sidebar>

            <main className='md:w-[80%]'>
                <nav className='w-full md:w-full flex items-center border border-1 border-[#1E2D3D] h-[38px] mt-[-1px] border-t-0 border-l-0 md:border-l-0 border-r-0 md:ml-[238px]'>
                    <button className='w-[37%] md:w-[15%] flex items-center justify-between text-[13px] border-b-0 border-t-0 border-l-0 md:border-l-1 text-[#607B96] h-full px-2 border border-1 border-[#1E2D3D]'>
                        <p>profile-info</p>
                        <img src={Close} alt="Close" />
                    </button>
                    <button className='w-[37%] md:w-[15%] flex items-center justify-between text-[13px] border-b-0 border-t-0 text-[#607B96] h-full px-2 border border-1 border-[#1E2D3D]'>
                        <p>Resume.pdf</p>
                        <img src={Close} alt="Close" />
                    </button>
                </nav>
                <div className='md:w-[95.6%] md:ml-[290px] flex flex-col md:flex-row items-center md:items-start md:h-[85vh] h-[90%] overflow-y-scroll'>
                    <div className='w-full md:w-[57%] pt-[13px] md:pt-[30px] h-full'>
                        <ol className='hidden md:block list-decimal list-outside text-[13px] text-[#607B96] orderedList space-y-1'>
                            <li>/*</li>
                            <li>* About me</li>
                            <li>* </li>
                            <li>* A software engineer with 4 years of experience,</li>
                            <li>* specializing in frontend development.</li>
                            <li>* I have mastered a wide range of technologies, </li>
                            <li>* including HTML, vanilla CSS, vanilla JavaScript, </li>
                            <li>* TypeScript, CSS frameworks, React, and Next.js</li>
                            <li>* (JSX and TSX).</li>
                            <li>* Additionally, I have experience in product design</li>
                            <li>* and backend tools such as Node.js, Express.js,  </li>
                            <li>* MongoDB, SQL, and Dolph.js.</li>
                            <li>*</li>
                            <li>* Checkout my resume for more info →</li>
                            <li>*/</li>
                        </ol>

                        <p className='text-[18px] text-[#607B96] leading-loose md:hidden'>
                            // _about-me <br /> I am a software engineer with 4 years of experience, specializing in frontend development. I have mastered a wide range of technologies, including HTML, vanilla CSS, vanilla JavaScript, TypeScript, CSS frameworks, React, and Next.js (JSX and TSX). Additionally, I have experience in product design and backend tools such as Node.js, Express.js, MongoDB, SQL, and Dolph.js. <br /> //
                        </p>

                        <div className='w-full md:hidden grid place-items-center mt-4'>
                            <Link to={''} className='text-[#607B96] hover:text-[#d7d7d7c2] text-[19px] font-semibold'>
                                View my Resume
                            </Link>
                        </div>
                    </div>
                    <div className='w-full hidden md:border md:border-1 md:border-[#1E2D3D] md:border-r-0 md:w-[45%] md:h-full h-[1000px] md:grid md:place-items-center'>
                        Download Resume
                    </div>
                </div>
            </main>
        </Dashboard>
    )
}

export default About

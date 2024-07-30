import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Terminal from '../assets/icon/TerminalIcon.svg'
import Hobby from '../assets/icon/hobbyIcon.svg'
import Tool from '../assets/icon/ToolIcon.svg'
import Dropdown from '../assets/icon/DropdownIcon.svg'
import Close from '../assets/icon/CloseIcon.svg'

const About = () => {
  return (
    <Dashboard bgImage={'bg-[#010C15]'} footerStyle={'bg-[#010C15]'} navStyle={'bg-[#010C15]'}>
        <Sidebar className={'flex bg-[#010C15]'}>
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
            </div>

        </Sidebar>

        <main className='md:w[100%] '>
        <nav className='w-full flex items-center border border-1 border-[#1E2D3D] h-[38px] mt-[-1px] border-t-0 border-r-0 ml-[238px]'>
            <button className='w-[13%] flex items-center justify-between text-[13px] border-b-0 border-t-0 text-[#607B96] h-full px-2 border border-1 border-[#1E2D3D]'>
                <p>
                profile-info 
                </p>
                <img src={Close} alt="" />
            </button>
            <button className='w-[13%] flex items-center justify-between text-[13px] border-b-0 border-t-0 text-[#607B96] h-full px-2 border border-1 border-[#1E2D3D]'>
                <p>
                Resume.pdf
                </p>
                <img src={Close} alt="" />
            </button>
        </nav>
        <div className='ml-[290px] flex items-start h-[85vh]'>
        <div className=' w-[57%] pt-[30px] h-full'>
            <ol className=' list-decimal list-outside text-[14px] text-[#607B96] orderedList'>
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
        </div>
        <div className='border border-1 border-[#1E2D3D] w-[45%] h-full mr-[-12px] grid place-items-center'> Download Resume</div>
        </div>

        </main>
    </Dashboard>
  )
}

export default About

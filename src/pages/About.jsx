import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Terminal from '../assets/icon/TerminalIcon.svg'
import Hobby from '../assets/icon/hobbyIcon.svg'
import Tool from '../assets/icon/ToolIcon.svg'
import Dropdown from '../assets/icon/DropdownIcon.svg'

const About = () => {
  return (
    <Dashboard>
        <Sidebar className={'flex'}>
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
                <nav className='h-[8%] w-full border text-[14px] border-[#1E2D3D] flex items-center justify-center'>
                    <p className='ml-[-25px] flex items-center'>
                    <span><img src={Dropdown} alt="" className='mr-2' /></span>personal-info
                    </p>

                </nav>
            </div>

        </Sidebar>

        <main className='ml-[250px]'>
        <div></div>
        <div></div>
        </main>
    </Dashboard>
  )
}

export default About

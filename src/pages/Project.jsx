import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import Dropdown from '../assets/icon/DropdownIcon.svg'
import html from '../assets/icon/htmlIcon.svg'
import css from '../assets/icon/cssIcon.svg'
import javascript from '../assets/icon/javascriptIcon.svg'
import typescript from '../assets/icon/typescriptIcon.svg'
import react from '../assets/icon/reactIcon.svg'
import reactnative from '../assets/icon/reactnativeIcon.svg'
import tailwind from '../assets/icon/tailwindIcon.svg'
import mongodb from '../assets/icon/mongodbIcon.svg'
import mysql from '../assets/icon/mysqlIcon.svg'
import expressjs from '../assets/icon/expressjsIcon.svg'
import bootstrap from '../assets/icon/bootstrapIcon.svg'
import figma from '../assets/icon/figmaIcon.svg'
import nodeJs from '../assets/icon/nodeJsIcon.svg'
import versioncontrol from '../assets/icon/versioncontrolIcon.svg'

const Project = () => {
    const skills = [
        {source: html, text: 'HTML', },
        {source: css, text: 'CSS', },
        {source: react, text: 'React', },
        {source: bootstrap, text: 'Bootstrap'},
        {source: tailwind, text: 'TailwindCSS'},
        {source: javascript, text: 'Javascript'},
        {source: typescript, text: 'Typescript'},
        {source: reactnative, text: 'React Native'},
        {source: nodeJs, text: 'Node Js'},
        {source: expressjs, text: 'ExpressJs'},
        {source: mongodb, text: 'MongoDB'},
        {source: mysql, text: 'mySQL'},
        {source: versioncontrol, text: 'Github'},
        {source: figma, text: 'Figma'},

    ]
    return (
        <Dashboard>
            <Sidebar>
                <div className='h-full'>
                    <nav className='h-[7%] w-full border text-[14px] border-[#1E2D3D] flex items-center justify-start'>
                        <p className='flex items-center ml-[20px]'>
                            <span><img src={Dropdown} alt="" className='mr-2' /></span>Skills
                        </p>
                    </nav>

                    <div className='h-[93%] overflow-scroll p-2 pb-4'>
                        <ul className='pb-7'>
                            {skills.map((index, k) => (
                                <li key={k} className={`flex items-center text-[#607B96] hover:text-white transition-all mb-2 w-full ${index.custom}`}>
                                    <img src={index.source} alt={index.text} className='w-[15%]' />
                                    <p className='ml-2 w-[85%]'>{index.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Sidebar>

            <main className='md:w-[80%]'>
                <nav className='w-full '>
                    
                </nav>
                <div>

                </div>
            </main>
        </Dashboard>
    )
}

export default Project

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
import Close from '../assets/icon/CloseIcon.svg'
import expressjs from '../assets/icon/expressjsIcon.svg'
import bootstrap from '../assets/icon/bootstrapIcon.svg'
import figma from '../assets/icon/figmaIcon.svg'
import nodeJs from '../assets/icon/nodeJsIcon.svg'
import nextjs from '../assets/icon/nextjsIcon.svg'
import Card from '../components/Card'
import versioncontrol from '../assets/icon/versioncontrolIcon.svg'
import Travel from '../assets/images/travel.webp'
import JsImage from '../assets/images/javascript.svg'

const Project = () => {
    const skills = [
        { source: html, text: 'HTML', },
        { source: css, text: 'CSS', },
        { source: react, text: 'React', },
        { source: nextjs, text: 'Next', },
        { source: bootstrap, text: 'Bootstrap' },
        { source: tailwind, text: 'TailwindCSS' },
        { source: javascript, text: 'Javascript' },
        { source: typescript, text: 'Typescript' },
        { source: reactnative, text: 'React Native' },
        { source: nodeJs, text: 'Node Js' },
        { source: expressjs, text: 'ExpressJs' },
        { source: mongodb, text: 'MongoDB' },
        { source: mysql, text: 'mySQL' },
        { source: versioncontrol, text: 'Github' },
        { source: figma, text: 'Figma' },
    ]
    const project = [
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'ibiteesventures.com', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'keto-github-io.vercel.app/', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'thekingspalace-github-io.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'walcrapp.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'https://github.com/alexindevs/sonus-audio-reader', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'anwrk.com', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'uliuwa.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'topupbox.com/', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'maisonco.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'trilspay.vercel.app/', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'space-learning.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'goods-store-theta.vercel.app', imageSrc:Travel,},
        {Title:'Keto', detail: 'keto', skillSrc: JsImage, info:'//hotel booking platform', path:'www.figma.com/design/qmRCsdz6SqnbvDykSuUXjN/Routine?m=auto&t=USiScrjPq0MUaijs-6', imageSrc:Travel,},
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
                <nav className='w-full md:w-full flex items-center border border-1 border-[#1E2D3D] h-[37px] mt-[-1px] border-t-0 border-l-0 md:border-l-0 border-r-0 md:ml-[238px]'>
                    <button className='w-[37%] md:w-[15%] flex items-center justify-between text-[13px] border-b-0 border-t-0 border-l-0 md:border-l-1 text-[#607B96] h-full px-2 border border-1 border-[#1E2D3D]'>
                        <p>portfolio</p>
                        <img src={Close} alt="Close" />
                    </button>
                </nav>
                <div className="w-full md:ml-[230px] grid place-items-center pt-11">
                <div className='w-[95%] h-[100vh] grid grid-cols-1 md:grid-cols-2  place-items-center overflow-y-auto pb-[19%]'>
                    {project.map((card, index) => (
                        <Card
                        key={index}
                            css='bg-[#011221] border border-1 border-[#1E2D3D] w-[480px]'
                            detail={card.detail}
                            imageSrc={card.imageSrc}
                            info={card.info}
                            path={`https://${card.path}`}
                            skillSrc={card.skillSrc}
                            title={card.Title}
                        />
                    ))}
                    </div>
                </div>

            </main>
        </Dashboard>
    )
}

export default Project

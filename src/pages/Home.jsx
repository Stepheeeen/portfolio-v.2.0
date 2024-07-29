import React from 'react';
import Dashboard from '../components/Dashboard';
import Image from '../assets/icon/SampleImage.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Dashboard bgImage={'bgImage'}>
            <div className="w-full h-[90vh] flex items-center justify-center">
                <div className='flex items-center md:ml-[80px]'>
                    <div className='p-[15px] md:mr-[25px] md:w-auto md:mt-[-25px]'>
                        <p className='text-[15px]'>Hi all. i am</p>

                        <h1 className='text-6xl my-2 md:my-1'>Stephen <br className='hidden md:block' /> Onucheyo</h1>
                        <p className='text-2xl md:text-xl md:text-[#4D5BCE] text-[#43D9AD]'> <span>&gt;</span> Software Developer</p>

                        <div className='mt-[170px] md:mt-[50px]'>
                        <p className='md:block text-[#607B96] text-[15px] hidden'>// you can also see my Github page</p>
                        <p className='text-[#607B96] text-[15px] md:hidden'>// find my profile on Github:</p>

                        <p className='text-[15px]'>
                            <span className='text-[#4D5BCE]'>const</span>
                            <span className='mx-2 text-[#43D9AD]'>githubLink</span>
                            =
                            <Link to={'https://github.com/stepheeeen'} className='ml-2 text-[#E99287]'>"https://<br className='md:hidden'/>github.com/stepheeeen"</Link>
                        </p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={Image} alt="" className='w-[350px]' />
                    </div>
                </div>
            </div>
        </Dashboard>
    );
}

export default Home;

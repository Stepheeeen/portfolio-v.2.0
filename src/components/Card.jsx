import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ title, info, css, path, detail, imageSrc, skillSrc }) => {
  return (
    <main className="mb-5">
      <div className='flex items-center mb-2'>
        <p className='text-[#5565E8] text-[18px] mr-3'>{title}</p><span className='text-[#607B96]'>{info}</span>
      </div>

      <div className={`relative rounded-lg h-[330px] ${css}`}>
        <div className='h-[52%] w-full rounded-t-lg rounded-r-lg border-transparent'>
          <img src={imageSrc} alt={title} className='h-full w-full rounded-t-lg rounded-r-lg border-transparent opacity-50' />

          <div className='absolute top-0 right-0 w-[70px] h-[70px] bg-[#011221] rounded-bl-full grid place-items-center'>
            <img src={skillSrc} alt={title} className=' mt-[-15px] mr-[-15px] w-[35px] h-[35px]' />
          </div>

        </div>

        <div className='h-[48%] p-3 w-full border border-x-[#1E2D3D] border-b-[#1E2D3D] border-t-[#1E2D3D] rounded flex flex-col justify-between items-start'>
          <p className='text-[#607B96]'>{detail}</p>
          <Link to={path} className='rounded-md p-2.5 bg-[#1C2B3A] hover:bg-[#1C2B3A] hover:text-[#607B96] transition' >view-project</Link>
        </div>

      </div>
    </main>
  )
}

export default Card

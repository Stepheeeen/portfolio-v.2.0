import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({title, info, css, path, detail, imageSrc, skillSrc}) => {
  return (
    <main>
    <div className='flex items-center'>
      <p>{title}</p><span className='text-[#607B96]'>{info}</span>
    </div>

      <div className={`relative rounded-lg h-[330px] ${css}`}>
          <img src={imageSrc} alt={title} className='h-[48.5%] w-full rounded-t-lg rounded-r-lg border-transparent opacity-50'/>
        <div className='h-[51.5%] p-3 w-full border border-x-[#1E2D3D] border-b-[#1E2D3D] border-t-[#1E2D3D] rounded flex flex-col justify-between items-start'>
          <p className='text-[#607B96]'>{detail}</p>
          <Link to={path} className='rounded-md p-2.5 bg-[#1C2B3A]' >view-project</Link>
        </div>

        <img src={skillSrc} alt={title} className='absolute top-[10px] right-[10px]'/>
      </div>
    </main>
  )
}

export default Card

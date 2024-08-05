import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({title, info, css, path, detail, imageSrc, skillSrc}) => {
  return (
    <>
      <p>{title}<span>{info}</span></p>
      <div className={`relative rounded-lg ${css}`}>
          <img src={imageSrc} alt={title}/>
        <div>
          <p>{detail}</p>
          <Link to={path}>view-project</Link>
        </div>

        <img src={skillSrc} alt={title} className='absolute top-[10px] right-[10px]'/>
      </div>
    </>
  )
}

export default Card

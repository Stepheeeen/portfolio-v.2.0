import React from 'react'

const Sidebar = ({children, className}) => {
  return (
    <div className={`border border-1 border-[#1E2D3D] w-[250.5px] h-[90vh] absolute left-0 mt-[-2px] bg-[#011627] ${className}`}>
      {children}
    </div>
  )
}

export default Sidebar

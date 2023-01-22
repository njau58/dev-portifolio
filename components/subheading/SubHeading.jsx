import React from 'react'

const SubHeading = ({title}) => {
  return (
    <div className='flex items-center justify-center'><div className="text-center text-theme-primary mb-4 font-extrabold text-xs border-[1px] border-theme-primary p-2 bg-indigo-50 rounded-full ">{title}</div></div>
  )
}

export default SubHeading
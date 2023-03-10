import React from 'react'

interface Props{
    label:string
}

const SectionHeading = ({label}:Props) => {
  return (
    <div className="flex flex-col space-y-4">
    <h1 className="text-center mx-auto  font-bold text-3xl text-primary-text-color max-w-lg ">
    {label}
    </h1>
    <span className="border-b-4 border-primary-color w-12 mx-auto"></span>
  </div>
  )
}

export default SectionHeading
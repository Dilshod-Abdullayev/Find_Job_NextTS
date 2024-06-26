import React from 'react'
import JobType from './JobType'

export default function JobPanel() {
    return (
        <div className='flex flex-col items-center w-72 max-md:w-full max-md:border-b-8 border-slate-600'>
            <div className='text-lg font-semibold w-full flex justify-between pb-6 border-b-2 border-gray-300  '>
                <h1>Filter</h1>
                <h1 className='text-sky-500 cursor-pointer'>Tozalash</h1>
            </div>
            <div className='max-md:flex max-md:w-full justify-around'>
                <JobType />
                {/* <JobSalary /> */}
            </div>
        </div>
    )
}

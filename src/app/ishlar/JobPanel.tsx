import React from 'react'
import JobType from './JobType'
import JobSalary from './JobSalary'

export default function JobPanel() {
    return (
        <div className='flex flex-col items-center w-72 '>
            <div className='text-lg font-semibold w-full flex justify-between pb-6 border-b-2 border-gray-300  '>
                <h1>Filter</h1>
                <h1 className='text-sky-500 cursor-pointer'>Tozalash</h1>
            </div>
            <JobType />
            <JobSalary/>
        </div>
    )
}

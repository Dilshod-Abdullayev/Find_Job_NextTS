import React from 'react'
import { FaCodepen } from "react-icons/fa6";

export default function Statistic() {
    return (
        <div className='w-full mt-10 h-auto py-20' style={{ background: '#E1F1FF' }}>
            <h1 className='font-bold text-center text-4xl'>O`z <span className='text-sky-500'>karyerangiz</span>ni biz bilan quring!!</h1>
            <div className='flex flex-wrap justify-around gap-3 mt-12'>
                <div className='flex cursor-pointer'>
                    <FaCodepen className=' rounded-full text-white w-12 h-12 p-2 relative left-4 top-4  bg-sky-500' />
                    <div className='flex w-40 bg-white pl-6 rounded-xl shadow-2xl  shadow-sky-400  flex-col gap-3 p-2'>
                        <h1 className='font-bold'>Development</h1>
                        <h2 className='font-light'> (1500 jobs) </h2>
                    </div>
                </div>
                <div className='flex cursor-pointer'>
                    <FaCodepen className=' rounded-full text-white w-12 h-12 p-2 relative left-4 top-4  bg-sky-500' />
                    <div className='flex w-40 bg-white pl-6 rounded-xl shadow-2xl  shadow-sky-400  flex-col gap-3 p-2'>
                        <h1 className='font-bold'>Development</h1>
                        <h2 className='font-light'> (1500 jobs) </h2>
                    </div>
                </div>
                <div className='flex cursor-pointer'>
                    <FaCodepen className=' rounded-full text-white w-12 h-12 p-2 relative left-4 top-4  bg-sky-500' />
                    <div className='flex w-40 bg-white pl-6 rounded-xl shadow-2xl  shadow-sky-400  flex-col gap-3 p-2'>
                        <h1 className='font-bold'>Development</h1>
                        <h2 className='font-light'> (1500 jobs) </h2>
                    </div>
                </div>
                <div className='flex cursor-pointer'>
                    <FaCodepen className=' rounded-full text-white w-12 h-12 p-2 relative left-4 top-4  bg-sky-500' />
                    <div className='flex w-40 bg-white pl-6 rounded-xl shadow-2xl  shadow-sky-400  flex-col gap-3 p-2'>
                        <h1 className='font-bold'>Development</h1>
                        <h2 className='font-light'> (1500 jobs) </h2>
                    </div>
                </div>
            </div>
        </div >
    )
}

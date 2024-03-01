"use client"
import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Switch } from 'antd';
export default function JobType() {
    const [state, setState] = useState(true)
    const handleOpen = () => {
        setState(!state)
    }
    return (
        <div className='w-full'>
            <div onClick={handleOpen} className='mt-4 text-lg select-none font-semibold w-full flex justify-between items-center cursor-pointer'>
                <h1>Ish turi</h1>
                <h1 className='text-3xl'>{state ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}</h1>
            </div>
            {state ?
                <div className='flex  border-b-2 border-gray-300 pb-4 pl-4 flex-col gap-2 mt-4'>
                    <div className="flex select-none items-center  dark:border-gray-700">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-checkbox-1" className=" w-full  ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">Contract</label>
                    </div>
                    <div className="flex select-none items-center  dark:border-gray-700">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">Full time</label>
                    </div>
                    <div className="flex select-none items-center  dark:border-gray-700">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">Part-time</label>
                    </div>
                    <div className="flex select-none items-center  dark:border-gray-700">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">Internship</label>
                    </div>
                </div> : ''}
            <div className='flex  border-b-2 border-gray-300 pb-4 text-lg font-semibold mt-4 cursor-pointer justify-between'>
                <h1>Tajriba oshirish</h1>
                <Switch defaultChecked={false} style={{ background: '#1677FF' }} />
            </div>
        </div>
    )
}

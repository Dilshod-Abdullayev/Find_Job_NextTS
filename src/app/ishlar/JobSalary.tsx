"use client"
import React, { useState } from 'react'
import { Slider } from 'antd';

export default function JobSalary() {
    const [disabled, setDisabled] = useState(false);
    return (
        <div className='w-full pb-6 border-b-2 border-gray-300 max-md:w-2/5'>
            <div className='flex  border-b-2 border-gray-300 pb-4 pl-4 flex-col gap-2 mt-4'>
                <div className="flex select-none items-center  dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-checkbox-1" className=" w-full  ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">500$+</label>
                </div>
                <div className="flex select-none items-center  dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">1000$+</label>
                </div>
                <div className="flex select-none items-center  dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">1300$+</label>
                </div>
                <div className="flex select-none items-center  dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-checkbox-1" className=" w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300">Kelishuv</label>
                </div>
            </div>
            <Slider max={5000} className='mt-12' defaultValue={600} disabled={disabled} />
            <h2 >Qidirayotgan maosh {300}</h2>
        </div>
    )
}

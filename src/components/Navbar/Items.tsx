import React from 'react'
const items: string[] = ['Yangiliklar', 'Qaynoq ishlar', 'Biz haqimizda', 'Oxirgi postlar']
export default function Items() {
    return (
        <ul className='flex flex-wrap max-md:p-2 gap-3 max-w-[1240px] max-md:w-full'>
            {
                items.map((item, index) => (
                    <li className='max-md:w-full max-md:text-2xl max-md:p-2 cursor-pointer ml-2 text-slate-700 max-md:hover:text-white font-medium whitespace-nowrap' key={index}>{item}</li>
                ))
            }
        </ul>
    )
}

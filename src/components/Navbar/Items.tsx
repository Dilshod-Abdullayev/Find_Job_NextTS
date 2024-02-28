import React from 'react'
const items: string[] = ['Yangiliklar', 'Qaynoq ishlar', 'Biz haqimizda', 'Oxirgi postlar']
export default function Items() {
    return (
        <ul className='flex gap-3'>
            {
                items.map((item, index) => (
                    <li className=' cursor-pointer ml-2 text-slate-700 hover:text-slate-950 font-medium' key={index}>{item}</li>
                ))
            }
        </ul>
    )
}

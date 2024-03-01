import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';

const elements: { id: number, text: string, path: string }[] = [
    { id: 1, text: 'Yangiliklar', path: '/yangiliklar' },
    { id: 2, text: 'Qaynoq ishlar', path: '/ishlar' },
    { id: 3, text: 'Biz haqimizda', path: '/haqimizda' },
    { id: 4, text: 'Oxirgi postlar', path: '/postlar' }
]
const Items: React.FC = () => {
    const router = usePathname();
    return (
        <ul className='flex flex-wrap max-md:p-2 gap-3 max-w-[1240px] max-md:w-full'>
            {
                elements.map((item) => (
                    <Link
                        href={item.path}
                        className={`max-md:w-full max-md:text-2xl max-md:p-2 cursor-pointer ml-2  max-md:hover:text-white font-medium whitespace-nowrap ${router === item.path ? 'text-sky-500' : 'text-slate-700'
                            }`}
                        key={item.id}
                    >
                        {item.text}
                    </Link>
                ))
            }
        </ul>
    )
}

export default Items;

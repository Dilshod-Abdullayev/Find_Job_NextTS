import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { MdDataSaverOn } from "react-icons/md";
const elements: { id: number, text: string | JSX.Element, path: string }[] = [
    { id: 1, text: 'Yangiliklar', path: '/yangiliklar' },
    { id: 2, text: 'Qaynoq ishlar', path: '/ishlar' },
    { id: 3, text: 'Biz haqimizda', path: '/haqimizda' },
    { id: 4, text: <MdDataSaverOn style={{fontSize:'22px'}} />, path: '/saves' }
]
const Items: React.FC = () => {
    const router = usePathname();
    return (
        <ul className='flex flex-wrap items-center max-md:p-2 gap-3 max-w-[1240px] max-md:w-full'>
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

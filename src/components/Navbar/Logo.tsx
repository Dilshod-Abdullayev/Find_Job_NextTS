import Link from 'next/link'
import React from 'react'
import { GiInterleavedClaws } from "react-icons/gi";


export default function Logo() {
    return (
        <Link href='/' className='text-sky-500 flex items-center text-2xl cursor-pointer font-extrabold'><GiInterleavedClaws />You<span className='text-slate-700'>success</span></Link>
    )
}
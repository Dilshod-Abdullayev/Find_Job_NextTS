import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href='/' className='text-sky-500 text-2xl cursor-pointer font-extrabold'>You<span className='text-slate-700'>success</span></Link>
    )
}
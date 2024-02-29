"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Items from './Items'
import NavPanel from './NavPanel'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Nav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
    ];
    return (
        <div className=' flex w-full justify-between items-center h-24 max-w-[1240px]  mx-auto px-4 '>
            <div className='flex justify-between items-center w-full'>
                <Logo />
                <div className='hidden  md:flex justify-between w-4/5 items-center'>
                    <Items />
                    <NavPanel />
                </div>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={
                nav
                    ? 'fixed bg-slate-500 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }>
                <Items />
                <NavPanel />
            </div>
        </div >
    )
}

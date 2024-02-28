import React from 'react'
import Logo from './Logo'
import Items from './Items'
import NavPanel from './NavPanel'

export default function Nav() {
    return (
        <div className='p-4 flex justify-between items-center shadow-2xl'>
            <Logo />
            <Items />
            <NavPanel />
        </div>
    )
}

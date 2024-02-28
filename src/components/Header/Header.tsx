import { url } from 'inspector'
import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-col'>
            <h1 className='text-sm text-slate-700 font-medium'>Bizda hozirgacha siz uchun<span className='font-extrabold text-sky-500'>30000</span> ta ish joyi bor. </h1>
            <h1 className='mt-5 font-extrabold text-slate-700 text-5xl'>Eng yaxshi <span className='text-sky-500 font-extrabold'>online ishlar</span> </h1>
            <div className='w-full mt-4' style={{ height: '500px', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundImage: 'url("https://img.freepik.com/free-photo/businessman-his-office-writting-notes_1368-7331.jpg?t=st=1709113225~exp=1709116825~hmac=11b64a8919116feaab462dc9ed793abb388e8ee026e78ed1b70daef0351199c7&w=1380")' }}>
            </div>
        </div>
    )
}

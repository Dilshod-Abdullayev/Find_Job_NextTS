"use client"
import React from 'react'
import { useSelector } from "react-redux";

export default function page() {
    interface RootState {
        savejob: {
            value: jobType[];
        };
    }
    interface jobType {
        id: number,
        img: string,
        position: string,
        company: string,
        timeType: string,
        experiense: string,
        typeJob: string,
        techno: string[],
        location: string,
        salary: number,
        intern: boolean
    }
    const savejob = useSelector((state: RootState) => state.savejob.value);
    return (
        <div>
            <img className='w-3/4 py-8 rounded-2xl h-96' src='https://images.ctfassets.net/pdf29us7flmy/8BeGNQFpUzIyckf3POYTt/3c6f9d9836cc8d5438ae6a4ddd156c49/4He9LjIo.png' />
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl text-sky-500 font-extrabold'>Frontend dasturchi</h1>
                <hr />
                <h2 className='text-2xl font-medium'>Sizga taklif qilinayotgani <span className='font-extrabold'>{3400}</span></h2>

                <h2 className='mt-2 text-2xl font-medium'>Companiya <span className='font-extrabold text-sky-500'>Najot Ta`lim</span></h2>
                <h2 className='text-2xl font-medium'>Joylashgan <span className='font-extrabold text-sky-500'>Urgench</span> </h2>
                <h2 className=' text-2xl font-medium'>So`ralgan tajriba <span className='font-extrabold text-sky-500'>2-4 yil</span> </h2>
                <h2 className='text-2xl font-medium'>Ishning turi <span className=' font-extrabold text-sky-500'>part time</span> </h2>
            </div>
            <hr />
            <h2 className='text-2xl font-bold mt-2 text-sky-500'>Majburiy texnologiyalar </h2>
            <div className='flex gap-2 py-4 font-semibold '>
                <span className=' font-extrabold'>nodejs</span>
                <span className=' font-extrabold'>mongodb</span>
                <span className='font-extrabold'>express</span>
            </div>
            <hr />
            <div className='mt-4'>
                <h1 className='font-extrabold text-2xl text-sky-500'>Context</h1>
                <p className='font-light '>
                    As our EHS Manager, you will provide support and facilitate the implementation of the company's EHS&Q Management System and national legislation across all of the business by providing timely, accurate and pertinent EHS support including: training, BSP coaching, site-work risk assessments, accident and incident investigation and its processes, environmental compliance advice; introducing new standards and processes where needed, proactive issue management which will affect the EH&S management system together with review of, and assistance in applying, safe systems of work.
                </p>
            </div>
            <div className='mt-4'>
                <h1 className='font-extrabold text-2xl text-sky-500'>Context</h1>
                <p className='font-light '>
                    As our EHS Manager, you will provide support and facilitate the implementation of the company's EHS&Q Management System and national legislation across all of the business by providing timely, accurate and pertinent EHS support including: training, BSP coaching, site-work risk assessments, accident and incident investigation and its processes, environmental compliance advice; introducing new standards and processes where needed, proactive issue management which will affect the EH&S management system together with review of, and assistance in applying, safe systems of work.
                </p>
            </div>
            <div className='mt-2'>
                <h1 className='font-semibold text-3xl'>Ish beruvchingizga savol bering</h1>
                <p className='text-xl'>U buni o'z arizasi bilan oladi.</p>
                <div className='flex flex-wrap gap-4 mt-4'>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Ish joyi qayerda joylashgan?</span>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Ish tartibi qanday?</span>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Bo'sh ish o'rni bormi?</span>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Ish haqi qancha?</span>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Siz bilan qanday bog'lanish mumkin?</span>
                    <span className='p-2 hover:bg-slate-300 hover:text-white bg-slate-200 rounded-2xl font-medium cursor-pointer'> Yana bir savol</span>
                </div>
            </div>
        </div>
    )
}
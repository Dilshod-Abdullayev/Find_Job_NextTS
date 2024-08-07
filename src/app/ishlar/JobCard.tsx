"use client"
import React, { useState } from 'react';
import { MdDataSaverOn } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { MdOnlinePrediction } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { saveJob } from '@/redux/action/SaveJobs';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import Image from 'next/image';

interface JobCardProps {
    item: {
        id: number;
        img: string;
        position: string;
        company: string;
        timeType: string;
        experiense: string;
        typeJob: string;
        techno: string[];
        location: string;
        salary: number;
        intern: boolean;
    };
}

const JobCard: React.FC<JobCardProps> = ({ item }) => {
    const [saved, setSaved] = useState<boolean>(false);
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(saveJob(item));
        setSaved(true);
    }

    return (
        <div key={item.id} className='w-60 max-md:w-72 boxshadow h-72 align-middle border border-slate-300 p-2  rounded-xl'>
            <div className='flex justify-around items-center'>
                <Image
                width={100}
                height={100}
                src="https://play-lh.googleusercontent.com/L3w73ZSvHAU3C6PmPWeuqKEHe67igSj5Ahovxlf0vBSdWi-31_PrLbHBHoSwmzAVzw"
                    className='w-10 h-10'
                    alt="" />
                <div className='flex flex-col  items-center'>
                    <h1 className='text-base leading-2 font-semibold'>{item.position}</h1>
                    <p className='text-sm'>{item.company}</p>
                </div>
                <MdDataSaverOn
                    className={`text-3xl cursor-pointer ${saved ? 'text-blue-500' : ''}`} // Conditionally apply text color
                    onClick={handleSave}
                />
            </div>
            <div className='flex text-sky-500 w-full mt-2 justify-between px-2 text-xl font-extrabold'>
                <FaBusinessTime className='w-1/3 flex justify-center' />
                <SiExpertsexchange className='w-1/3 flex justify-center' />
                <MdOnlinePrediction className='w-1/3 flex justify-center' />
            </div>
            <div className='flex w-full justify-between p-2 text-sm font-extrabold'>
                <h1 className='w-1/3 flex justify-center'>{item.timeType}</h1>
                <h1 className='w-1/3 flex justify-center'>{item.experiense}</h1>
                <h1 className='w-1/3 flex justify-center'>{item.typeJob}</h1>
            </div>
            <div className='flex gap-2 text-sm text-slate-600 font-extrabold p-2'>
                {
                    item.techno.map((item, index) => (
                        <h1 key={index}>{item}</h1 >
                    ))
                }
            </div >
            <h1 className='flex items-center text-sky-500 font-extrabold'>Location:<FaLocationDot />  <span className='text-slate-900'>{item.location}</span> </h1>
            <div className='flex items-center justify-around mt-2'>
                <h1 className='text-sky-500 font-extrabold'>{item.salary}$</h1>
                <Link href={"ishlar/" + item.id.toString()} className='bg-sky-600 hover:bg-sky-500 text-white rounded-xl  max-md:w-1/2  py-1 px-4'>Qabul qilish</Link>
            </div>
        </div>
    );
}

export default JobCard;


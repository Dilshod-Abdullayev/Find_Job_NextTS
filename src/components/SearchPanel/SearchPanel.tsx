import React from 'react'
import SelectJob from './SelectJob';
import LocationPanel from './LocationPanel';
import { FaSearch } from "react-icons/fa";

export default function SearchPanel() {
    return (
        <div className='flex justify-center w-full'>
            <div className='flex  gap-7 mt-6 shadow-2xl w-1/2'>
                <SelectJob />
                <LocationPanel />
                <button className='max-md:w-1/3 rounded-xl text-sky-500 hover:bg-slate-200 border-2 border-sky-500 py-1 px-4 font-bold flex justify-center items-center'><FaSearch /> Qidirish</button>
            </div>
        </div>
    )
}

"use client"
import React from 'react'
import { useSelector } from "react-redux";
import JobCard from '../ishlar/JobCard';

export default function Page() {
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
        <div className='flex w-full justify-around p-4 flex-wrap gap-2'>
            {
                savejob.length > 0 ? (
                    savejob.map((item) => (
                        <JobCard key={item.id} item={item} />
                    ))
                ) : <p>No saved jobs found.</p>
            }
        </div>
    )
}
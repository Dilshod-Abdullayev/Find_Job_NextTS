"use client"
import React from 'react'
import { useSelector } from "react-redux";
interface RootState {
  product: {
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
const JobCard = React.lazy(() => import('./JobCard'));
export default function ResultJobs() {
  const jobs = useSelector((state: RootState) => state.product.value);
  return (
    <div className='flex w-full justify-around p-4  flex-wrap gap-2'>
      {
        jobs.map((item) => (
          <JobCard key={item.id} item={item} />
        ))
      }
      <h1>Nima gap</h1>
    </div >
  )
}
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
  category: string
}
const JobCard = React.lazy(() => import('./JobCard'));
export default function ResultJobs() {
  const selectedCategories = useSelector((state: RootState) => state.checkaction.selectedCategories);
  const jobs = useSelector((state: RootState) => state.product.value);
  const filteredJobs = jobs.filter(job => selectedCategories.includes(job.category));
  return (
    <div className='flex w-full justify-around p-4  flex-wrap gap-2'>
      {filteredJobs.map(item => (
        <JobCard key={item.id} item={item} />
      ))}
      
    </div >
  )
}
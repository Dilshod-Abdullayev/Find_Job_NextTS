import React from 'react'
import { MdDataSaverOn } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { MdOnlinePrediction } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function ResultJobs() {
  return (
    <div className='flex justify-around p-4  flex-wrap gap-2'>
      <div className='w-72 boxshadow h-64 border border-slate-300 p-2  rounded-xl'>
        <div className='flex justify-around items-center'>
          <img src="https://play-lh.googleusercontent.com/L3w73ZSvHAU3C6PmPWeuqKEHe67igSj5Ahovxlf0vBSdWi-31_PrLbHBHoSwmzAVzw"
            className='w-10 h-10'
            alt="" />
          <div className='flex flex-col  items-center'>
            <h1 className='text-base leading-2 font-semibold'>Frontend dasturchi</h1>
            <p className='text-sm'>DATA ta`lim stantsiyasi</p>
          </div>
          <MdDataSaverOn className='text-3xl cursor-pointer' />
        </div>
        <div className='flex text-sky-500 w-full mt-2 justify-between px-2 text-xl font-extrabold'>
          <FaBusinessTime className='w-1/3 flex justify-center' />
          <SiExpertsexchange className='w-1/3 flex justify-center' />
          <MdOnlinePrediction className='w-1/3 flex justify-center' />
        </div>
        <div className='flex w-full justify-between p-2 text-sm font-extrabold'>
          <h1 className='w-1/3 flex justify-center'>FullTime</h1>
          <h1 className='w-1/3 flex justify-center'>2-4</h1>
          <h1 className='w-1/3 flex justify-center'>Remote yoki offise</h1>
        </div>
        <div className='flex gap-2 text-sm text-slate-600 font-extrabold p-2'>
          <h1>TS</h1>
          <h1>React</h1>
          <h1>Redux</h1>
          <h1>MobX</h1>
          <h1>Jest</h1>
        </div >
        <h1 className='flex items-center text-sky-500 font-extrabold'>Location:<FaLocationDot />  <span className='text-slate-900'>Urgench</span> </h1>
        <div className='flex items-center justify-around mt-2'>
          <h1 className='text-sky-500 font-extrabold'>1000$</h1>
          <button className='bg-sky-600 hover:bg-sky-500 text-white rounded-xl max-md:w-1/3  py-1 px-4'>Qabul qilish</button>
        </div>
      </div>
    </div >
  )
}

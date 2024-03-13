"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryNews from './CategoryNews';
import { news } from '@/data/data';
import Link from 'next/link';
export default function NewsHeader() {
    const sliceArr = news.slice(1, 4)
    return (
        <div className='flex flex-col '>
            <h1 className='text-2xl pl-4 font-medium'>Siz uchun bizdan ajoyib <span className='text-sky-500'>yangiliklar</span></h1>
            <div className='flex justify-between mt-10  max-md:flex-col'>
                <div className='w-2/3 max-md:w-full h-96 rounded-2xl' style={{ backgroundImage: 'url("https://www.owlguru.com/wp-content/uploads/wpallimport/files/data-engineers/__(1).jpg")' }}>
                </div>
                <div className='w-2/5 max-md:w-full max-md:flex max-md:flex-wrap max-md:justify-center max-md:border-b-8 border-slate-600'>
                    {
                        sliceArr.map((item, index) => (
                            <Link href={"yangiliklar/" + index.toString()} key={item.id} className='flex cursor-pointer items-center   p-4 w-full max-md:w-1/2 justify-between'>
                                <img className='w-32 rounded-lg' src={item.img} />
                                <div className='flex  flex-col p-2'>
                                    <p className='text-sm text-slate-600 font-medium'>{item.data}</p>
                                    <h1 className='font-bold leading-5 text-slate-900'>{item.title}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div >
            </div>
            <div className='mt-12'>
                <h1 className='text-2xl pl-4 font-medium'>Top hikoyalar</h1>
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-8"
                >
                    {
                        news.map((item) => (
                            <SwiperSlide>
                                <Link href={"yangiliklar/" + item.id.toString()}>
                                    <div className='flex mt-10 justify-around gap-4 flex-wrap'>
                                        <div className="rounded w-64  shadow-lg flex flex-col">
                                            <div className="relative">
                                                <div>
                                                    <img className="w-full h-24 rounded-2xl" src={item.img} />
                                                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" py-4 mb-auto">
                                                <h1 className="font-medium text-sm inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2">{item.title}</h1>
                                                <p className="text-gray-500 text-sm">
                                                    {item.description.slice(0, 110)}...
                                                </p>
                                            </div>
                                            <div className=" py-3 flex flex-row items-center justify-between bg-gray-100">
                                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                                        <g>
                                                            <g>
                                                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span className="ml-1"> 10 days ago</span>
                                                </span>
                                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                                        </path>
                                                    </svg>
                                                    <span className="ml-1">0 Comments</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <CategoryNews />
        </div>
    )
}

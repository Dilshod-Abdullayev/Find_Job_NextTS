import { Image } from 'antd'
import React from 'react'

export default function CategoryNews() {
    return (
        <div className='flex flex-col mt-12'>
            <div className='flex flex-col'>
                <div className='text-2xl text-sky-500 border-b-2 border-sky-500 w-40 font-extrabold'>Madaniyat</div>
                <div className='flex flex-wrap justify-between w-full items-center mt-4'>
                    <div className='flex p-2 max-md:w-3/5 border border-gray-300 md:border-none min-w-full md:min-w-md min-w-sm justify-between w-1/2 gap-2 flex-wrap mt-4'>
                        <div className='flex gap-2 w-full items-center'>
                            <Image
                            width={100}
                            height={100}
                            alt='News'
                            src="https://daryo.uz/static/2024/02/thumb-65e075e609111.jpeg"
                                className='w-40 h-28 rounded-md' />
                            <div>
                                <h1 className='text-sm font-semibold'>Amitabh Bachchan she’r yozadi, Salmon Xon rasm chizadi: hind kinosi yulduzlarining sevimli mashg‘ulotlari</h1>
                                <p className='text-xs mt-4'>14:00 / 29.02.2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex max-md:w-3/5 border border-gray-300 md:border-none min-w-full md:min-w-md min-w-sm justify-between w-1/2 gap-2 flex-wrap mt-4'>
                        <div className='flex gap-2 w-full items-center'>
                            <Image
                            width={100}
                            alt='News'
                            height={100}
                            src="https://daryo.uz/static/2024/02/thumb-65e075e609111.jpeg"
                                className='w-40 h-28 rounded-md' />
                            <div>
                                <h1 className='text-sm font-semibold'>Amitabh Bachchan she’r yozadi, Salmon Xon rasm chizadi: hind kinosi yulduzlarining sevimli mashg‘ulotlari</h1>
                                <p className='text-xs mt-4'>14:00 / 29.02.2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-2 max-md:w-3/5 border border-gray-300 md:border-none min-w-full md:min-w-md min-w-sm justify-between w-1/2 gap-2 flex-wrap mt-4'>
                        <div className='flex gap-2 w-full items-center'>
                            <Image 
                            width={100}
                            alt='News'
                            height={100}
                            src="https://daryo.uz/static/2024/02/thumb-65e075e609111.jpeg"
                                className='w-40 h-28 rounded-md' />
                            <div>
                                <h1 className='text-sm font-semibold'>Amitabh Bachchan she’r yozadi, Salmon Xon rasm chizadi: hind kinosi yulduzlarining sevimli mashg‘ulotlari</h1>
                                <p className='text-xs mt-4'>14:00 / 29.02.2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-2 max-md:w-3/5 border border-gray-300 md:border-none min-w-full md:min-w-md min-w-sm justify-between w-1/2 gap-2 flex-wrap mt-4'>
                        <div className='flex gap-2 w-full items-center'>
                            <Image
                            width={100}
                            alt='News'
                            height={100}
                            src="https://daryo.uz/static/2024/02/thumb-65e075e609111.jpeg"
                                className='w-40 h-28 rounded-md' />
                            <div>
                                <h1 className='text-sm font-semibold'>Amitabh Bachchan she’r yozadi, Salmon Xon rasm chizadi: hind kinosi yulduzlarining sevimli mashg‘ulotlari</h1>
                                <p className='text-xs mt-4'>14:00 / 29.02.2024</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

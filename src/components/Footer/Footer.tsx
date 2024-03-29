import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline hover:decoration-sky-500">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline hover:decoration-sky-500 me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:decoration-sky-500 me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:decoration-sky-500 me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:decoration-sky-500">Contact</a>
                        </li>
                    </ul>
                    <div className='flex gap-3 cursor-pointer text-sky-500 text-2xl items-center'>
                        <CiFacebook />
                        <CiInstagram />
                        <CiTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </footer>

        </div>
    )
}

"use client"
import React from 'react';
import { jobData } from '@/data/data';

export default function Page({ params }) {
    const newId = jobData[params.slug[0]];
    if (!newId) {
        return <div>Job not found</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <img
                src="https://images.ctfassets.net/pdf29us7flmy/8BeGNQFpUzIyckf3POYTt/3c6f9d9836cc8d5438ae6a4ddd156c49/4He9LjIo.png"
                alt="Job Image"
                className="w-full h-auto rounded-lg"
            />
            <div className="mt-8">
                <h1 className="text-3xl text-gray-900 font-bold">{newId.position}</h1>
                <hr className="my-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl text-gray-800 font-bold">Company</h2>
                        <p className="text-lg text-gray-700">{newId.company}</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-gray-800 font-bold">Location</h2>
                        <p className="text-lg text-gray-700">{newId.location}</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-gray-800 font-mediboldum">Experience</h2>
                        <p className="text-lg text-gray-700">{newId.experience}</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-gray-800 font-bold">Category</h2>
                        <p className="text-lg text-gray-700">{newId.category}</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div>
                    <h2 className="text-xl text-gray-800 font-bold">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        {newId.techno.map((tech, index) => (
                            <span key={index} className="bg-gray-200 px-3 py-1 rounded-lg text-gray-800">{tech}</span>
                        ))}
                    </div>
                </div>
                <hr className="my-4" />
                <div>
                    <h1 className="text-2xl text-gray-800 font-semibold">Context</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        As our EHS Manager, you will provide support and facilitate the implementation of the company's EHS&Q Management System and national legislation across all of the business by providing timely, accurate and pertinent EHS support including: training, BSP coaching, site-work risk assessments, accident and incident investigation and its processes, environmental compliance advice; introducing new standards and processes where needed, proactive issue management which will affect the EH&S management system together with review of, and assistance in applying, safe systems of work.
                    </p>
                </div>
                <hr className="my-4" />
                <div>
                    <h1 className="text-2xl text-gray-800 font-semibold">Question for Employer</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        U buni o'z arizasi bilan oladi.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Ish joyi qayerda joylashgan?</a>
                        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Ish tartibi qanday?</a>
                        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Bo'sh ish o'rni bormi?</a>
                        <a href="#salary" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out">Ish haqi qancha?</a>
                        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Siz bilan qanday bog'lanish mumkin?</a>
                        <a href="#" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Yana bir savol</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

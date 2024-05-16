"use client"
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory, toggleIntern } from '@/redux/action/CheckAction';
export default function JobType() {
    interface RootState {
        checkaction: {
            selectedCategories: string[];
            intern: boolean;
        };
    }
    const dispatch = useDispatch();
    const [state, setState] = useState(true);
    const type = useSelector((state: RootState) => state.checkaction);
    const selectedCategories = type ? type.selectedCategories : [];
    const isInternSelected = type ? type.intern : false;

    const handleCategoryChange = (category: string) => {
        dispatch(toggleCategory(category));
    };

    const handleInternChange = () => {
        dispatch(toggleIntern());
    };

    const handleOpen = () => {
        setState(!state);
    };

    return (
        <div className="w-full max-md:w-2/5">
            <div
                onClick={handleOpen}
                className="mt-4 text-lg select-none font-semibold w-full flex justify-between items-center cursor-pointer">
                <h1>Ish turi</h1>
                <h1 className="text-3xl">{state ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}</h1>
            </div>
            {state ? (
                <div className="flex border-b-2 border-gray-300 pb-4 pl-4 flex-col gap-2 mt-4">
                    {type.selectedCategories.map((item, index: number) => (
                        <div key={index} className="flex select-none items-center dark:border-gray-700">
                            <input
                                id={`bordered-checkbox-${index}`}
                                type="checkbox"
                                value={item}
                                name={`bordered-checkbox-${index}`}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked={selectedCategories.includes(item)}
                                onChange={() => handleCategoryChange(item)}
                            />
                            <label
                                htmlFor={`bordered-checkbox-${index}`}
                                className="w-full ms-2 text-lg font-medium text-slate-600 dark:text-gray-300"
                            >
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
            <div className="flex border-b-2 border-gray-300 pb-4 text-lg font-semibold mt-4 cursor-pointer justify-between">
                <h1>Res</h1>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isInternSelected}
                        onChange={handleInternChange}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    );
}
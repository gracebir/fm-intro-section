/** @format */

import React from "react";
import { LuChevronDown } from "react-icons/lu";

const Dropdown = ({ isDrop = false, items = [], text }) => {
    return (
        <div className='group relative'>
            <a href='#' className='flex  items-center gap-2'>
                <span className='text-base lg:text-lg text-medium-gray hover:text-almost-black duration-300'>
                    {text}
                </span>
                {isDrop && (
                    <LuChevronDown
                        className='group-hover:rotate-180 duration-300 transition-transform'
                        size={19}
                    />
                )}
            </a>
            {isDrop && (
                <div className='hidden absolute top-7 min-w-[165px] left-0 right-0 bg-almost-white shadow-2xl group-hover:flex flex-col gap-2 px-8 py-6 rounded-xl z-30'>
                    {items.map((item) => (
                        <a
                            href='#'
                            key={item.id}
                            className='flex flex-row items-center gap-3'
                        >
                            {item.hasIcon && (
                                <img
                                    className='w-5'
                                    src={item.icon}
                                    alt={item.name}
                                />
                            )}
                            <span className='whitespace-nowrap text-medium-gray'>
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

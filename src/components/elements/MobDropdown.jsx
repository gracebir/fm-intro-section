/** @format */

import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const MobDropdown = ({ isDrop = false, title, items }) => {
    const [collapse, setcollapase] = useState(false);
    const handleCollapse = () => {
        if (isDrop) {
            setcollapase((col) => !col);
        }
    };
    return (
        <div className='flex flex-col gap-6 text-medium-gray'>
            <div
                onClick={handleCollapse}
                className='flex gap-2 items-center duration-300 transition-transform'
            >
                <a className='text-lg' href='#'>
                    {title}
                </a>
                {isDrop && (
                    <LuChevronDown
                        className={`duration-300 ${
                            collapse ? "rotate-180" : "rotate-0"
                        }`}
                        size={20}
                    />
                )}
            </div>
            {isDrop && collapse && (
                <div className='flex flex-col gap-4 ml-4'>
                    {items.map((subItem) => (
                        <div className='flex gap-4 items-center'>
                            {subItem.hasIcon && (
                                <img src={subItem.icon} alt='' />
                            )}
                            <span className='text-lg'>{subItem.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobDropdown;

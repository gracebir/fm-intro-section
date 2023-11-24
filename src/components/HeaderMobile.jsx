/** @format */

import React from "react";
import { navitems } from "../assets/data";
import MobDropdown from "./elements/MobDropdown";
import Button from "./elements/Button";

const HeaderMobile = () => {
    return (
        <div className='absolute top-0 right-0 bg-black z-40 bg-opacity-60 flex justify-end w-full mob-header'>
            <div className='w-[70%] bg-almost-white h-full flex flex-col gap-4 pt-20 px-6'>
                {navitems.map((item) => (
                    <MobDropdown {...item} />
                ))}
                <div className='flex flex-col'>
                    <Button text={"Login"} />
                    <Button text={"Register"} isActive={true} />
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;

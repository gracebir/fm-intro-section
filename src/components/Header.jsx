/** @format */

import React from "react";
import Button from "./elements/Button";
import Dropdown from "./elements/Dropdown";
import logo from "../assets/images/logo.svg";
import { navitems } from "../assets/data";

// Login;
// Register;

const Header = () => {
    return (
        <header className='py-4'>
            <div className='flex justify-between max-w-[1950px] mx-auto items-center'>
                <div className='flex gap-20 items-center'>
                    <img src={logo} alt='logo' />
                    <div className='lg:flex hidden gap-10'>
                        {navitems.map((item) => (
                            <Dropdown
                                key={item.id}
                                items={item.items}
                                text={item.title}
                                isDrop={item.isDrop}
                            />
                        ))}
                    </div>
                </div>
                <div className='lg:flex hidden items-center gap-6'>
                    <Button text='Login' />
                    <Button text='Register' isActive={true} />
                </div>
            </div>
        </header>
    );
};

export default Header;

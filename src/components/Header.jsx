/** @format */

import React, { useState } from "react";
import Button from "./elements/Button";
import Dropdown from "./elements/Dropdown";
import logo from "../assets/images/logo.svg";
import { navitems } from "../assets/data";
import hamburger from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='py-4 px-6 lg:px-8'>
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
                <button
                    onClick={() => setIsOpen((open) => !open)}
                    className='block lg:hidden cursor-pointer z-50'
                >
                    <img src={isOpen ? close : hamburger} alt='menu' />
                </button>
            </div>
            {isOpen && <HeaderMobile />}
        </header>
    );
};

export default Header;

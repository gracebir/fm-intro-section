/** @format */

import React from "react";

const Button = ({ isActive = false, text }) => {
    return (
        <button
            className={`${
                isActive ? "border" : "border-none"
            } px-6 py-3 border-medium-gray rounded-2xl text-medium-gray hover:border-almost-black hover:text-almost-black`}
        >
            {text}
        </button>
    );
};

export default Button;

"use client";

import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const Logout: React.FC<Props> = ({ width = "24", height = "24" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default Logout;
"use client"

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BreadCrum from "./BreadCrum";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


interface UserManagementDetailProps {
    id: string;
}

const UserManagementDetail: React.FC<UserManagementDetailProps> = ({ id }) => {

    console.log(id, "id>>>>>>>")

    const router = useRouter();

    return (
        <div className="">
            <BreadCrum />
            <div className="flex items-center gap-4 mt-4">
                <div className="w-full lg:w-[70%]">
                    <div className="bg-white rounded-[12px] shadow-sm px-[22px] py-[22px] flex items-center justify-between">
                        <p className="text-[#11401C] font-semibold text-[20px]">Profile</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[#11401C] font-medium text-[18px]">Status:</p>
                            <div
                                className={`flex items-center gap-2 px-[22px] w-fit py-[10px] rounded-[12px] text-[14px] font-medium bg-[#E9F8EC] text-[#21BA45] 
                                    `}
                            >
                                <div className="h-[8px] w-[8px] rounded-full bg-[#21BA45]"></div>
                                Active
                            </div>
                            <HiOutlineDotsHorizontal className="text-[#000000] text-[14px] cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[30%]">

                </div>
            </div>

        </div>
    );
};

export default UserManagementDetail;

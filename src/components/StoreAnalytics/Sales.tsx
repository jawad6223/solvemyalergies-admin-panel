"use client"

import { useState } from "react";
import { StoreSalesData as initialData } from "@/data/StoreAnalysis";
import GaugeChart from "./GaugeChart";
import Image from "next/image";
import { IoArrowDownOutline } from "react-icons/io5";

interface SalesProps {
    searchTerm: string;
}

const Sales: React.FC<SalesProps> = ({ searchTerm }) => {

    const [data, setData] = useState(initialData);

    const filteredData = data
        .filter(user =>
            user.sales.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <div className="flex items-center gap-4 mt-4">
            <div className="lg:w-[75%] py-[20px] flex items-center rounded-lg border border-[#CCCCCC] bg-white">
                {filteredData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`pl-[37px] pr-[110px] flex flex-col justify-between ${(idx === 0 || idx === 1) ? "border-r border-[#B1A9A9]" : ""}`}
                    >
                        <div className="flex flex-col gap-2">
                            {item.image && (
                                <div
                                    className={`rounded-full px-[13px] py-[10px] w-fit ${idx === 0
                                        ? "bg-[#FDF2EE]"
                                        : idx === 1
                                            ? "bg-[#E9F3FA]"
                                            : idx === 2
                                                ? "bg-[#F5E4E4]"
                                                : ""
                                        }`}
                                >
                                    <Image src={item.image} alt={item.sales} width={16} height={20} />
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <p className="font-normal text-[#999999]">{item.sales}</p>
                                <div className="flex items-center gap-0.5">
                                    <p className={`font-medium text-[14px] ${(idx === 0 || idx === 1) ? "text-[#21BA45]" : idx === 2 ? "text-[#F2711C]" : ""}`}>{item.number}</p>
                                    <p className={`font-medium text-[14px] ${(idx === 0 || idx === 1) ? "text-[#21BA45]" : idx === 2 ? "text-[#F2711C]" : ""}`}><item.icon /></p>
                                </div>
                            </div>
                            <div>
                                <div className="text-[24px] text-[#222222] font-semibold">{item.rating}</div>
                                <div className="text-[#1E1E1E] text-[14px] font-normal">{item.text}</div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="lg:w-[25%] rounded-lg border border-[#CCCCCC] bg-white">
                <p className="text-[#000000] font-medium text-[20px] pl-[10px] pt-[10px]">User Volume</p>
                <div className="flex justify-center mt-[9px]">
                    <GaugeChart />
                </div>
                <div className="flex justify-center gap-2 items-center pb-[8px]">
                    <p className="text-[#717171] font-normal text-[12px]">Your users has grown</p>
                    <div className="bg-[#FEF1E8] rounded-lg px-[4px] py-[4px] flex items-center gap-0.5">
                        <IoArrowDownOutline className="text-[#F2711C]" />
                        <p className="text-[#F2711C] font-normal text-[12px]">+19%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;
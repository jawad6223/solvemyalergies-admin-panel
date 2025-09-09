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
            <div className="lg:w-[80%] flex items-center rounded-lg border border-[#CCCCCC] shadow-sm">
                {filteredData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`px-[37px] py-[20px] flex flex-col justify-between ${idx === 0 ? "border-r border-[#B1A9A9]" : ""}`}
                    >
                        <div className="flex flex-col gap-2">
                            {item.image && (
                                <div className={`bg-[#FDF2EE] rounded-full px-[13px] py-[10px] ${idx === 0 ? " " : ""}`}>
                                    <Image src={item.image} alt={item.sales} width={16} height={20} />
                                </div>
                            )}
                            <span className="font-semibold">{item.sales}</span>
                            <span
                                className={`text-sm ${item.icon === IoArrowDownOutline
                                    ? "text-red-500"
                                    : "text-green-500"
                                    } flex items-center gap-1`}
                            >
                                <item.icon /> {item.number}
                            </span>
                        </div>
                        <div className="text-2xl font-bold">{item.rating}</div>
                        <div className="text-gray-500 text-sm">{item.text}</div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default Sales;
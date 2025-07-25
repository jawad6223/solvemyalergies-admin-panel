"use client"

import { useState } from "react";
import Image from "next/image";
import BreadCrum from "./BreadCrum";
import { RewardsManagementData as initialData } from "@/data/RewardsManagement";
import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdKeyboardArrowRight } from 'react-icons/md';
import { RewardsManagementModalData } from "@/data/RewardsManagement";
import RewardsModal from "./RewardsModal";

const RewardsManagement: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [data, setData] = useState(initialData);
    const [selectedRows, setSelectedRows] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filteredData = data
        .filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(user =>
            selectedFilter
                ? user.date.toLowerCase().includes(selectedFilter.toLowerCase())
                : true
        );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const itemsPerPageOptions = [10, 20, 30, 50];

    const toggleCheckbox = (email: string) => {
        setSelectedRows((prev) =>
            prev.includes(email)
                ? prev.filter((item) => item !== email)
                : [...prev, email]
        )
    }

    const toggleAllCheckboxes = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(data.map((user) => user.user))
        }
    }

    const handleActionClick = (index: number) => {
        const actualIndex = startIndex + index;
        setSelectedIndex(actualIndex);
        setModalOpen(true);
    };


    return (
        <div className="">
            <BreadCrum onSearch={setSearchTerm} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
            <div className="overflow-x-auto rounded-lg border border-[#CCCCCC] mt-4">
                <table className="min-w-full text-sm text-center">
                    <thead className="text-[#484C52] font-medium bg-[#F2F2F2] border-b border-[#CCCCCC]">
                        <tr>
                            <th className="px-4 py-4">
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.length === data.length}
                                        onChange={toggleAllCheckboxes}
                                        className="peer hidden"
                                    />
                                    <div className="w-4 h-4 rounded border border-[#828282] bg-white flex items-center justify-center peer-checked:border-[#21BA45] peer-checked:bg-[#21BA45]">
                                        <Image src="/images/User/tick.svg" alt="check" width={12} height={7} />
                                    </div>
                                </label>
                            </th>
                            <th
                                className={`px-4 py-4 whitespace-nowrap`}
                            >
                                User ID
                            </th>
                            <th className="px-4 py-4 whitespace-nowrap">User Name</th>
                            <th className="px-4 py-4 whitespace-nowrap">Stars Earned</th>
                            <th className="px-4 py-4 whitespace-nowrap">Stars Redeem</th>
                            <th className="px-4 py-4 whitespace-nowrap">Stars Shared</th>
                            <th className="px-4 py-4 whitespace-nowrap">Curren Balance</th>
                            <th className="px-4 py-4 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#CCCCCC]">
                        {filteredData.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center text-[#222222] font-medium py-2">
                                    No Data Available
                                </td>
                            </tr>
                        ) : (
                            currentItems.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-4">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(user.user)}
                                                onChange={() => toggleCheckbox(user.user)}
                                                className="peer hidden"
                                            />
                                            <div className="w-4 h-4 rounded border border-[#828282] bg-white flex items-center justify-center peer-checked:border-[#21BA45] peer-checked:bg-[#21BA45]">
                                                <Image src="/images/User/tick.svg" alt="check" width={12} height={7} />
                                            </div>
                                        </label>
                                    </td>
                                    <td className="px-4 py-4 text-center font-medium text-[14px] text-[#484C52] whitespace-nowrap">
                                        {user.user}
                                    </td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.name}</td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.earned}</td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.redeem}</td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.shared}</td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.balance}</td>
                                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] underline hover:text-[#11401C] cursor-pointer whitespace-nowrap" onClick={() => handleActionClick(index)}>{user.action}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {filteredData.length > 10 && (
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-3 gap-4 px-[28px]">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="text-[#484C52] font-medium text-[14px] border-r border-[#CCCCCC] pr-4">
                            Items per page
                            <select
                                className="ml-2 px-2 py-1 border border-[#E9E9E9] rounded-lg outline-none cursor-pointer"
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                            >
                                {itemsPerPageOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="text-[#313131] text-[14px] font-normal">
                            {startIndex + 1} - {Math.min(startIndex + itemsPerPage, data.length)} of {data.length} items
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                        <div className="text-[#313131] text-[14px] font-normal border-r border-[#A6A6A6] pr-3">
                            {currentPage} of {data.length} pages
                        </div>
                        <button
                            onClick={() => setCurrentPage(1)}
                            className="border border-[#E9E9E9] w-[40px] h-[36px] flex items-center justify-center cursor-pointer rounded-[4px] text-[#626262]"
                        >
                            <MdOutlineKeyboardDoubleArrowLeft />
                        </button>
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            className="border border-[#E9E9E9] w-[40px] h-[36px] flex items-center justify-center cursor-pointer rounded-[4px] text-[#626262]">
                            <MdKeyboardArrowLeft />
                        </button>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            className="border border-[#E9E9E9] w-[40px] h-[36px] flex items-center justify-center cursor-pointer rounded-[4px] text-[#626262]"
                        >
                            <MdKeyboardArrowRight />
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className="border border-[#E9E9E9] w-[40px] h-[36px] flex items-center justify-center cursor-pointer rounded-[4px] text-[#626262]">
                            <MdOutlineKeyboardDoubleArrowRight />
                        </button>
                    </div>
                </div>
            )
            }

            {modalOpen && selectedIndex !== null && (
                <RewardsModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    data={RewardsManagementModalData[selectedIndex]}
                />
            )}
        </div>
    );
};

export default RewardsManagement;
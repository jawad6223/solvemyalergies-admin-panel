"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BreadCrum from "./BreadCrum";
import { AllergyReportsData as initialData } from "@/data/AllergyReports";
import { AllergyReportsModalData } from "@/data/AllergyReports";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEye } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import AllergyModal from "./AllergyModal";
import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdKeyboardArrowRight } from 'react-icons/md';

const AllergyReports: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [ModalOpen, setModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [viewmodalOpen, setViewModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setDeleteIndex(index);
    setModalOpen(true);
    setOpenDropdownIndex(null);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      setData((prevData) => prevData.filter((_, i) => i !== deleteIndex));
      setDeleteIndex(null);
      setModalOpen(false);
    }
  };


  const filteredData = data
    .filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(user =>
      selectedFilter
        ? user.status.toLowerCase().includes(selectedFilter.toLowerCase())
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
      setSelectedRows(data.map((user) => user.id))
    }
  }

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`[data-dropdown-index="${openDropdownIndex}"]`)) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownIndex]);

  const toggleBlockStatus = (id: string) => {
    setData(prevData =>
      prevData.map(user =>
        user.id === id
          ? {
            ...user,
            status: user.status === "Pending" ? "Approved" : user.status === "Under Review" ? "Rejected" : "Pending",
            activity: "Just Now"
          }
          : user
      )
    );
    setOpenDropdownIndex(null);
  };

  const handleView = (index: number) => {
    const actualIndex = startIndex + index;
    setSelectedIndex(actualIndex);
    setViewModalOpen(true);
    setOpenDropdownIndex(null);
  };

  return (
    <div className="">
      <BreadCrum onSearch={setSearchTerm} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
      <div className="relative mt-4">
        <div className="overflow-x-auto rounded-lg border border-[#CCCCCC]">
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
                <th className="px-4 py-4 text-left whitespace-nowrap">Report ID</th>
                <th className="px-4 py-4 whitespace-nowrap">Name</th>
                <th className="px-4 py-4 whitespace-nowrap">Submission Date</th>
                <th className="px-4 py-4 whitespace-nowrap">Status</th>
                <th className="px-4 py-4 whitespace-nowrap">Allergies Identified</th>
                <th className="px-4 py-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#CCCCCC]">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-[#222222] font-medium py-2">
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
                          checked={selectedRows.includes(user.id)}
                          onChange={() => toggleCheckbox(user.id)}
                          className="peer hidden"
                        />
                        <div className="w-4 h-4 rounded border border-[#828282] bg-white flex items-center justify-center peer-checked:border-[#21BA45] peer-checked:bg-[#21BA45]">
                          <Image src="/images/User/tick.svg" alt="check" width={12} height={7} />
                        </div>
                      </label>
                    </td>
                    <td className="px-4 py-4 text-left text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.id}</td>
                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.name}</td>
                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.date}</td>
                    <td className="px-4 py-4 flex justify-center whitespace-nowrap">
                      <div
                        className={`flex items-center gap-2 px-[22px] w-fit py-[10px] rounded-[12px] text-[14px] font-medium 
                          ${user.status === 'Pending'
                            ? 'bg-[#F2711C1A] text-[#F2711C]'
                            : user.status === 'Approved'
                              ? 'bg-[#21BA451A] text-[#21BA45]'
                              : user.status === 'Under Review'
                                ? 'bg-[#2185D01A] text-[#2185D0]'
                                : 'bg-[#DB28281A] text-[#DB2828]'
                          }
                          `}
                      >
                        <div className="h-[8px] w-[8px] rounded-full bg-current"></div>
                        {user.status}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#484C52] font-medium text-[14px] whitespace-nowrap">{user.indentified}</td>
                    <td className="px-4 py-4 flex justify-center whitespace-nowrap">
                      <div ref={dropdownRef} data-dropdown-index={index}>
                        <button className="text-[#000000] cursor-pointer" onClick={() => toggleDropdown(index)}>
                          <user.icon className="w-5 h-5" />
                        </button>
                        {openDropdownIndex === index && (
                          <div className="absolute right-[3.5rem] mt-0 w-fit bg-white rounded-[6px] shadow-lg border border-[#B3B3B3] z-50">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleView(index);
                              }}
                              className="w-full cursor-pointer flex gap-2 px-[14px] py-[12px] text-[#11401C] font-medium border-b border-[#B3B3B3]"
                            >
                              <AiOutlineEye className="w-4 h-4" /> View
                            </button>
                            {user.status !== "Approved" && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleBlockStatus(user.id);
                                }}
                                className="w-fit cursor-pointer flex gap-2 px-[14px] py-[12px] text-[#717171] font-medium border-b border-[#B3B3B3]"
                              >
                                {user.status === "Pending" ? (
                                  <>
                                    <Image src="/images/Allergy/approve.svg" alt="img" width={13} height={10} /> Approve
                                  </>
                                ) : user.status === "Rejected" ? (
                                  <>
                                    <Image src="/images/Allergy/re.svg" alt="img" width={13} height={18} /> Re-evaluate
                                  </>
                                ) : user.status === "Under Review" ? (
                                  <>
                                    <Image src="/images/Allergy/mark.svg" alt="img" width={19} height={11} /> Mark as completed
                                  </>
                                ) : null
                                }
                              </button>
                            )}
                            {user.status !== "Rejected" && user.status !== "Under Review" && (
                              <button
                                onClick={(e) => { e.stopPropagation(); handleOpen(index) }}
                                className="w-full cursor-pointer flex gap-2 px-[14px] py-[12px] text-[#DB2828] font-medium"
                              >
                                {user.status === "Pending" ? (
                                  <>
                                    <IoClose className="w-4 h-4" /> Reject
                                  </>
                                ) : user.status === "Approved" ? (
                                  <>
                                    <RiDeleteBinLine className="w-4 h-4" /> Delete
                                  </>
                                ) : null
                                }
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
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

      {ModalOpen && deleteIndex !== null && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#BABBBB]/40 bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-80">
            <h2 className="text-lg font-semibold text-center">
              Are you sure you want to delete?
            </h2>
            <div className="flex justify-center items-center gap-3 mt-3">
              <button
                onClick={handleConfirmDelete}
                className="px-[16px] py-[7px] border border-[#DB2828] text-[#DB2828] rounded-full font-medium flex items-center justify-center gap-1 cursor-pointer"
              >
                <TiTick />
                Yes
              </button>
              <button
                onClick={handleClose}
                className="px-[16px] py-[7px] border border-[#2185D0] text-[#989898] hover:text-[#2185D0] rounded-full transition cursor-pointer flex items-center justify-center gap-1"
              >
                <MdClose />
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {viewmodalOpen && selectedIndex !== null && (
        <AllergyModal
          isOpen={viewmodalOpen}
          onClose={() => setViewModalOpen(false)}
          data={AllergyReportsModalData[selectedIndex]}
        />
      )}
    </div>
  );
};

export default AllergyReports;

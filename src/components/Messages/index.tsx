"use client"

import { useState } from 'react';
import Image from 'next/image';
import BreadCrum from "./BreadCrum";
import { IoIosSearch } from "react-icons/io";
import { messages, Message } from '@/data/Messages';

const Messages: React.FC = () => {

  const [activeTab, setActiveTab] = useState<'All' | 'Read' | 'Unread'>('All');
  const [search, setSearch] = useState('');

  let filteredMessages: Message[] = [];

  if (activeTab === 'All') {
    filteredMessages = [messages[0], messages[1]];
  } else if (activeTab === 'Read') {
    filteredMessages = [messages[2]];
  } else if (activeTab === 'Unread') {
    filteredMessages = [messages[3]];
  }

  if (search.trim() !== '') {
    filteredMessages = filteredMessages
      .map(section => ({
        ...section,
        all: section.all.filter(msg =>
          msg.name.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter(section => section.all.length > 0);
  }

  const tabButtonClass = (tab: string) =>
    `relative text-[#222222] cursor-pointer font-medium text-[12px] flex items-center gap-2 pb-1 ${activeTab === tab ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#222222]' : ''
    }`;

  return (
    <div className="">
      <BreadCrum />
      <div className="flex gap-4 mt-4">
        <div className="w-[30%] border border-[#B1A9A9] bg-white rounded-[8px] px-[10px] py-[22px]">
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setActiveTab('All')} className={tabButtonClass('All')}>
              All
              <div className="w-[15px] h-[14px] bg-[#E2E2E2] text-[10px] rounded-[4px] flex items-center justify-center">
                8
              </div>
            </button>
            <button onClick={() => setActiveTab('Read')} className={tabButtonClass('Read')}>
              Read
              <div className="w-[15px] h-[14px] bg-[#E2E2E2] text-[10px] rounded-[4px] flex items-center justify-center">
                12
              </div>
            </button>
            <button onClick={() => setActiveTab('Unread')} className={tabButtonClass('Unread')}>
              Unread
              <div className="w-[15px] h-[14px] bg-[#E2E2E2] text-[10px] rounded-[4px] flex items-center justify-center">
                3
              </div>
            </button>
          </div>
          <div className="flex items-center px-3 gap-2 border border-[#D5D5D5] rounded-full w-full h-[38px] focus-within:ring-1 focus-within:ring-[#11401C] focus-within:border-[#11401C] transition-all">
            <IoIosSearch size={20} className="text-[#8F9091]" />
            <input
              type="text"
              placeholder="Search chat"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full text-black outline-none bg-transparent placeholder:text-[#8F9091]"
            />
          </div>

          <div className='mt-4'>
            {filteredMessages.map((section) => (
              <div key={section.label} className="">
                <h4 className="text-[14px] font-normal text-[#717171] mb-2">{section.label}</h4>
                {section.all.map((msg: Message['all'][number], index) => (
                  <div key={index} className="mb-4 last:mb-0 cursor-pointer">
                    <div className="flex gap-2 items-start">
                      <Image src={msg.image} alt={msg.name} width={22} height={22} />
                      <div className="flex-1">
                        <p className="font-semibold text-[14px] text-[#222222]">{msg.name} <span className="text-[#666666] text-[12px]">- {msg.userId}</span></p>
                        <div className='flex items-center justify-between'>
                          <p className="text-[12px] text-[#4D4D4D] truncate font-medium">{msg.message}</p>
                          {msg.dot &&
                            <Image src={msg.dot} alt={msg.name} width={8} height={8} />
                          }
                        </div>
                        <p className="text-[10px] text-[#999999] font-medium mt-1">{msg.date} • {msg.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
        <div className="w-[70%]">

        </div>
      </div>
    </div>
  );
};

export default Messages;
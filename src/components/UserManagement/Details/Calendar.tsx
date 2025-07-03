'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { TiTick } from 'react-icons/ti';

const Calendar = () => {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [completedSessions, setCompletedSessions] = useState<number[]>([]);

    const openModal = (day: number) => {
        setSelectedDay(day);
        if (!completedSessions.includes(day)) {
            setCompletedSessions((prev) => [...prev, day]);
        }
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const totalDays = 42;

    return (
        <div className="">
            <h2 className="text-[#11401C] font-semibold text-[20px] mb-2">Sessions Completed</h2>
            <div className="grid grid-cols-7 gap-2 relative">
                {Array.from({ length: totalDays }, (_, i) => {
                    const day = i + 1;
                    const completed = completedSessions.includes(day);
                    return (
                        <button
                            key={day}
                            onClick={() => openModal(day)}
                            className={`w-10 h-10 cursor-pointer flex items-center justify-center rounded-full font-medium text-[14px] relative transition-all duration-200 
                ${completed
                                    ? 'bg-gradient-to-r from-[#11401C] to-[#859B5B] text-white'
                                    : 'text-[#859B5B]'
                                }`}
                        >
                            {day}
                            {completed && (
                                <TiTick className="w-4 h-4 absolute -top-1 -right-1 p-[2px] bg-[#11401C] text-white rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>

            <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg">
                        <Dialog.Title className="text-lg font-bold mb-2">Session {selectedDay}</Dialog.Title>
                        <p>This is content for session {selectedDay}.</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-gradient-to-r from-[#11401C] to-[#859B5B] text-white rounded hover:opacity-90"
                        >
                            Close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

export default Calendar;
"use client";

import {
    HiOutlineChatBubbleOvalLeftEllipsis,
    HiOutlineClock,
    HiOutlineBuildingOffice,
    HiOutlineUserCircle,
    HiOutlineBars3,
    HiOutlineSquares2X2,
    HiChevronDown,
} from "react-icons/hi2";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-sm">
            {/* Left — Logo & Title */}
            <div className="flex items-center gap-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0645ba] ring-2 ring-[#e0b700] ring-offset-2">
                    {/* Mocking the logo from the image */}
                    <div className="flex items-end gap-0.5">
                        <div className="h-4 w-1 bg-[#e0b700]" />
                        <div className="h-5 w-1 bg-[#e0b700]" />
                        <div className="h-3 w-1 bg-[#e0b700]" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <HiOutlineSquares2X2 className="h-5 w-5 text-gray-400" />
                    <h1 className="text-sm font-medium text-gray-600">
                        Dashboard
                    </h1>
                </div>
            </div>

            {/* Right — Actions & Profile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-5">
                    <button className="text-gray-500 hover:text-gray-700 transition">
                        <HiOutlineChatBubbleOvalLeftEllipsis className="h-[22px] w-[22px] stroke-[1.5]" />
                    </button>

                    <button className="relative text-gray-500 hover:text-gray-700 transition">
                        <HiOutlineClock className="h-[22px] w-[22px] stroke-[1.5]" />
                        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-[9px] font-bold text-white">
                            10
                        </span>
                    </button>

                    <button className="text-gray-500 hover:text-gray-700 transition">
                        <HiOutlineBuildingOffice className="h-[22px] w-[22px] stroke-[1.5]" />
                    </button>
                </div>

                <div className="h-6 w-px bg-gray-200" />

                <button className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 -mx-2 rounded-lg transition-colors">
                    <HiOutlineUserCircle className="h-6 w-6 text-gray-500 stroke-[1.5]" />
                    <span className="text-sm font-medium text-gray-700">Birhane Araya</span>
                    <HiChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                <button className="ml-2 text-gray-500 hover:text-gray-700 transition">
                    <HiOutlineBars3 className="h-7 w-7 stroke-[1.5]" />
                </button>
            </div>
        </nav>
    );
}

"use client";

import {
    HiOutlineSquares2X2,
    HiOutlineBanknotes,
    HiOutlineLockClosed,
    HiOutlineCreditCard,
    HiOutlineArrowsRightLeft,
    HiOutlineQueueList,
    HiOutlineShieldExclamation,
    HiOutlineClipboardDocumentCheck,
    HiOutlineCog6Tooth,
    HiOutlineChevronRight,
} from "react-icons/hi2";

const navItems = [
    { name: "Dashboard", icon: HiOutlineSquares2X2, active: true },
    { name: "Budget Allocation", icon: HiOutlineBanknotes },
    { name: "Encumbrances", icon: HiOutlineLockClosed, hasSubmenu: true },
    { name: "Expenditures", icon: HiOutlineCreditCard, hasSubmenu: true },
    { name: "Transfers & Adjust", icon: HiOutlineArrowsRightLeft },
    { name: "Transactions Ledger", icon: HiOutlineQueueList },
    { name: "Alert Center", icon: HiOutlineShieldExclamation },
    { name: "Audit Tools", icon: HiOutlineClipboardDocumentCheck },
    { name: "Settings", icon: HiOutlineCog6Tooth },
];

export default function Sidebar() {
    return (
        <aside className="w-[280px] flex-shrink-0 bg-white border-r border-gray-200 hidden md:flex flex-col rounded-r-2xl h-full m-2 ml-0 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
            <div className="flex-1 overflow-y-auto pt-6 px-4 pb-4 scrollbar-thin">
                <ul className="space-y-1.5 flex flex-col items-stretch">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href="#"
                                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${item.active
                                    ? "bg-[#335697] text-white shadow-sm"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon className={`h-5 w-5 ${item.active ? "text-white" : "text-gray-400 stroke-[1.5]"}`} />
                                    <span className={`text-sm font-medium ${item.active ? "font-semibold text-white" : ""}`}>
                                        {item.name}
                                    </span>
                                </div>
                                {item.hasSubmenu && (
                                    <HiOutlineChevronRight className="h-4 w-4 text-gray-400" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

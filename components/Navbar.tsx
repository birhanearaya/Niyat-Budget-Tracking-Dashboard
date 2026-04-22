"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    HiOutlineChatBubbleOvalLeftEllipsis,
    HiOutlineClock,
    HiOutlineBuildingOffice,
    HiOutlineUserCircle,
    HiOutlineBars3,
    HiOutlineSquares2X2,
    HiChevronDown,
    HiOutlineShieldExclamation,
    HiOutlineLockClosed,
    HiOutlineCheckCircle
} from "react-icons/hi2";
import { Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from "flowbite-react";

const mockNotifications = [
    {
        id: 1,
        title: "Hard Stop Triggered",
        message: "Sector Bureau education requested ETB 4.2M, exceeding available balance.",
        time: "2 mins ago",
        icon: HiOutlineShieldExclamation,
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        id: 2,
        title: "Encumbrance Approved",
        message: "PO-2025-8910 (Health Sub-City) has been successfully committed.",
        time: "1 hour ago",
        icon: HiOutlineCheckCircle,
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        id: 3,
        title: "Fund Adjustment Request",
        message: "Pending authorization for transfer of ETB 10M to Capital Expenditures.",
        time: "3 hours ago",
        icon: HiOutlineLockClosed,
        color: "text-yellow-600",
        bg: "bg-yellow-50"
    }
];

export default function Navbar() {
    const pathname = usePathname();
    const currentLabel = useMemo(() => {
        const map: Record<string, string> = {
            "/": "Dashboard",
            "/allocations": "Budget Allocation",
            "/encumbrances": "Encumbrances",
            "/expenditures": "Expenditures",
            "/transfers": "Transfers & Adjustments",
            "/transactions": "Transactions Ledger",
            "/alerts": "Alert Center",
            "/audit": "Audit Tools",
            "/settings": "Settings",
        };
        return map[pathname] ?? "Dashboard";
    }, [pathname]);

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:px-6">
            {/* Left — Logo & Title */}
            <div className="flex items-center gap-3 md:gap-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0645ba] ring-2 ring-[#e0b700] ring-offset-2">
                    {/* Mocking the logo from the image */}
                    <div className="flex items-end gap-0.5 mt-1">
                        <div className="h-4 w-1 bg-[#e0b700]" />
                        <div className="h-5 w-1 bg-[#e0b700]" />
                        <div className="h-3 w-1 bg-[#e0b700]" />
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                    <HiOutlineSquares2X2 className="hidden h-5 w-5 text-gray-400 sm:block" />
                    <div>
                        <h1 className="text-sm font-semibold text-slate-700 md:text-base">{currentLabel}</h1>
                        <p className="hidden text-xs text-slate-400 sm:block">Budget Tracking Platform</p>
                    </div>
                </div>
            </div>

            {/* Right — Actions & Profile */}
            <div className="flex items-center gap-2 md:gap-6">
                <div className="hidden items-center gap-2 md:flex">
                    <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition">
                        <HiOutlineChatBubbleOvalLeftEllipsis className="h-[22px] w-[22px] stroke-[1.5]" />
                    </button>

                    {/* Notifications Dropdown */}
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <div className="relative text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition">
                                <HiOutlineClock className="h-[22px] w-[22px] stroke-[1.5]" />
                                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-sm ring-2 ring-white">
                                    3
                                </span>
                            </div>
                        }
                    >
                        <DropdownHeader>
                            <div className="flex items-center justify-between">
                                <span className="block text-sm font-semibold text-gray-900">Notifications</span>
                            </div>
                        </DropdownHeader>
                        <div className="max-h-96 w-80 overflow-y-auto scrollbar-thin">
                            {mockNotifications.map((notif) => (
                                <DropdownItem key={notif.id} className="flex items-start gap-3 p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0">
                                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notif.bg}`}>
                                        <notif.icon className={`h-4 w-4 ${notif.color}`} />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-sm font-medium text-gray-900 leading-none mb-1">{notif.title}</span>
                                        <span className="text-xs text-gray-500 leading-[1.3] mb-1.5 break-words whitespace-normal text-wrap">{notif.message}</span>
                                        <span className="text-[10px] text-gray-400 font-medium">{notif.time}</span>
                                    </div>
                                </DropdownItem>
                            ))}
                        </div>
                    </Dropdown>

                    <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition">
                        <HiOutlineBuildingOffice className="h-[22px] w-[22px] stroke-[1.5]" />
                    </button>
                </div>

                <div className="hidden h-6 w-px bg-gray-200 md:block" />

                {/* Profile Dropdown */}
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 -mx-2 transition-colors hover:bg-gray-50">
                            <HiOutlineUserCircle className="h-6 w-6 text-gray-500 stroke-[1.5]" />
                            <span className="hidden text-sm font-medium text-gray-700 lg:block">Birhane Araya</span>
                            <HiChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm font-semibold text-gray-900">Birhane Araya</span>
                        <span className="block truncate text-xs text-gray-500">birhane@mofed.gov.et</span>
                    </DropdownHeader>
                    <DropdownItem>Account Profile</DropdownItem>
                    <DropdownItem>System Settings</DropdownItem>
                    <DropdownItem>Audit Tools</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem className="text-red-500 font-medium">Sign out</DropdownItem>
                </Dropdown>

                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <button className="ml-1 rounded-lg p-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 md:ml-2">
                            <HiOutlineBars3 className="h-7 w-7 stroke-[1.5]" />
                        </button>
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm font-semibold text-gray-900">Budgets Menu</span>
                    </DropdownHeader>
                    <DropdownItem as={Link} href="/">Dashboard</DropdownItem>
                    <DropdownItem as={Link} href="/allocations">Budget Allocation</DropdownItem>
                    <DropdownItem as={Link} href="/encumbrances">Encumbrances</DropdownItem>
                    <DropdownItem as={Link} href="/expenditures">Expenditures</DropdownItem>
                    <DropdownItem as={Link} href="/transfers">Transfers &amp; Adjust</DropdownItem>
                    <DropdownItem as={Link} href="/transactions">Transactions Ledger</DropdownItem>
                    <DropdownItem as={Link} href="/alerts">Alert Center</DropdownItem>
                    <DropdownItem as={Link} href="/audit">Audit Tools</DropdownItem>
                    <DropdownItem as={Link} href="/settings">Settings</DropdownItem>
                </Dropdown>
            </div>
        </nav>
    );
}

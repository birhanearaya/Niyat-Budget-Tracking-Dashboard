"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
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
    HiOutlineFolderOpen,
    HiOutlineChevronDown,
    HiOutlineChevronRight,
} from "react-icons/hi2";

const navItems = [
    { name: "Dashboard", href: "/", icon: HiOutlineSquares2X2 },
    { name: "Budget Allocation", href: "/allocations", icon: HiOutlineBanknotes },
    { name: "Encumbrances", href: "/encumbrances", icon: HiOutlineLockClosed, hasSubmenu: true },
    { name: "Expenditures", href: "/expenditures", icon: HiOutlineCreditCard, hasSubmenu: true },
    { name: "Transfers & Adjust", href: "/transfers", icon: HiOutlineArrowsRightLeft },
    { name: "Transactions Ledger", href: "/transactions", icon: HiOutlineQueueList },
    { name: "Alert Center", href: "/alerts", icon: HiOutlineShieldExclamation },
    { name: "Audit Tools", href: "/audit", icon: HiOutlineClipboardDocumentCheck },
    { name: "Settings", href: "/settings", icon: HiOutlineCog6Tooth },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isBudgetMenuOpen, setIsBudgetMenuOpen] = useState(true);
    const hasActiveBudgetPage = useMemo(
        () => navItems.some((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))),
        [pathname]
    );

    return (
        <aside className="hidden h-full w-[296px] flex-shrink-0 flex-col border-r border-slate-200 bg-white/95 md:flex">
            <div className="flex-1 overflow-y-auto pt-6 px-4 pb-4 scrollbar-thin">
                <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Main Navigation
                </div>
                <button
                    onClick={() => setIsBudgetMenuOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                        hasActiveBudgetPage ? "bg-blue-50 text-blue-900" : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                            <HiOutlineFolderOpen className="h-5 w-5" />
                        </span>
                        <div>
                            <div className="text-sm font-semibold">Budgets</div>
                            <div className="text-xs text-slate-500">Financial control modules</div>
                        </div>
                    </div>
                    {isBudgetMenuOpen ? <HiOutlineChevronDown className="h-4 w-4" /> : <HiOutlineChevronRight className="h-4 w-4" />}
                </button>

                {isBudgetMenuOpen && (
                    <ul className="mt-3 space-y-1.5 pl-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-all ${
                                            isActive
                                                ? "border border-blue-100 bg-blue-600 text-white shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                                            <span className={`text-sm ${isActive ? "font-semibold" : "font-medium"}`}>{item.name}</span>
                                        </div>
                                        {item.hasSubmenu && (
                                            <HiOutlineChevronRight className={`h-3.5 w-3.5 ${isActive ? "text-white/85" : "text-slate-400"}`} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </aside>
    );
}

"use client";

import { filterOptions } from "@/lib/data";
import { HiOutlineCalendarDays, HiOutlineFunnel } from "react-icons/hi2";

export default function ControlBar() {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {/* Date Range */}
            <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto">
                <HiOutlineCalendarDays className="h-4 w-4 text-gray-400" />
                <input
                    type="date"
                    defaultValue="2025-07-08"
                    className="rounded-xl border px-3 py-2 text-sm text-slate-700"
                />
                <span className="text-xs text-gray-400">to</span>
                <input
                    type="date"
                    defaultValue="2026-04-22"
                    className="rounded-xl border px-3 py-2 text-sm text-slate-700"
                />
            </div>

            {/* Divider */}
            <div className="hidden h-6 w-px bg-slate-200 lg:block" />

            {/* Fiscal Year */}
            <select className="rounded-xl border px-3 py-2 text-sm text-slate-700">
                {filterOptions.fiscalYears.map((fy) => (
                    <option key={fy.value} value={fy.value}>
                        {fy.label}
                    </option>
                ))}
            </select>

            {/* Divider */}
            <div className="hidden h-6 w-px bg-slate-200 lg:block" />

            {/* Comparison Toggle */}
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <div className="relative">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="h-5 w-9 rounded-full bg-slate-300 transition-colors peer-checked:bg-[#0645ba]" />
                    <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
                </div>
                <span>Year-over-Year</span>
            </label>

            {/* Divider */}
            <div className="hidden h-6 w-px bg-slate-200 lg:block" />

            {/* Addis Ababa Budget Hierarchy Filters */}
            <div className="flex w-full flex-wrap items-center gap-2 xl:ml-auto xl:w-auto">
                <HiOutlineFunnel className="h-4 w-4 text-slate-400" />
                <select className="rounded-xl border px-3 py-2 text-sm text-slate-700">
                    <option value="">Sector Bureau</option>
                    {filterOptions.sectors.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <select className="rounded-xl border px-3 py-2 text-sm text-slate-700">
                    <option value="">Sub City</option>
                    {filterOptions.subCities.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <select className="rounded-xl border px-3 py-2 text-sm text-slate-700">
                    <option value="">Program</option>
                    {filterOptions.programs.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

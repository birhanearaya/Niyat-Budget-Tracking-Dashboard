"use client";

import { kpiData, formatCompact } from "@/lib/data";
import {
    HiOutlineBanknotes,
    HiOutlineDocumentCheck,
    HiOutlineCreditCard,
    HiOutlineScale,
    HiOutlineChartBarSquare,
} from "react-icons/hi2";

interface KpiCardProps {
    label: string;
    value: string;
    trend: number;
    icon: React.ReactNode;
    prefix?: string;
    suffix?: string;
}

function KpiCard({ label, value, trend, icon, prefix = "", suffix = "" }: KpiCardProps) {
    const isPositive = trend > 0;
    const isNeutral = trend === 0;

    return (
        <div className="surface-panel p-5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4923A] to-[#D4923A]/40" />
            <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{label}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4923A]/15 text-[#D4923A]">
                    {icon}
                </div>
            </div>
            <div className="mb-1 text-2xl font-bold text-[#1B2A4A]">
                {prefix}{value}{suffix}
            </div>
            <div className="flex items-center gap-1 text-xs">
                {!isNeutral && (
                    <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${isPositive
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                            }`}
                    >
                        {isPositive ? "↑" : "↓"} {Math.abs(trend).toFixed(1)}%
                    </span>
                )}
                {isNeutral && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-500">
                        — 0%
                    </span>
                )}
                <span className="text-gray-400">vs last month</span>
            </div>
        </div>
    );
}

export default function KpiCards() {
    const cards: KpiCardProps[] = [
        {
            label: "Total Planned Budget",
            value: formatCompact(kpiData.totalAllocated),
            trend: kpiData.trends.allocated,
            icon: <HiOutlineBanknotes className="h-5 w-5" />,
            prefix: "ETB ",
        },
        {
            label: "Reserved Funds",
            value: formatCompact(kpiData.totalEncumbered),
            trend: kpiData.trends.encumbered,
            icon: <HiOutlineDocumentCheck className="h-5 w-5" />,
            prefix: "ETB ",
        },
        {
            label: "Total Spent",
            value: formatCompact(kpiData.totalExpended),
            trend: kpiData.trends.expended,
            icon: <HiOutlineCreditCard className="h-5 w-5" />,
            prefix: "ETB ",
        },
        {
            label: "Available Balance",
            value: formatCompact(kpiData.availableBalance),
            trend: kpiData.trends.available,
            icon: <HiOutlineScale className="h-5 w-5" />,
            prefix: "ETB ",
        },
        {
            label: "Budget Execution Rate",
            value: kpiData.utilizationRate.toFixed(1),
            trend: kpiData.trends.utilization,
            icon: <HiOutlineChartBarSquare className="h-5 w-5" />,
            suffix: "%",
        },
    ];

    return (
        <section>
            <h2 className="section-title mb-4 text-lg">
                Financial Overview
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {cards.map((c) => (
                    <KpiCard key={c.label} {...c} />
                ))}
            </div>
        </section>
    );
}

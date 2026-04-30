"use client";

import { systemHealth, formatCompact, kpiData } from "@/lib/data";
import {
    HiOutlineShieldCheck,
    HiOutlineClipboardDocumentList,
    HiOutlineBoltSlash,
    HiOutlineExclamationTriangle,
    HiOutlineArrowTrendingUp,
    HiOutlineCurrencyDollar,
    HiOutlineCheckBadge,
} from "react-icons/hi2";

interface StatusCardProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    trend?: number;
    accent?: "navy" | "amber" | "green" | "red";
    subtitle?: string;
}

function StatusCard({ label, value, icon, trend, accent = "navy", subtitle }: StatusCardProps) {
    const accentColors = {
        navy: { bg: "bg-[#1B2A4A]/10", text: "text-[#1B2A4A]", bar: "bg-[#1B2A4A]" },
        amber: { bg: "bg-[#D4923A]/15", text: "text-[#D4923A]", bar: "bg-[#D4923A]" },
        green: { bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-500" },
        red: { bg: "bg-red-50", text: "text-red-600", bar: "bg-red-500" },
    };
    const colors = accentColors[accent];

    return (
        <div className="surface-panel p-4 relative overflow-hidden">
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bar}`} />
            <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</span>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                    {icon}
                </div>
            </div>
            <div className={`text-xl font-bold ${colors.text} mb-0.5`}>{value}</div>
            <div className="flex items-center gap-2">
                {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
                {trend !== undefined && (
                    <span className={`text-xs font-medium ${trend >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                        {trend >= 0 ? "↑" : "↓"} {Math.abs(trend).toFixed(1)}%
                    </span>
                )}
            </div>
        </div>
    );
}

export default function SystemStatusCards() {
    return (
        <section>
            <h2 className="section-title mb-4 text-lg">System & Financial Health</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                <StatusCard
                    label="Cash Availability"
                    value={systemHealth.cashAvailabilityStatus}
                    icon={<HiOutlineCurrencyDollar className="h-4 w-4" />}
                    trend={systemHealth.cashAvailabilityTrend}
                    accent="green"
                    subtitle="Status"
                />
                <StatusCard
                    label="Commitment Rate"
                    value={`${systemHealth.commitmentRate}%`}
                    icon={<HiOutlineArrowTrendingUp className="h-4 w-4" />}
                    trend={systemHealth.commitmentTrend}
                    accent="amber"
                    subtitle="of total budget"
                />
                <StatusCard
                    label="Budget Absorption"
                    value={`${systemHealth.budgetAbsorption}%`}
                    icon={<HiOutlineCheckBadge className="h-4 w-4" />}
                    accent="navy"
                    subtitle="FY progress"
                />
                <StatusCard
                    label="Compliance Score"
                    value={`${systemHealth.complianceScore}%`}
                    icon={<HiOutlineShieldCheck className="h-4 w-4" />}
                    accent="green"
                    subtitle="Audit readiness"
                />
                <StatusCard
                    label="Pending Approvals"
                    value={systemHealth.pendingApprovals}
                    icon={<HiOutlineClipboardDocumentList className="h-4 w-4" />}
                    accent="amber"
                    subtitle="Awaiting action"
                />
                <StatusCard
                    label="Active POs"
                    value={systemHealth.activePurchaseOrders}
                    icon={<HiOutlineExclamationTriangle className="h-4 w-4" />}
                    accent="navy"
                    subtitle="Purchase orders"
                />
                <StatusCard
                    label="Rejected TXNs"
                    value={systemHealth.rejectedTransactions}
                    icon={<HiOutlineBoltSlash className="h-4 w-4" />}
                    accent="red"
                    subtitle="This month"
                />
            </div>
        </section>
    );
}

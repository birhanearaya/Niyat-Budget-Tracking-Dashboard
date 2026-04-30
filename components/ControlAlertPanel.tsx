"use client";

import { systemHealth, kpiData, formatCompact } from "@/lib/data";
import {
    HiOutlineExclamationTriangle,
    HiOutlineCheckCircle,
    HiOutlineClipboardDocumentList,
    HiOutlineClock,
    HiOutlineShieldCheck,
    HiOutlineXCircle,
} from "react-icons/hi2";

export default function ControlAlertPanel() {
    const riskColor =
        systemHealth.fiscalYearRisk === "Low"
            ? "text-emerald-600 bg-emerald-50"
            : systemHealth.fiscalYearRisk === "Moderate"
                ? "text-[#D4923A] bg-[#D4923A]/10"
                : "text-red-600 bg-red-50";

    const complianceColor =
        systemHealth.complianceScore >= 90
            ? "text-emerald-600"
            : systemHealth.complianceScore >= 70
                ? "text-[#D4923A]"
                : "text-red-600";

    return (
        <div className="surface-panel p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
                Control & Alert Panel
            </h3>
            <p className="text-sm text-gray-500 mb-5">
                Real-time system monitoring & fiscal compliance
            </p>

            <div className="space-y-3">
                {/* Alert Items */}
                <div className="flex items-center gap-3 rounded-lg bg-red-50/80 border border-red-100 px-4 py-3">
                    <HiOutlineExclamationTriangle className="h-5 w-5 text-red-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Budget Exceeded — Sector A</p>
                        <p className="text-xs text-gray-500">Education Bureau exceeded by ETB {formatCompact(12_500_000 - 8_200_000)}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-[#D4923A]/5 border border-[#D4923A]/20 px-4 py-3">
                    <HiOutlineClock className="h-5 w-5 text-[#D4923A] shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{systemHealth.pendingApprovals} Pending Approval Requests</p>
                        <p className="text-xs text-gray-500">Including {systemHealth.rejectedTransactions} payroll adjustment mismatches</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-[#D4923A]/5 border border-[#D4923A]/20 px-4 py-3">
                    <HiOutlineClipboardDocumentList className="h-5 w-5 text-[#D4923A] shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{systemHealth.activePurchaseOrders} Active Purchase Orders</p>
                        <p className="text-xs text-gray-500">Requiring fund reservation of ETB {formatCompact(kpiData.totalEncumbered)}</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2" />

                {/* Status Items */}
                <div className="flex items-center gap-3 px-4 py-2.5">
                    <HiOutlineShieldCheck className={`h-5 w-5 shrink-0 ${complianceColor}`} />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">System Compliant</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">{systemHealth.complianceScore}%</span>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5">
                    <div className={`flex h-5 w-5 items-center justify-center rounded shrink-0 ${riskColor}`}>
                        <HiOutlineExclamationTriangle className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Fiscal Year Status</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${riskColor}`}>
                        {systemHealth.fiscalYearRisk}
                    </span>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5">
                    <HiOutlineXCircle className="h-5 w-5 text-red-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Rejected Transactions</p>
                    </div>
                    <span className="text-sm font-bold text-red-500">{systemHealth.rejectedTransactions}</span>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5">
                    <HiOutlineCheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Monthly TXN Volume</p>
                    </div>
                    <span className="text-sm font-bold text-[#1B2A4A]">{systemHealth.monthlyTransactionVolume}</span>
                </div>
            </div>
        </div>
    );
}

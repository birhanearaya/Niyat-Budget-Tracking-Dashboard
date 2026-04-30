"use client";

import { alertsData, formatETB } from "@/lib/data";
import {
    HiOutlineExclamationTriangle,
    HiOutlineShieldExclamation,
} from "react-icons/hi2";

export default function AlertCenter() {
    const hardStops = alertsData.filter((a) => a.type === "hard-stop");
    const compatibilityWarnings = alertsData.filter(
        (a) => a.type === "compatibility"
    );

    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    Alert Center &amp; Validation Engine
                </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Compact List for Hard Stops */}
                <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                    <div className="flex items-center justify-between bg-[#fef9e7] px-4 py-3 border-b border-yellow-200">
                        <div className="flex items-center gap-2">
                            <HiOutlineExclamationTriangle className="h-5 w-5 text-[#D4923A]" />
                            <h3 className="text-sm font-semibold text-gray-900">Hard Stop Triggers</h3>
                        </div>
                        <span className="rounded-full bg-yellow-200/50 px-2.5 py-0.5 text-xs font-medium text-[#b8960a]">
                            {hardStops.length} Active
                        </span>
                    </div>
                    <div className="divide-y divide-gray-100 p-0">
                        {hardStops.map((alert) => (
                            <div key={alert.id} className="flex flex-col sm:flex-row gap-3 px-4 py-3 hover:bg-gray-50/50 transition-colors">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold text-red-600 truncate">{alert.title}</span>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap">{alert.timestamp}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 truncate mb-1" title={alert.description}>
                                        {alert.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs">
                                        <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-700">
                                            {alert.traceabilityId}
                                        </span>
                                        {alert.amount && (
                                            <span className="font-medium text-red-600">
                                                Req: ETB {formatETB(alert.amount)}
                                            </span>
                                        )}
                                        {alert.availableBalance !== undefined && (
                                            <span className="font-medium text-gray-500">
                                                Avail: ETB {formatETB(alert.availableBalance)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {hardStops.length === 0 && <div className="px-4 py-6 text-center text-sm text-gray-500">No hard stops.</div>}
                    </div>
                </div>

                {/* Compact List for Compatibility Warnings */}
                <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                    <div className="flex items-center justify-between bg-orange-50 px-4 py-3 border-b border-orange-200">
                        <div className="flex items-center gap-2">
                            <HiOutlineShieldExclamation className="h-5 w-5 text-orange-500" />
                            <h3 className="text-sm font-semibold text-gray-900">Code Compatibility Warnings</h3>
                        </div>
                        <span className="rounded-full bg-orange-200/50 px-2.5 py-0.5 text-xs font-medium text-orange-600">
                            {compatibilityWarnings.length} Active
                        </span>
                    </div>
                    <div className="divide-y divide-gray-100 p-0">
                        {compatibilityWarnings.map((alert) => (
                            <div key={alert.id} className="flex flex-col sm:flex-row gap-3 px-4 py-3 hover:bg-gray-50/50 transition-colors">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold text-orange-600 truncate">{alert.title}</span>
                                        <span className="text-[10px] text-gray-400 whitespace-nowrap">{alert.timestamp}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 truncate mb-1" title={alert.description}>
                                        {alert.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                                        <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-700">
                                            {alert.traceabilityId}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {compatibilityWarnings.length === 0 && <div className="px-4 py-6 text-center text-sm text-gray-500">No warnings.</div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

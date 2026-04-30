"use client";

import { subCityData, formatCompact } from "@/lib/data";

export default function SubCityBreakdown() {
    const maxAllocated = Math.max(...subCityData.map((d) => d.allocated));

    return (
        <div className="surface-panel p-6">
            <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-900">
                    Sub-City Budget Overview
                </h3>
                <p className="text-sm text-gray-500">
                    Allocation vs utilization across administrative sub-cities
                </p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-8 rounded-sm bg-[#1B2A4A]" />
                    <span className="text-xs text-gray-500">Utilized</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-8 rounded-sm bg-[#D4923A]/30" />
                    <span className="text-xs text-gray-500">Remaining</span>
                </div>
            </div>
            <div className="space-y-3">
                {subCityData.map((d) => {
                    const pctUtilized = (d.utilized / d.allocated) * 100;
                    const barWidth = (d.allocated / maxAllocated) * 100;

                    return (
                        <div key={d.subCity} className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-700 w-28 shrink-0 truncate">
                                {d.subCity}
                            </span>
                            <div className="flex-1 relative">
                                {/* Total allocated bar (background) */}
                                <div
                                    className="h-6 rounded bg-[#D4923A]/20 relative overflow-hidden"
                                    style={{ width: `${barWidth}%` }}
                                >
                                    {/* Utilized portion */}
                                    <div
                                        className="absolute inset-y-0 left-0 rounded-l bg-[#1B2A4A]"
                                        style={{ width: `${pctUtilized}%` }}
                                    />
                                </div>
                            </div>
                            <div className="text-right shrink-0 w-24">
                                <span className="text-xs font-bold text-[#1B2A4A]">
                                    {pctUtilized.toFixed(0)}%
                                </span>
                                <span className="text-xs text-gray-400 ml-1">
                                    ({formatCompact(d.utilized)})
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

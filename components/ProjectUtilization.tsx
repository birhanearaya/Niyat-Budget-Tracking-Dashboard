"use client";

import { projectUtilizationData, formatCompact } from "@/lib/data";

export default function ProjectUtilization() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-5">
                <h3 className="text-base font-semibold text-gray-900">
                    Budget Utilization by Project
                </h3>
                <p className="text-sm text-gray-500">
                    Spending progress against allocated project budgets
                </p>
            </div>
            <div className="space-y-4">
                {projectUtilizationData.map((p) => {
                    const pct = (p.spent / p.budget) * 100;
                    const isHigh = pct >= 80;
                    const isMid = pct >= 50 && pct < 80;

                    return (
                        <div key={p.project}>
                            <div className="mb-1.5 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">{p.project}</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-gray-400">
                                        ETB {formatCompact(p.spent)} / {formatCompact(p.budget)}
                                    </span>
                                    <span className={`text-xs font-bold min-w-[38px] text-right ${isHigh ? "text-[#1B2A4A]" : isMid ? "text-[#D4923A]" : "text-gray-500"
                                        }`}>
                                        {pct.toFixed(0)}%
                                    </span>
                                </div>
                            </div>
                            <div className="relative h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                                <div
                                    className={`absolute inset-y-0 left-0 rounded-full transition-all ${isHigh ? "bg-[#1B2A4A]" : isMid ? "bg-[#D4923A]" : "bg-[#D4923A]/50"
                                        }`}
                                    style={{ width: `${Math.min(pct, 100)}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

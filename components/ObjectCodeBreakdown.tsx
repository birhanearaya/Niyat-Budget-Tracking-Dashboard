"use client";

import { objectCodeExpenditure, formatCompact, formatETB } from "@/lib/data";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

const COLORS = ["#1B2A4A", "#D4923A", "#4A7BA8", "#D4923A80"];

export default function ObjectCodeBreakdown() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900">
                    Spend by Object Code
                </h3>
                <p className="text-sm text-gray-500">
                    Spending distribution across budget categories
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* Donut Chart */}
                <div className="h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={objectCodeExpenditure}
                                dataKey="amount"
                                nameKey="code"
                                innerRadius={55}
                                outerRadius={90}
                                paddingAngle={3}
                            >
                                {objectCodeExpenditure.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => `ETB ${formatETB(Number(value ?? 0))}`}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend with bars */}
                <div className="space-y-3">
                    {objectCodeExpenditure.map((item, i) => (
                        <div key={item.code}>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-3 w-3 rounded-sm"
                                        style={{ backgroundColor: COLORS[i] }}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{item.code}</span>
                                </div>
                                <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                            </div>
                            <div className="relative h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 rounded-full"
                                    style={{
                                        width: `${item.percentage}%`,
                                        backgroundColor: COLORS[i],
                                    }}
                                />
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5">
                                ETB {formatCompact(item.amount)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

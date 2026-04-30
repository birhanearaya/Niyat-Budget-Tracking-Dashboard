"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { formatCompact, formatETB } from "@/lib/data";

// Extracted from original data but broken down into the 3 budget types
export const sectorBudgetTypeData = [
    { sector: "Education", capital: 220000000, recurrent: 350000000, contingency: 30000000 },
    { sector: "Health Bureau", capital: 180000000, recurrent: 280000000, contingency: 20000000 },
    { sector: "Roads ", capital: 450000000, recurrent: 90000000, contingency: 10000000 },
    { sector: "Water & Energy", capital: 310000000, recurrent: 120000000, contingency: 20000000 },
    { sector: "Agriculture", capital: 80000000, recurrent: 110000000, contingency: 10000000 },
    { sector: "Transport", capital: 250000000, recurrent: 85000000, contingency: 15000000 },
];

export default function SectorBudgetTypeBreakdown() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Budget Types by Sector
                </h3>
                <p className="text-sm text-gray-500">
                    Distribution of Capital, Recurrent, and Contingency budgets across bureaus
                </p>
            </div>
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={sectorBudgetTypeData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                        <XAxis
                            dataKey="sector"
                            tick={{ fontSize: 11, fill: "#6b7280" }}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tickLine={false}
                        />
                        <YAxis
                            tickFormatter={(v: number) => formatCompact(v)}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={false}
                            tickLine={false}
                            width={56}
                        />
                        <Tooltip
                            formatter={(value) => `ETB ${formatETB(Number(value ?? 0))}`}
                            cursor={{ fill: "#f9fafb" }}
                            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
                        />
                        <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: 12, paddingBottom: 8 }} />
                        <Bar
                            dataKey="capital"
                            name="Capital Budget"
                            stackId="a"
                            fill="#1B2A4A"
                            barSize={32}
                        />
                        <Bar
                            dataKey="recurrent"
                            name="Recurrent Budget"
                            stackId="a"
                            fill="#D4923A"
                        />
                        <Bar
                            dataKey="contingency"
                            name="Contingency Budget"
                            stackId="a"
                            fill="#e5e7eb"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

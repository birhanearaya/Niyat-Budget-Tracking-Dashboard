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
import { subCityData, formatCompact, formatETB } from "@/lib/data";

export default function PlanVsExecutionSubCity() {
    // Transform data to Plan vs Executed
    const chartData = subCityData.map((d) => ({
        name: d.subCity,
        planned: d.allocated,
        executed: d.utilized,
    }));

    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Plan vs Execution by Sub-City
                </h3>
                <p className="text-sm text-gray-500">
                    Comparing planned budget against actual spending regionally
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                        <XAxis
                            dataKey="name"
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
                        <Legend verticalAlign="top" align="right" iconType="square" wrapperStyle={{ fontSize: 12, paddingBottom: 8 }} />
                        <Bar
                            dataKey="planned"
                            name="Planned Budget"
                            fill="#1B2A4A"
                            radius={[4, 4, 0, 0]}
                            barSize={24}
                        />
                        <Bar
                            dataKey="executed"
                            name="Executed (Spent)"
                            fill="#D4923A"
                            radius={[4, 4, 0, 0]}
                            barSize={24}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

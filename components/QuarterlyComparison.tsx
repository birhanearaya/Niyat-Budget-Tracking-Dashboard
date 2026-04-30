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
    Line,
    ComposedChart,
} from "recharts";
import { quarterlyData, formatCompact, formatETB } from "@/lib/data";

export default function QuarterlyComparison() {
    const chartData = quarterlyData.map((q) => ({
        ...q,
        utilization: ((q.expended + q.encumbered) / q.allocated * 100),
    }));

    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Quarterly Performance
                </h3>
                <p className="text-sm text-gray-500">
                    Budget execution by quarter with target overlay
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={chartData}
                        margin={{ top: 10, right: 16, left: 4, bottom: 0 }}
                    >
                        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="quarter"
                            tickLine={false}
                            axisLine={{ stroke: "#dbe3ef" }}
                            tick={{ fontSize: 13, fontWeight: 600, fill: "#1B2A4A" }}
                        />
                        <YAxis
                            yAxisId="amount"
                            tickFormatter={(v: number) => formatCompact(v)}
                            tickLine={false}
                            axisLine={false}
                            width={56}
                        />
                        <YAxis
                            yAxisId="rate"
                            orientation="right"
                            tickFormatter={(v: number) => `${v.toFixed(0)}%`}
                            tickLine={false}
                            axisLine={false}
                            width={44}
                            domain={[0, 100]}
                        />
                        <Tooltip
                            formatter={(value, name) =>
                                name === "Execution %"
                                    ? `${Number(value ?? 0).toFixed(1)}%`
                                    : `ETB ${formatETB(Number(value ?? 0))}`
                            }
                        />
                        <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: 12 }} />
                        <Bar
                            yAxisId="amount"
                            dataKey="expended"
                            name="Spent"
                            fill="#1B2A4A"
                            radius={[6, 6, 0, 0]}
                            barSize={22}
                        />
                        <Bar
                            yAxisId="amount"
                            dataKey="encumbered"
                            name="Reserved"
                            fill="#D4923A"
                            radius={[6, 6, 0, 0]}
                            barSize={22}
                        />
                        <Line
                            yAxisId="amount"
                            type="monotone"
                            dataKey="target"
                            name="Target"
                            stroke="#ef4444"
                            strokeWidth={2}
                            strokeDasharray="6 3"
                            dot={false}
                        />
                        <Line
                            yAxisId="rate"
                            type="monotone"
                            dataKey="utilization"
                            name="Execution %"
                            stroke="#1B2A4A"
                            strokeWidth={2}
                            dot={{ fill: "#1B2A4A", r: 4 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

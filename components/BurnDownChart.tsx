"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { burnDownData, formatCompact, formatETB } from "@/lib/data";

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;
    return (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="mb-1 text-sm font-medium text-gray-900">{label}</p>
            {payload.map((entry: any) => (
                <p key={entry.dataKey} className="text-xs text-gray-600">
                    <span
                        className="mr-2 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    {entry.name}: ETB {formatETB(entry.value)}
                </p>
            ))}
        </div>
    );
};

export default function BurnDownChart() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-base font-semibold text-gray-900">
                        Budget Burn-Down
                    </h3>
                    <p className="text-sm text-gray-500">
                        Cumulative encumbrance &amp; expenditure — FY 2025/26
                    </p>
                </div>
            </div>
            <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={burnDownData}
                        margin={{ top: 4, right: 8, left: 8, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f3f4f6"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tickLine={false}
                        />
                        <YAxis
                            tickFormatter={(v: number) => formatCompact(v)}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={false}
                            tickLine={false}
                            width={60}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="square"
                            wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="expended"
                            name="Expended"
                            stackId="1"
                            fill="#0645ba"
                            fillOpacity={0.85}
                            stroke="#0645ba"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="encumbered"
                            name="Encumbered"
                            stackId="1"
                            fill="#0645ba"
                            fillOpacity={0.2}
                            stroke="#0645ba"
                            strokeWidth={1}
                            strokeDasharray="4 2"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

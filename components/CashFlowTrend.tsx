"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
} from "recharts";
import { cashFlowData, formatCompact, formatETB } from "@/lib/data";

type ChartTooltipEntry = {
    dataKey: string;
    color: string;
    name: string;
    value: number;
};

interface CustomTooltipProps {
    active?: boolean;
    payload?: ChartTooltipEntry[];
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (!active || !payload) return null;
    return (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="mb-1 text-sm font-medium text-gray-900">{label}</p>
            {payload.map((entry) => (
                <p key={entry.dataKey} className="text-xs text-gray-600">
                    <span
                        className="mr-2 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    {entry.name}: ETB {formatETB(entry.value)}
                </p>
            ))}
            {payload.length === 2 && (
                <p className="mt-1 border-t border-gray-100 pt-1 text-xs font-medium text-gray-700">
                    Net: ETB {formatETB(payload[0].value - payload[1].value)}
                </p>
            )}
        </div>
    );
};

export default function CashFlowTrend() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Cash Flow Trend
                </h3>
                <p className="text-sm text-gray-500">
                    Monthly inflows vs outflows — FY 2025/26
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={cashFlowData}
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
                            iconType="circle"
                            wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
                        />
                        <ReferenceLine y={0} stroke="#e5e7eb" />
                        <Line
                            type="monotone"
                            dataKey="inflows"
                            name="Inflows"
                            stroke="#1B2A4A"
                            strokeWidth={2.5}
                            dot={{ fill: "#1B2A4A", r: 3 }}
                            activeDot={{ r: 5, fill: "#1B2A4A" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="outflows"
                            name="Outflows"
                            stroke="#D4923A"
                            strokeWidth={2.5}
                            dot={{ fill: "#D4923A", r: 3 }}
                            activeDot={{ r: 5, fill: "#D4923A" }}
                            strokeDasharray="6 3"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { monthlyExpenditureByCategory, formatCompact, formatETB } from "@/lib/data";

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
        </div>
    );
};

export default function RecurrentVsCapital() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Recurrent vs Capital Expenditure
                </h3>
                <p className="text-sm text-gray-500">
                    Cumulative spending by expenditure type — FY 2025/26
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={monthlyExpenditureByCategory}
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
                            dataKey="recurrent"
                            name="Recurrent"
                            stackId="1"
                            fill="#1B2A4A"
                            fillOpacity={0.8}
                            stroke="#1B2A4A"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="capital"
                            name="Capital"
                            stackId="1"
                            fill="#D4923A"
                            fillOpacity={0.6}
                            stroke="#D4923A"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

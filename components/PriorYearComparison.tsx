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
import { priorYearComparison, formatCompact, formatETB } from "@/lib/data";

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
    const current = payload.find(p => p.dataKey === "currentYear");
    const prior = payload.find(p => p.dataKey === "priorYear");
    const change = current && prior && prior.value > 0
        ? ((current.value - prior.value) / prior.value * 100)
        : 0;

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
            <p className={`mt-1 border-t border-gray-100 pt-1 text-xs font-medium ${change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                {change >= 0 ? "↑" : "↓"} {Math.abs(change).toFixed(1)}% YoY
            </p>
        </div>
    );
};

export default function PriorYearComparison() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Year-over-Year Comparison
                </h3>
                <p className="text-sm text-gray-500">
                    Current fiscal year vs prior year allocation by sector
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={priorYearComparison}
                        margin={{ top: 4, right: 24, left: 8, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f3f4f6"
                            horizontal={true}
                            vertical={false}
                        />
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
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="square"
                            wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
                        />
                        <Bar
                            dataKey="currentYear"
                            name="EFY 2018 (Current)"
                            fill="#1B2A4A"
                            radius={[6, 6, 0, 0]}
                            barSize={20}
                        />
                        <Bar
                            dataKey="priorYear"
                            name="EFY 2017 (Prior)"
                            fill="#D4923A"
                            radius={[6, 6, 0, 0]}
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

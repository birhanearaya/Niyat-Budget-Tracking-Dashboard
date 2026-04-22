"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { sectorData, formatCompact, formatETB } from "@/lib/data";

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

export default function SectorBarChart() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Sector-wise Distribution
                </h3>
                <p className="text-sm text-gray-500">
                    Top 5 sectors — utilized vs available budget
                </p>
            </div>
            <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={sectorData}
                        layout="vertical"
                        margin={{ top: 4, right: 24, left: 8, bottom: 0 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f3f4f6"
                            horizontal={false}
                        />
                        <XAxis
                            type="number"
                            tickFormatter={(v: number) => formatCompact(v)}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tickLine={false}
                        />
                        <YAxis
                            type="category"
                            dataKey="sector"
                            tick={{ fontSize: 12, fill: "#374151" }}
                            axisLine={false}
                            tickLine={false}
                            width={130}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="top"
                            align="right"
                            iconType="square"
                            wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
                        />
                        <Bar
                            dataKey="utilized"
                            name="Utilized"
                            fill="#0645ba"
                            radius={[0, 4, 4, 0]}
                            barSize={18}
                        />
                        <Bar
                            dataKey="available"
                            name="Available"
                            fill="#bfdbfe"
                            radius={[0, 4, 4, 0]}
                            barSize={18}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

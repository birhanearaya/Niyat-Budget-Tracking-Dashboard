"use client";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ComposedChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Bar,
    Line,
} from "recharts";
import { burnDownData, kpiData, formatCompact, formatETB } from "@/lib/data";

const utilizationData = [
    { name: "Expended", value: kpiData.totalExpended, color: "#2563eb" },
    { name: "Encumbered", value: kpiData.totalEncumbered, color: "#60a5fa" },
    { name: "Available", value: kpiData.availableBalance, color: "#bfdbfe" },
];

const monthlyComparison = burnDownData.map((month) => ({
    month: month.month,
    expended: month.expended,
    encumbered: month.encumbered,
    combined: month.expended + month.encumbered,
    utilizationRate: ((month.expended + month.encumbered) / kpiData.totalAllocated) * 100,
}));

export default function ComparativeCharts() {
    return (
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="surface-panel p-5 xl:col-span-1">
                <h3 className="text-base font-semibold text-slate-900">Budget Composition</h3>
                <p className="mb-4 text-sm text-slate-500">Current utilization split across allocation states</p>
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={utilizationData} dataKey="value" innerRadius={62} outerRadius={94} paddingAngle={2}>
                                {utilizationData.map((entry) => (
                                    <Cell key={entry.name} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value: number) => `ETB ${formatETB(value)}`} />
                            <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="surface-panel p-5 xl:col-span-2">
                <h3 className="text-base font-semibold text-slate-900">Monthly Comparative Trend</h3>
                <p className="mb-4 text-sm text-slate-500">Expended vs encumbered with cumulative utilization rate</p>
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={monthlyComparison} margin={{ top: 10, right: 16, left: 4, bottom: 0 }}>
                            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={{ stroke: "#dbe3ef" }} />
                            <YAxis
                                yAxisId="amount"
                                tickFormatter={(v: number) => formatCompact(v)}
                                tickLine={false}
                                axisLine={false}
                                width={56}
                            />
                            <YAxis yAxisId="rate" orientation="right" tickFormatter={(v: number) => `${v.toFixed(0)}%`} tickLine={false} axisLine={false} width={44} />
                            <Tooltip
                                formatter={(value: number, name: string) =>
                                    name === "Utilization Rate" ? `${value.toFixed(2)}%` : `ETB ${formatETB(value)}`
                                }
                            />
                            <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: 12 }} />
                            <Bar yAxisId="amount" dataKey="expended" name="Expended" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={18} />
                            <Bar yAxisId="amount" dataKey="encumbered" name="Encumbered" fill="#93c5fd" radius={[6, 6, 0, 0]} barSize={18} />
                            <Line yAxisId="rate" dataKey="utilizationRate" name="Utilization Rate" stroke="#0f172a" strokeWidth={2} dot={false} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
}

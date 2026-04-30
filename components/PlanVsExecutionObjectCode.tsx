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

// Since objectCodeExpenditure only had amounts, we create a specialized array for Plan vs Execution comparison
const objectCodePlanVsExecution = [
    { code: "6111 (Salaries)", planned: 600_000_000, executed: 515_000_000 },
    { code: "6211 (Supplies)", planned: 400_000_000, executed: 322_000_000 },
    { code: "6231 (Maintenance)", planned: 300_000_000, executed: 257_400_000 },
    { code: "6311 (Grants)", planned: 450_000_000, executed: 193_000_000 },
];

export default function PlanVsExecutionObjectCode() {
    return (
        <div className="surface-panel p-6">
            <div className="mb-6">
                <h3 className="text-base font-semibold text-gray-900">
                    Plan vs Execution by Spending Category
                </h3>
                <p className="text-sm text-gray-500">
                    Comparing planned budget against actual spending per object code
                </p>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={objectCodePlanVsExecution}
                        layout="vertical"
                        margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
                        <XAxis
                            type="number"
                            tickFormatter={(v: number) => formatCompact(v)}
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            type="category"
                            dataKey="code"
                            tick={{ fontSize: 12, fill: "#1B2A4A", fontWeight: 500 }}
                            axisLine={{ stroke: "#e5e7eb" }}
                            tickLine={false}
                            width={110}
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
                            radius={[0, 4, 4, 0]}
                            barSize={16}
                        />
                        <Bar
                            dataKey="executed"
                            name="Executed (Spent)"
                            fill="#D4923A"
                            radius={[0, 4, 4, 0]}
                            barSize={16}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

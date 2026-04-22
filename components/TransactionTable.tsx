"use client";

import { useState } from "react";
import { transactionsData, formatETB, type Transaction } from "@/lib/data";
import {
    HiOutlineMagnifyingGlass,
    HiOutlineEye,
    HiOutlineEyeSlash,
} from "react-icons/hi2";

const ALL_COLUMNS = [
    { key: "date", label: "Date" },
    { key: "traceabilityId", label: "Traceability ID" },
    { key: "department", label: "Department" },
    { key: "amount", label: "Amount (ETB)" },
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
] as const;

type ColKey = (typeof ALL_COLUMNS)[number]["key"];

const statusColors: Record<Transaction["status"], string> = {
    Approved: "bg-emerald-50 text-emerald-700",
    Encumbered: "bg-gray-100 text-[#0645ba]",
    Pending: "bg-amber-50 text-amber-700",
    Rejected: "bg-red-50 text-red-700",
    Settled: "bg-blue-50 text-blue-800",
    Reversed: "bg-gray-100 text-gray-500",
};

const typeColors: Record<Transaction["type"], string> = {
    Allocation: "text-emerald-700",
    Encumbrance: "text-[#0645ba]",
    Reversal: "text-gray-500",
    Expenditure: "text-blue-800",
};

export default function TransactionTable() {
    const [search, setSearch] = useState("");
    const [visibleCols, setVisibleCols] = useState<Set<ColKey>>(
        new Set(ALL_COLUMNS.map((c) => c.key))
    );
    const [showColMenu, setShowColMenu] = useState(false);

    const toggleColumn = (key: ColKey) => {
        setVisibleCols((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                if (next.size > 2) next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    const filtered = transactionsData.filter((t) => {
        if (!search) return true;
        const q = search.toLowerCase();
        return (
            t.traceabilityId.includes(q) ||
            t.department.toLowerCase().includes(q) ||
            t.type.toLowerCase().includes(q) ||
            t.status.toLowerCase().includes(q) ||
            t.id.toLowerCase().includes(q)
        );
    });

    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    Transaction &amp; Encumbrance Ledger
                </h2>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 px-5 py-3">
                    {/* Search */}
                    <div className="relative flex-1">
                        <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by ID, department, type, status…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full max-w-sm rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-[#0645ba] focus:outline-none focus:ring-1 focus:ring-[#0645ba]"
                        />
                    </div>

                    {/* Column toggle */}
                    <div className="relative">
                        <button
                            onClick={() => setShowColMenu(!showColMenu)}
                            className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                        >
                            {showColMenu ? (
                                <HiOutlineEyeSlash className="h-4 w-4" />
                            ) : (
                                <HiOutlineEye className="h-4 w-4" />
                            )}
                            Columns
                        </button>
                        {showColMenu && (
                            <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-sm">
                                {ALL_COLUMNS.map((col) => (
                                    <label
                                        key={col.key}
                                        className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleCols.has(col.key)}
                                            onChange={() => toggleColumn(col.key)}
                                            className="h-3.5 w-3.5 rounded border-gray-300 text-[#0645ba] focus:ring-[#0645ba]"
                                        />
                                        {col.label}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/60">
                                {ALL_COLUMNS.filter((c) => visibleCols.has(c.key)).map(
                                    (col) => (
                                        <th
                                            key={col.key}
                                            className="whitespace-nowrap px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500"
                                        >
                                            {col.label}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filtered.map((txn) => (
                                <tr
                                    key={txn.id}
                                    className="transition-colors hover:bg-gray-50/50"
                                >
                                    {visibleCols.has("date") && (
                                        <td className="whitespace-nowrap px-5 py-3 text-gray-700">
                                            {txn.date}
                                        </td>
                                    )}
                                    {visibleCols.has("traceabilityId") && (
                                        <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-gray-800">
                                            {txn.traceabilityId}
                                        </td>
                                    )}
                                    {visibleCols.has("department") && (
                                        <td className="px-5 py-3 text-gray-700">
                                            {txn.department}
                                        </td>
                                    )}
                                    {visibleCols.has("amount") && (
                                        <td className="whitespace-nowrap px-5 py-3 font-medium text-gray-900">
                                            {formatETB(txn.amount)}
                                        </td>
                                    )}
                                    {visibleCols.has("type") && (
                                        <td className="whitespace-nowrap px-5 py-3">
                                            <span className={`font-medium ${typeColors[txn.type]}`}>
                                                {txn.type}
                                            </span>
                                        </td>
                                    )}
                                    {visibleCols.has("status") && (
                                        <td className="whitespace-nowrap px-5 py-3">
                                            <span
                                                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[txn.status]
                                                    }`}
                                            >
                                                {txn.status}
                                            </span>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={visibleCols.size}
                                        className="px-5 py-8 text-center text-sm text-gray-400"
                                    >
                                        No transactions match your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 px-5 py-3 text-xs text-gray-400">
                    Showing {filtered.length} of {transactionsData.length} transactions
                </div>
            </div>
        </section>
    );
}

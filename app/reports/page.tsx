"use client";

import { useState } from "react";
import { HiOutlineDocumentText, HiOutlineChartBar, HiOutlineArrowDownTray, HiOutlineArrowsRightLeft, HiOutlineCheckCircle } from "react-icons/hi2";
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Button } from "flowbite-react";

type ReportTab = "budget_summary" | "trial_balance" | "transaction_detail" | "utilization";

export default function ReportsPage() {
    const [activeTab, setActiveTab] = useState<ReportTab>("budget_summary");

    return (
        <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 scrollbar-thin md:px-6 md:pb-6">
            <main className="surface-panel space-y-0 min-h-full overflow-hidden flex flex-col">
                <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">System Analytics & IBEX Reports</h2>
                        <p className="text-sm text-gray-500 mt-1">Consolidated reports aligned with Ethiopian federal and regional accounting structures.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button color="light" className="bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-gray-700 items-center">
                            <HiOutlineArrowDownTray className="h-4 w-4 mr-2" />
                            Export PDF
                        </Button>
                    </div>
                </div>

                <div className="border-b border-gray-200 px-4 sm:px-6 mt-2">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {[
                            { id: "budget_summary", name: "Adjusted Budget Summary", icon: HiOutlineChartBar },
                            { id: "trial_balance", name: "Monthly Trial Balance", icon: HiOutlineArrowsRightLeft },
                            { id: "transaction_detail", name: "Transaction Detail", icon: HiOutlineDocumentText },
                            { id: "utilization", name: "Budget Execution", icon: HiOutlineCheckCircle },
                        ].map((tab) => {
                            const isActive = activeTab === tab.id;
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as ReportTab)}
                                    className={`
                                        group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium
                                        ${isActive ? 'border-[#1B2A4A] text-[#1B2A4A]' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                                    `}
                                >
                                    <Icon className={`mr-2 h-5 w-5 ${isActive ? 'text-[#1B2A4A]' : 'text-gray-400 group-hover:text-gray-500'}`} />
                                    {tab.name}
                                </button>
                            )
                        })}
                    </nav>
                </div>

                <div className="flex-1 overflow-x-auto p-0 bg-gray-50/30">
                    {activeTab === "budget_summary" && <BudgetSummaryView />}
                    {activeTab === "trial_balance" && <TrialBalanceView />}
                    {activeTab === "transaction_detail" && <TransactionDetailView />}
                    {activeTab === "utilization" && <BudgetUtilizationView />}
                </div>
            </main>
        </div>
    );
}

// ----------------- Sub Views -----------------

function BudgetSummaryView() {
    const mockData = [
        { code: "111-01-01", name: "MoFED Treasury", approved: 500000000, adjusted: 520000000, recurrent: 300000000, capital: 220000000 },
        { code: "122", name: "Addis Ababa BoFED", approved: 200000000, adjusted: 195000000, recurrent: 120000000, capital: 75000000 },
        { code: "341", name: "Health Bureau", approved: 75000000, adjusted: 85000000, recurrent: 50000000, capital: 35000000 },
        { code: "127", name: "Education Bureau", approved: 120000000, adjusted: 120000000, recurrent: 90000000, capital: 30000000 },
    ];
    return (
        <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Summary – Adjusted Budget by Institution</h3>
            <div className="shadow-sm border border-gray-100 rounded-lg overflow-hidden">
                <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                    <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                        <TableHeadCell>Institution Code</TableHeadCell>
                        <TableHeadCell>Budgetary Institution</TableHeadCell>
                        <TableHeadCell className="text-right">Approved Limit</TableHeadCell>
                        <TableHeadCell className="text-right">Adjusted Ceilings</TableHeadCell>
                        <TableHeadCell className="text-right">Recurrent</TableHeadCell>
                        <TableHeadCell className="text-right">Capital</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y divide-gray-100">
                        {mockData.map((row) => (
                            <TableRow key={row.code} className="bg-white">
                                <TableCell className="font-mono text-xs text-gray-500">{row.code}</TableCell>
                                <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
                                <TableCell className="text-right text-gray-500">{row.approved.toLocaleString()}</TableCell>
                                <TableCell className="text-right font-medium text-[#1B2A4A]">{row.adjusted.toLocaleString()}</TableCell>
                                <TableCell className="text-right text-gray-500">{row.recurrent.toLocaleString()}</TableCell>
                                <TableCell className="text-right text-gray-500">{row.capital.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function TrialBalanceView() {
    const mockData = [
        { account: "4000", desc: "Cash on Hand", debit: 4500000, credit: 0 },
        { account: "4100", desc: "Receivables", debit: 120000, credit: 0 },
        { account: "5000", desc: "Payables", debit: 0, credit: 3200000 },
        { account: "6000", desc: "Net Equity", debit: 0, credit: 1420000 },
    ];
    const totalDebit = mockData.reduce((acc, r) => acc + r.debit, 0);
    const totalCredit = mockData.reduce((acc, r) => acc + r.credit, 0);
    return (
        <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Trial Balance</h3>
            <div className="shadow-sm border border-gray-100 rounded-lg overflow-hidden">
                <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                    <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                        <TableHeadCell>GL Account</TableHeadCell>
                        <TableHeadCell>Description</TableHeadCell>
                        <TableHeadCell className="text-right">Debit (ETB)</TableHeadCell>
                        <TableHeadCell className="text-right">Credit (ETB)</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y divide-gray-100">
                        {mockData.map((row) => (
                            <TableRow key={row.account} className="bg-white">
                                <TableCell className="font-mono text-xs text-gray-500">{row.account}</TableCell>
                                <TableCell className="font-medium text-gray-900">{row.desc}</TableCell>
                                <TableCell className="text-right text-emerald-600">{row.debit ? row.debit.toLocaleString() : "-"}</TableCell>
                                <TableCell className="text-right text-rose-600">{row.credit ? row.credit.toLocaleString() : "-"}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow className="bg-gray-50 font-bold border-t-2 border-gray-200">
                            <TableCell colSpan={2} className="text-right">TOTAL</TableCell>
                            <TableCell className="text-right text-emerald-700">{totalDebit.toLocaleString()}</TableCell>
                            <TableCell className="text-right text-rose-700">{totalCredit.toLocaleString()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function TransactionDetailView() {
    const mockData = [
        { txId: "TX-99012", date: "2026-04-10", biCode: "111-01", type: "Disbursement", amount: 250000, status: "Posted" },
        { txId: "TX-99013", date: "2026-04-12", biCode: "341", type: "Budget Transfer", amount: 50000, status: "Posted" },
        { txId: "TX-99014", date: "2026-04-15", biCode: "122", type: "Settlement", amount: -15000, status: "Reversed" },
    ];
    return (
        <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction Detail Register</h3>
            <div className="shadow-sm border border-gray-100 rounded-lg overflow-hidden">
                <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                    <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                        <TableHeadCell>Txn ID</TableHeadCell>
                        <TableHeadCell>Date</TableHeadCell>
                        <TableHeadCell>BI Code</TableHeadCell>
                        <TableHeadCell>Transaction Type</TableHeadCell>
                        <TableHeadCell className="text-right">Amount (ETB)</TableHeadCell>
                        <TableHeadCell className="text-center">Status</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y divide-gray-100">
                        {mockData.map((row) => (
                            <TableRow key={row.txId} className="bg-white">
                                <TableCell className="font-mono text-xs text-blue-600 hover:underline cursor-pointer">{row.txId}</TableCell>
                                <TableCell className="text-gray-500">{row.date}</TableCell>
                                <TableCell className="font-mono text-xs text-gray-500">{row.biCode}</TableCell>
                                <TableCell className="text-gray-700">{row.type}</TableCell>
                                <TableCell className="text-right font-medium text-gray-900">{row.amount.toLocaleString()}</TableCell>
                                <TableCell className="text-center">
                                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${row.status === 'Posted' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {row.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function BudgetUtilizationView() {
    const mockData = [
        { program: "Maternal Care Expansion", allocated: 24000000, committed: 12000000, utilized: 8000000 },
        { program: "Primary School Upgrades", allocated: 38500000, committed: 38500000, utilized: 35000000 },
        { program: "Road Maintenance Network", allocated: 156000000, committed: 90000000, utilized: 50000000 },
    ];
    return (
        <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Execution & Commitment Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.map((row, idx) => {
                    const commitPercent = (row.committed / row.allocated) * 100;
                    const utilizePercent = (row.utilized / row.allocated) * 100;
                    return (
                        <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
                            <h4 className="font-semibold text-gray-900">{row.program}</h4>

                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Ceiling Limit</p>
                                    <p className="font-medium text-gray-800">ETB {row.allocated.toLocaleString()}</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-gray-500">Committed (Reserved)</span>
                                    <span className="font-medium text-[#1B2A4A]">{commitPercent.toFixed(0)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-[#1B2A4A] h-2 rounded-full" style={{ width: `${commitPercent}%` }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-gray-500">Actual Executed</span>
                                    <span className="font-medium text-emerald-600">{utilizePercent.toFixed(0)}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${utilizePercent}%` }}></div>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}


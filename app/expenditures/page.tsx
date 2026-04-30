"use client";

import { HiOutlineDocumentArrowDown, HiOutlineEye } from "react-icons/hi2";
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Button } from "flowbite-react";

const expendituresData = [
    { id: "EXP-8902", date: "Apr 20, 2026", refAuth: "AUTH-0091", payee: "Ethio Telecom", amount: 150000, category: "Utilities", status: "Cleared" },
    { id: "EXP-8903", date: "Apr 21, 2026", refAuth: "CTR-881", payee: "Salini Impregilo", amount: 4200000, category: "Capital Outlay", status: "Cleared" },
    { id: "EXP-8904", date: "Apr 21, 2026", refAuth: "AUTH-0094", payee: "Minister of Water", amount: 55000, category: "Grants", status: "Processing" },
    { id: "EXP-8905", date: "Apr 22, 2026", refAuth: "PO-39401", payee: "MedTech Supplies Ltd", amount: 450000, category: "Operating Expense", status: "Issued" },
];

export default function ExpendituresPage() {
    return (
        <>
            <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 scrollbar-thin md:px-6 md:pb-6">
                <main className="surface-panel space-y-0 min-h-full overflow-hidden flex flex-col">

                    <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Historical Disbursements & Expenditures</h2>
                            <p className="text-sm text-gray-500 mt-1">Unified view of fully approved payments leaving the general ledger.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button color="light" className="bg-white border-gray-200 enabled:hover:bg-gray-50 rounded-lg flex items-center">
                                <HiOutlineDocumentArrowDown className="h-4 w-4 mr-2" />
                                Export CSV Layout
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-x-auto p-0">
                        <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                            <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Tx ID</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Execution Date</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Ref Authorization</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Payee / Vendor</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Economic Category</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Value (ETB)</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-center">Status</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Receipt</TableHeadCell>
                            </TableHead>
                            <TableBody className="divide-y divide-gray-100">
                                {expendituresData.map((row) => (
                                    <TableRow key={row.id} className="bg-white hover:bg-gray-50/50">
                                        <TableCell className="font-mono text-xs text-gray-900 font-semibold">{row.id}</TableCell>
                                        <TableCell className="text-gray-500 text-sm">{row.date}</TableCell>
                                        <TableCell className="font-mono text-xs text-[#1B2A4A] cursor-pointer hover:underline">{row.refAuth}</TableCell>
                                        <TableCell className="font-medium text-gray-900">{row.payee}</TableCell>
                                        <TableCell className="text-gray-500">{row.category}</TableCell>
                                        <TableCell className="text-right font-medium text-gray-900">{row.amount.toLocaleString()}</TableCell>
                                        <TableCell className="text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${row.status === 'Cleared' ? 'bg-green-100 text-green-700' :
                                                row.status === 'Issued' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <button className="text-gray-400 hover:text-gray-900 flex items-center justify-end gap-1 transition ml-auto">
                                                <HiOutlineEye className="h-[18px] w-[18px]" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </>
    );
}

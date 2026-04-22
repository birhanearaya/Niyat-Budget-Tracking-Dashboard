"use client";

import { useState } from "react";
import ControlBar from "@/components/ControlBar";
import { HiOutlineMagnifyingGlass, HiOutlineShieldCheck, HiOutlineXMark } from "react-icons/hi2";
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "flowbite-react";

interface EncumbranceRow {
    id: string;
    po: string;
    details: string;
    amount: number;
    sector: string;
    available: number;
    status: "Pending Approval" | "Rejected" | "Validated";
}

// Massive mock dataset for Encumbrances
const encumbranceData: EncumbranceRow[] = [
    { id: "ENC-2025-451", po: "PO-39401", details: "Medical Supplies Batch A", amount: 450000, sector: "Health Bureau", available: 1550000, status: "Pending Approval" },
    { id: "ENC-2025-452", po: "PO-39402", details: "School Desk Procurement", amount: 1200000, sector: "Education Bureau", available: 0, status: "Rejected" },
    { id: "ENC-2025-453", po: "CTR-881", details: "Asphalt Road Repair - Yeka", amount: 8400000, sector: "Infrastructure", available: 45000000, status: "Validated" },
    { id: "ENC-2025-454", po: "PO-39404", details: "IT Equipment for Revenue HQ", amount: 200000, sector: "Finance Bureau", available: 800000, status: "Pending Approval" },
];

export default function EncumbrancesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<EncumbranceRow | null>(null);

    const handleReview = (item: EncumbranceRow) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="z-40 pt-4 px-6 pb-2 shrink-0">
                <div className="surface-panel p-3">
                    <ControlBar />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
                <main className="surface-panel space-y-0 min-h-full overflow-hidden flex flex-col">

                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">Encumbrances & Commitments pending verification</h2>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Purchase Order / Ref ID..."
                                    className="w-72 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-[#0645ba] focus:border-[#0645ba]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-x-auto p-0">
                        <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                            <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Ref ID</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Purchase Order / Contract</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Sector Bureau</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Commitment Amount</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Available Allocation Left</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-center">Verification</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Actions</TableHeadCell>
                            </TableHead>
                            <TableBody className="divide-y divide-gray-100">
                                {encumbranceData.map((row) => (
                                    <TableRow key={row.id} className="bg-white">
                                        <TableCell className="font-mono text-xs text-gray-500">{row.id}</TableCell>
                                        <TableCell className="font-medium text-gray-900 flex flex-col">
                                            <span>{row.po}</span>
                                            <span className="text-xs text-gray-400 font-normal">{row.details}</span>
                                        </TableCell>
                                        <TableCell className="text-gray-500">{row.sector}</TableCell>
                                        <TableCell className="text-right font-medium text-gray-900">{row.amount.toLocaleString()}</TableCell>
                                        <TableCell className="text-right font-medium text-[#0645ba]">{row.available.toLocaleString()}</TableCell>
                                        <TableCell className="text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${row.status === 'Validated' ? 'bg-green-100 text-green-700' :
                                                row.status === 'Pending Approval' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {row.status === 'Pending Approval' ? (
                                                <button onClick={() => handleReview(row)} className="text-[#e0b700] hover:text-amber-600 flex items-center justify-end gap-1 font-semibold transition ml-auto">
                                                    Review Request
                                                </button>
                                            ) : (
                                                <button className="text-gray-400 flex items-center justify-end gap-1 font-medium transition cursor-not-allowed ml-auto">
                                                    Closed
                                                </button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="lg">
                <ModalHeader className="border-b border-gray-100 pb-4">
                    <span className="text-lg font-bold text-gray-900 block">Commitment Verification</span>
                    <span className="text-xs text-gray-500 font-normal">Reviewing request {selectedItem?.po} under {selectedItem?.id}</span>
                </ModalHeader>
                <ModalBody className="bg-gray-50/50">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <p className="text-xs text-gray-400 mb-1">Requested Encumbrance</p>
                                <p className="text-xl font-bold text-gray-900">ETB {selectedItem?.amount.toLocaleString()}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <p className="text-xs text-gray-400 mb-1">Remaining Valid Allocation</p>
                                <p className={`text-xl font-bold ${selectedItem?.available < selectedItem?.amount ? 'text-red-500' : 'text-[#0645ba]'}`}>
                                    ETB {selectedItem?.available.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {selectedItem?.available < selectedItem?.amount && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                                <HiOutlineXMark className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-semibold text-red-800">Hard Stop Warning Triggered</h4>
                                    <p className="text-xs text-red-600 mt-1">This encumbrance strictly violates the authorized budget ceiling algorithm. The system prohibits releasing funds beyond the set margin constraint.</p>
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Audit Memo & Override Justification</label>
                            <textarea
                                className="w-full resize-none p-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:ring-[#0645ba] focus:border-[#0645ba]"
                                rows={4}
                                placeholder="Log internal comments for standard operating procedures..."
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="border-t border-gray-100 flex justify-end gap-3 bg-white">
                    <Button color="failure" onClick={() => setIsModalOpen(false)} className="rounded-lg items-center gap-2 flex disabled:opacity-50">
                        <HiOutlineXMark className="h-4 w-4 mr-1" />
                        Reject
                    </Button>
                    <Button
                        onClick={() => setIsModalOpen(false)}
                        disabled={selectedItem?.available < selectedItem?.amount}
                        className="bg-green-600 enabled:hover:bg-green-700 rounded-lg items-center gap-2 flex"
                    >
                        <HiOutlineShieldCheck className="h-4 w-4 mr-1" />
                        Validate & Commit
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    );
}

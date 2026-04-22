"use client";

import { useState } from "react";
import ControlBar from "@/components/ControlBar";
import { HiOutlineMagnifyingGlass, HiOutlinePencilSquare, HiOutlineCheck, HiOutlineBanknotes } from "react-icons/hi2";
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Modal, ModalHeader, ModalBody, ModalFooter, Button, TextInput } from "flowbite-react";

interface AllocationRow {
    id: string;
    sector: string;
    subCity: string;
    program: string;
    allocated: number;
    unallocated: number;
    status: "Active" | "Warning" | "Depleted";
}

// Massive mock dataset for Allocations
const allocationData: AllocationRow[] = [
    { id: "A-2025-001", sector: "Health Bureau", subCity: "Addis Ketema", program: "Maternal Care Expansion", allocated: 24000000, unallocated: 1550000, status: "Active" },
    { id: "A-2025-002", sector: "Education Bureau", subCity: "Bole", program: "Primary School Upgrades", allocated: 38500000, unallocated: 0, status: "Depleted" },
    { id: "A-2025-003", sector: "Infrastructure", subCity: "Yeka", program: "Road Maintenance Network", allocated: 156000000, unallocated: 45000000, status: "Active" },
    { id: "A-2025-004", sector: "Finance Bureau", subCity: "Central", program: "Tax Collection Admin", allocated: 12000000, unallocated: 800000, status: "Active" },
    { id: "A-2025-005", sector: "Water & Energy", subCity: "Lemi Kura", program: "Borehole Drilling Project", allocated: 55000000, unallocated: 12000000, status: "Active" },
    { id: "A-2025-006", sector: "Transport Bureau", subCity: "Nifas Silk", program: "Traffic Light Modernization", allocated: 18000000, unallocated: 200000, status: "Warning" },
];

export default function AllocationsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAllocation, setSelectedAllocation] = useState<AllocationRow | null>(null);

    const handleEdit = (item: AllocationRow) => {
        setSelectedAllocation(item);
        setIsModalOpen(true);
    };

    return (
        <>
            {/* Fixed Filters Container */}
            <div className="z-40 pt-4 px-6 pb-2 shrink-0">
                <div className="surface-panel p-3">
                    <ControlBar />
                </div>
            </div>

            {/* Scrollable Dashboard Elements */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
                <main className="surface-panel space-y-0 min-h-full overflow-hidden flex flex-col">

                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">Master Budget Allocations</h2>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search limits..."
                                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-[#0645ba] focus:border-[#0645ba]"
                                />
                            </div>
                            <Button color="blue" className="bg-[#0645ba] enabled:hover:bg-[#053a9e] rounded-lg">
                                Create New Apportionment
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-x-auto p-0">
                        <Table hoverable className="border-none w-full shadow-none whitespace-nowrap">
                            <TableHead className="bg-[#f8f9fa] border-b border-gray-200">
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Ref ID</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Sector Bureau</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Sub City</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider">Program / Project</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Allocated Limit (ETB)</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Unallocated Balance</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-center">Status</TableHeadCell>
                                <TableHeadCell className="font-semibold text-gray-600 tracking-wider text-right">Actions</TableHeadCell>
                            </TableHead>
                            <TableBody className="divide-y divide-gray-100">
                                {allocationData.map((row) => (
                                    <TableRow key={row.id} className="bg-white">
                                        <TableCell className="font-mono text-xs text-gray-500">{row.id}</TableCell>
                                        <TableCell className="font-medium text-gray-900">{row.sector}</TableCell>
                                        <TableCell className="text-gray-500">{row.subCity}</TableCell>
                                        <TableCell className="text-gray-500">{row.program}</TableCell>
                                        <TableCell className="text-right font-medium text-gray-900">{row.allocated.toLocaleString()}</TableCell>
                                        <TableCell className="text-right font-medium text-[#0645ba]">{row.unallocated.toLocaleString()}</TableCell>
                                        <TableCell className="text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${row.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                row.status === 'Warning' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <button onClick={() => handleEdit(row)} className="text-[#0645ba] hover:underline flex items-center justify-end gap-1 font-medium transition">
                                                <HiOutlinePencilSquare className="h-4 w-4" /> Edit
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50 mt-auto">
                        <span>Showing 1 to 6 of 42 Allocations</span>
                        <div className="flex items-center gap-2">
                            <button className="px-3 py-1 rounded bg-white border border-gray-200 shadow-sm text-gray-400 cursor-not-allowed">Prevent</button>
                            <button className="px-3 py-1 rounded bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-700 transition">Next</button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Interactive Edit Modal Mockup */}
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="md">
                <ModalHeader className="border-b border-gray-100">
                    <span className="text-lg font-bold text-gray-900">Adjust Allocation Limit</span>
                </ModalHeader>
                <ModalBody className="bg-gray-50/50">
                    <div className="space-y-5">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Target Reference</p>
                            <p className="text-base font-semibold text-gray-900">{selectedAllocation?.id} — {selectedAllocation?.program}</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-xs text-gray-400 mb-1">Current Allocated Ceiling</p>
                            <p className="text-xl font-bold text-[#0645ba]">ETB {selectedAllocation?.allocated.toLocaleString()}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Ceiling Limit (ETB)</label>
                            <TextInput id="new_limit" type="number" rightIcon={HiOutlineBanknotes} placeholder="e.g. 5000000" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Adjustment</label>
                            <textarea
                                className="w-full resize-none p-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:ring-[#0645ba] focus:border-[#0645ba]"
                                rows={3}
                                placeholder="Include mandated approval memo reference..."
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="border-t border-gray-100 flex justify-end gap-3 bg-white">
                    <Button color="gray" onClick={() => setIsModalOpen(false)} className="rounded-lg bg-white">
                        Cancel
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)} className="bg-[#0645ba] enabled:hover:bg-[#053a9e] rounded-lg items-center gap-2 flex">
                        <HiOutlineCheck className="h-4 w-4 mr-1" />
                        Submit Adjustment
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    );
}

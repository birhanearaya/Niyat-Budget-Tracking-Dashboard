"use client";

import ControlBar from "@/components/ControlBar";
import { HiOutlineArrowRight, HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { Button, Select, TextInput, Label, FileInput, Textarea } from "flowbite-react";

export default function TransfersPage() {
    return (
        <>
            <div className="z-40 pt-4 px-6 pb-2 shrink-0">
                <div className="surface-panel p-3">
                    <ControlBar />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
                <main className="surface-panel min-h-full p-8 flex justify-center">

                    <div className="w-full max-w-4xl">
                        <div className="mb-8 border-b border-gray-100 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Initiate Fund Transfer Alignment</h2>
                            <p className="text-gray-500 mt-2 text-sm">Move budget allocations between authorized programs or object codes. Requires managerial compliance signature.</p>
                        </div>

                        <form className="space-y-8 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                            {/* Origin / Destination block */}
                            <div className="flex items-center gap-6">
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">A</span>
                                        <h3 className="font-semibold text-gray-900">Subtract From (Origin)</h3>
                                    </div>
                                    <div>
                                        <Label htmlFor="sourceProgram" value="Origin Program" className="mb-1.5 block text-xs" />
                                        <Select id="sourceProgram" required className="bg-white">
                                            <option>Select sector and program...</option>
                                            <option>Health | Maternal Care Expansion</option>
                                            <option>Infrastructure | Road Network</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="sourceObject" value="Origin Object Code" className="mb-1.5 block text-xs" />
                                        <Select id="sourceObject" required className="bg-white">
                                            <option>Select object code...</option>
                                            <option>6211: Operating Expenses</option>
                                            <option>6311: Fixed Assets</option>
                                        </Select>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white shadow-sm border border-gray-200">
                                        <HiOutlineArrowRight className="h-6 w-6 text-gray-400" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">B</span>
                                        <h3 className="font-semibold text-gray-900">Add To (Destination)</h3>
                                    </div>
                                    <div>
                                        <Label htmlFor="destProgram" value="Destination Program" className="mb-1.5 block text-xs" />
                                        <Select id="destProgram" required className="bg-white">
                                            <option>Select sector and program...</option>
                                            <option>Health | IT Modernization</option>
                                            <option>Education | Primary Upgrades</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="destObject" value="Destination Object Code" className="mb-1.5 block text-xs" />
                                        <Select id="destObject" required className="bg-white">
                                            <option>Select object code...</option>
                                            <option>6411: Grants & Subsidies</option>
                                            <option>6111: Salaries & Wages</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gray-200" />

                            <div className="flex gap-6">
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <Label htmlFor="transferAmount" value="Monetary Value to Transfer (ETB)" className="mb-1.5 block text-xs" />
                                        <TextInput id="transferAmount" type="number" placeholder="0.00" required shadow />
                                    </div>
                                    <div>
                                        <Label htmlFor="docUpload" value="Attach MoF Mandate Doc" className="mb-1.5 block text-xs" />
                                        <FileInput id="docUpload" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <Label htmlFor="justification" value="Executive Justification" className="mb-1.5 block text-xs" />
                                    <Textarea id="justification" placeholder="Provide detailed rationale as required by directive..." required rows={4} className="resize-none" />
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 gap-4">
                                <Button color="light" className="bg-white">Discard Form</Button>
                                <Button className="bg-[#0645ba] enabled:hover:bg-[#053a9e] items-center flex gap-2">
                                    <HiOutlineDocumentArrowUp className="w-4 h-4 mr-2" />
                                    Submit Transfer for Authorization
                                </Button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

"use client";

import { auditLogData, type AuditEntry } from "@/lib/data";
import {
    HiOutlineLockClosed,
    HiOutlinePlusCircle,
    HiOutlineEye,
    HiOutlinePencilSquare,
    HiOutlineTrash,
} from "react-icons/hi2";

const actionIcons: Record<AuditEntry["actionType"], React.ReactNode> = {
    Create: <HiOutlinePlusCircle className="h-4 w-4 text-emerald-400" />,
    Read: <HiOutlineEye className="h-4 w-4 text-blue-400" />,
    Update: <HiOutlinePencilSquare className="h-4 w-4 text-amber-400" />,
    Delete: <HiOutlineTrash className="h-4 w-4 text-red-400" />,
};

const actionBadgeColors: Record<AuditEntry["actionType"], string> = {
    Create: "bg-emerald-50 text-emerald-600",
    Read: "bg-blue-50 text-blue-600",
    Update: "bg-amber-50 text-amber-600",
    Delete: "bg-red-50 text-red-600",
};

export default function AuditLog() {
    return (
        <section>
            <div className="mb-4 flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">
                    Audit &amp; Compliance Snapshot
                </h2>
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">
                    <HiOutlineLockClosed className="h-3 w-3" />
                    Read-Only
                </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white">
                <div className="overflow-x-auto">
                {/* Header row */}
                <div className="min-w-[760px] grid grid-cols-[180px_100px_100px_1fr_120px] gap-4 border-b border-gray-100 bg-gray-50/60 px-5 py-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Timestamp
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        User ID
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Action
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Description
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        IP Address
                    </span>
                </div>

                {/* Log entries */}
                <div className="min-w-[760px] divide-y divide-gray-50">
                    {auditLogData.map((entry) => (
                        <div
                            key={entry.id}
                            className="audit-row grid grid-cols-[180px_100px_100px_1fr_120px] items-center gap-4 px-5 py-3"
                        >
                            <span className="font-mono text-xs text-gray-400">
                                {entry.timestamp}
                            </span>
                            <span className="text-xs text-gray-500">{entry.userId}</span>
                            <span
                                className={`inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${actionBadgeColors[entry.actionType]
                                    }`}
                            >
                                {actionIcons[entry.actionType]}
                                {entry.actionType}
                            </span>
                            <span className="truncate text-xs text-gray-500">
                                {entry.description}
                            </span>
                            <span className="font-mono text-xs text-gray-400">
                                {entry.ipAddress}
                            </span>
                        </div>
                    ))}
                </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 px-5 py-2.5 text-xs text-gray-400">
                    <HiOutlineLockClosed className="mr-1 inline h-3 w-3" />
                    Immutable audit trail — {auditLogData.length} entries
                </div>
            </div>
        </section>
    );
}

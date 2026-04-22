"use client";

import AuditLog from "@/components/AuditLog";

export default function AuditPage() {
    return (
        <>
            <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 scrollbar-thin md:px-6 md:pb-6">
                <main className="surface-panel mx-auto min-h-full max-w-5xl p-4 sm:p-6">
                    <AuditLog />
                </main>
            </div>
        </>
    );
}

"use client";

import AlertCenter from "@/components/AlertCenter";

export default function AlertsPage() {
    return (
        <>
            <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 scrollbar-thin md:px-6 md:pb-6">
                <main className="surface-panel min-h-full p-4 sm:p-6">
                    <AlertCenter />
                </main>
            </div>
        </>
    );
}

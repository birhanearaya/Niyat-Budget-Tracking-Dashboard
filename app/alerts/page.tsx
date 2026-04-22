"use client";

import ControlBar from "@/components/ControlBar";
import AlertCenter from "@/components/AlertCenter";

export default function AlertsPage() {
    return (
        <>
            <div className="z-40 pt-4 px-6 pb-2 shrink-0">
                <div className="surface-panel p-3">
                    <ControlBar />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
                <main className="surface-panel min-h-full p-6">
                    <AlertCenter />
                </main>
            </div>
        </>
    );
}

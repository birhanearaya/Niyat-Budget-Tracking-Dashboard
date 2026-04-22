"use client";

import ControlBar from "@/components/ControlBar";

export default function SettingsPage() {
    return (
        <>
            <div className="z-40 pt-4 px-6 pb-2 shrink-0">
                <div className="surface-panel p-3">
                    <ControlBar />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
                <main className="surface-panel min-h-full p-6 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">System Configs</h2>
                        <p>Global role-based tracking thresholds are configured here.</p>
                    </div>
                </main>
            </div>
        </>
    );
}

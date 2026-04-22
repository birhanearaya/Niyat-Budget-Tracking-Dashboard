"use client";

export default function SettingsPage() {
    return (
        <>
            <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 scrollbar-thin md:px-6 md:pb-6">
                <main className="surface-panel flex min-h-full items-center justify-center p-4 sm:p-6">
                    <div className="text-center text-gray-500">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">System Configs</h2>
                        <p>Global role-based tracking thresholds are configured here.</p>
                    </div>
                </main>
            </div>
        </>
    );
}

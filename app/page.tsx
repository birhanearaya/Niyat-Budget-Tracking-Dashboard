import Navbar from "@/components/Navbar";
import ControlBar from "@/components/ControlBar";
import KpiCards from "@/components/KpiCards";
import BurnDownChart from "@/components/BurnDownChart";
import SectorBarChart from "@/components/SectorBarChart";
import SankeyDiagram from "@/components/SankeyDiagram";
import AlertCenter from "@/components/AlertCenter";
import TransactionTable from "@/components/TransactionTable";
import AuditLog from "@/components/AuditLog";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col bg-[#f5f6f8] overflow-hidden">
      {/* Navigation */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Fixed Filters Container */}
          <div className="z-40 pt-4 px-6 pb-2 shrink-0">
            <div className="rounded-xl bg-white border border-gray-200 p-3 shadow-sm">
              <ControlBar />
            </div>
          </div>

          {/* Scrollable Dashboard Elements */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scrollbar-thin">
            {/* Unified Dashboard Elements Background Container */}
            <main className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-8 min-h-full">

              {/* Section 1: KPI Cards */}
              <KpiCards />

              {/* Section 2: Charts & Analysis */}
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Allocation &amp; Consumption Analysis
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                  <BurnDownChart />
                  <SectorBarChart />
                </div>
                <div className="mt-6">
                  <SankeyDiagram />
                </div>
              </section>

              {/* Section 3: Alert Center */}
              <AlertCenter />

              {/* Section 4: Transaction Ledger */}
              <TransactionTable />

              {/* Section 5: Audit Log */}
              <AuditLog />

              {/* Footer */}
              <footer className="pt-6 border-t border-gray-100 text-center text-xs text-gray-400 mt-auto">
                Budget Tracking &amp; Financial Control System — Addis Ababa City Administration · EFY 2018 (2025/26)
              </footer>
            </main>
          </div>

        </div>
      </div>
    </div>
  );
}

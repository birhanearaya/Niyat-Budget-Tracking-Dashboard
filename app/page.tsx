import ControlBar from "@/components/ControlBar";
import KpiCards from "@/components/KpiCards";
import BurnDownChart from "@/components/BurnDownChart";
import SectorBarChart from "@/components/SectorBarChart";
import SankeyDiagram from "@/components/SankeyDiagram";
import ComparativeCharts from "@/components/ComparativeCharts";
import AlertCenter from "@/components/AlertCenter";
import TransactionTable from "@/components/TransactionTable";
import AuditLog from "@/components/AuditLog";

export default function DashboardPage() {
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
        {/* Unified Dashboard Elements Background Container */}
        <main className="surface-panel space-y-8 p-6 min-h-full">

          {/* Section 1: KPI Cards */}
          <KpiCards />

          {/* Section 2: Charts & Analysis */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">
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

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Comparative Analytics</h2>
            </div>
            <ComparativeCharts />
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
    </>
  );
}

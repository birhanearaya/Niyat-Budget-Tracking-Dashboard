import ControlBar from "@/components/ControlBar";
import KpiCards from "@/components/KpiCards";
import SystemStatusCards from "@/components/SystemStatusCards";
import BurnDownChart from "@/components/BurnDownChart";
import SectorBarChart from "@/components/SectorBarChart";
import SankeyDiagram from "@/components/SankeyDiagram";
import ComparativeCharts from "@/components/ComparativeCharts";
import CashFlowTrend from "@/components/CashFlowTrend";
import QuarterlyComparison from "@/components/QuarterlyComparison";
import ProjectUtilization from "@/components/ProjectUtilization";
import PriorYearComparison from "@/components/PriorYearComparison";
import ObjectCodeBreakdown from "@/components/ObjectCodeBreakdown";
import RecurrentVsCapital from "@/components/RecurrentVsCapital";
import SubCityBreakdown from "@/components/SubCityBreakdown";
import ControlAlertPanel from "@/components/ControlAlertPanel";
import AlertCenter from "@/components/AlertCenter";
import TransactionTable from "@/components/TransactionTable";
import AuditLog from "@/components/AuditLog";

export default function DashboardPage() {
  return (
    <>
      {/* Fixed Filters Container */}
      <div className="z-40 shrink-0 px-4 pb-2 pt-4 md:px-6">
        <div className="surface-panel p-3">
          <ControlBar />
        </div>
      </div>

      {/* Scrollable Dashboard Elements */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-2 scrollbar-thin md:px-6 md:pb-6">
        {/* Unified Dashboard Elements Background Container */}
        <main className="surface-panel min-h-full space-y-8 p-4 sm:p-6">

          {/* Section 1: KPI Cards — Primary Financial Metrics */}
          <KpiCards />

          {/* Section 2: System Health — Extended Status Cards */}
          <SystemStatusCards />

          {/* Section 3: Budget Execution & Burn-Down */}
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
          </section>

          {/* Section 4: Comparative Analytics — Year-over-Year & Quarterly */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Comparative Analytics</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <PriorYearComparison />
              <QuarterlyComparison />
            </div>
          </section>

          {/* Section 5: Cash Flow & Expenditure Breakdown */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Cash Flow &amp; Expenditure</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <CashFlowTrend />
              <RecurrentVsCapital />
            </div>
          </section>

          {/* Section 6: Composition & Utilization Detail */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Budget Composition &amp; Utilization</h2>
            </div>
            <ComparativeCharts />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
              <ObjectCodeBreakdown />
              <ProjectUtilization />
            </div>
          </section>

          {/* Section 7: Geographic & Administrative Breakdown */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Administrative Breakdown</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <SubCityBreakdown />
              </div>
              <ControlAlertPanel />
            </div>
          </section>

          {/* Section 8: Fund Flow */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="section-title text-lg">Fund Flow Hierarchy</h2>
            </div>
            <SankeyDiagram />
          </section>

          {/* Section 9: Alert Center */}
          <AlertCenter />

          {/* Section 10: Transaction Ledger */}
          <TransactionTable />

          {/* Section 11: Audit Log */}
          <AuditLog />

          {/* Footer */}
          <footer className="pt-6 border-t-2 border-[#D4923A]/30 text-center text-xs text-gray-400 mt-auto">
            Budget Tracking &amp; Financial Control System — Addis Ababa City Administration · EFY 2018 (2025/26)
          </footer>
        </main>
      </div>
    </>
  );
}

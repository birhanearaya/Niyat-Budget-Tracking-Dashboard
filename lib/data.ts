// ============================================================
// Mock Data Layer — Budget Tracking & Financial Control Dashboard
// Addis Ababa City Administration Budget Structure
// All amounts in ETB (Ethiopian Birr)
// ============================================================

// ---- KPI Data ----
export const kpiData = {
    totalAllocated: 2_450_000_000,
    totalEncumbered: 385_600_000,
    totalExpended: 1_287_400_000,
    get availableBalance() {
        return this.totalAllocated - this.totalEncumbered - this.totalExpended;
    },
    get utilizationRate() {
        return ((this.totalEncumbered + this.totalExpended) / this.totalAllocated) * 100;
    },
    trends: {
        allocated: 0,
        encumbered: +5.1,
        expended: +2.4,
        available: -3.8,
        utilization: +1.7,
    },
};

// ---- Monthly Burn-Down Data ----
export const burnDownData = [
    { month: "Jul", encumbered: 42_000_000, expended: 68_000_000 },
    { month: "Aug", encumbered: 55_000_000, expended: 125_000_000 },
    { month: "Sep", encumbered: 48_000_000, expended: 210_000_000 },
    { month: "Oct", encumbered: 60_000_000, expended: 315_000_000 },
    { month: "Nov", encumbered: 72_000_000, expended: 440_000_000 },
    { month: "Dec", encumbered: 65_000_000, expended: 560_000_000 },
    { month: "Jan", encumbered: 50_000_000, expended: 680_000_000 },
    { month: "Feb", encumbered: 45_000_000, expended: 810_000_000 },
    { month: "Mar", encumbered: 38_000_000, expended: 950_000_000 },
    { month: "Apr", encumbered: 35_000_000, expended: 1_080_000_000 },
    { month: "May", encumbered: 30_000_000, expended: 1_180_000_000 },
    { month: "Jun", encumbered: 25_000_000, expended: 1_287_400_000 },
];

// ---- Sector Distribution ----
export const sectorData = [
    { sector: "Education Bureau", utilized: 420_000_000, available: 180_000_000 },
    { sector: "Health Bureau", utilized: 310_000_000, available: 240_000_000 },
    { sector: "Trade & Industry Bureau", utilized: 275_000_000, available: 125_000_000 },
    { sector: "Roads Authority", utilized: 195_000_000, available: 305_000_000 },
    { sector: "Revenue Bureau", utilized: 87_400_000, available: 112_600_000 },
];

// ---- Sankey Diagram Data (Addis Ababa hierarchy) ----
// Structure: Addis Ababa → Sector Bureaus → Sub Cities → Programs → Object Codes / Sector Categories
export const sankeyNodes = [
    { name: "Addis Ababa City Admin" },
    // Sector Bureaus (level 1)
    { name: "Education Bureau" },
    { name: "Health Bureau" },
    { name: "Trade & Industry Bureau" },
    { name: "Roads Authority" },
    // Sub Cities (level 2)
    { name: "Bole" },
    { name: "Yeka" },
    { name: "Kirkos" },
    { name: "Arada" },
    { name: "Lideta" },
    { name: "Kolfe Keranio" },
    // Programs (level 3)
    { name: "School Construction" },
    { name: "Teacher Training" },
    { name: "Primary Healthcare" },
    { name: "Road Maintenance" },
    { name: "Market Development" },
    { name: "Urban Transport" },
    // Object Codes & Sector Categories (level 4)
    { name: "OC 6111 - Salaries" },
    { name: "OC 6211 - Supplies" },
    { name: "OC 6231 - Maintenance" },
    { name: "OC 6311 - Grants" },
    { name: "SC 311 - Education" },
    { name: "SC 321 - Health" },
];

export const sankeyLinks = [
    // Addis Ababa → Sector Bureaus
    { source: 0, target: 1, value: 480 },
    { source: 0, target: 2, value: 360 },
    { source: 0, target: 3, value: 280 },
    { source: 0, target: 4, value: 220 },
    // Sector Bureaus → Sub Cities
    { source: 1, target: 5, value: 160 },
    { source: 1, target: 6, value: 140 },
    { source: 1, target: 7, value: 100 },
    { source: 1, target: 10, value: 80 },
    { source: 2, target: 5, value: 120 },
    { source: 2, target: 8, value: 130 },
    { source: 2, target: 9, value: 110 },
    { source: 3, target: 6, value: 100 },
    { source: 3, target: 7, value: 90 },
    { source: 3, target: 10, value: 90 },
    { source: 4, target: 8, value: 80 },
    { source: 4, target: 9, value: 70 },
    { source: 4, target: 5, value: 70 },
    // Sub Cities → Programs
    { source: 5, target: 11, value: 120 },
    { source: 5, target: 13, value: 110 },
    { source: 5, target: 15, value: 120 },
    { source: 6, target: 11, value: 100 },
    { source: 6, target: 12, value: 80 },
    { source: 6, target: 14, value: 60 },
    { source: 7, target: 14, value: 80 },
    { source: 7, target: 15, value: 50 },
    { source: 7, target: 16, value: 60 },
    { source: 8, target: 13, value: 100 },
    { source: 8, target: 16, value: 110 },
    { source: 9, target: 12, value: 60 },
    { source: 9, target: 14, value: 60 },
    { source: 9, target: 16, value: 60 },
    { source: 10, target: 11, value: 60 },
    { source: 10, target: 15, value: 50 },
    { source: 10, target: 12, value: 60 },
    // Programs → Object Codes & Sector Categories
    { source: 11, target: 17, value: 140 },
    { source: 11, target: 21, value: 140 },
    { source: 12, target: 18, value: 100 },
    { source: 12, target: 21, value: 100 },
    { source: 13, target: 17, value: 100 },
    { source: 13, target: 22, value: 110 },
    { source: 14, target: 19, value: 100 },
    { source: 14, target: 18, value: 100 },
    { source: 15, target: 19, value: 110 },
    { source: 15, target: 20, value: 110 },
    { source: 16, target: 20, value: 100 },
    { source: 16, target: 22, value: 130 },
];

// ---- Alert Center ----
export interface Alert {
    id: string;
    type: "hard-stop" | "compatibility";
    title: string;
    description: string;
    timestamp: string;
    traceabilityId: string;
    amount?: number;
    availableBalance?: number;
}

export const alertsData: Alert[] = [
    {
        id: "ALT-001",
        type: "hard-stop",
        title: "Transaction Rejected — Insufficient Balance",
        description:
            "Purchase order PO-2026-4418 for Bole Sub City Education Office was automatically rejected. Requested amount exceeds available balance.",
        timestamp: "2026-04-22 09:14:33",
        traceabilityId: "AA/EDU/BOLE/6111",
        amount: 12_500_000,
        availableBalance: 8_200_000,
    },
    {
        id: "ALT-002",
        type: "hard-stop",
        title: "Transaction Rejected — Insufficient Balance",
        description:
            "Encumbrance request for Yeka Sub City Health Program was blocked. Budget ceiling reached for Object Code 6211.",
        timestamp: "2026-04-21 16:42:10",
        traceabilityId: "AA/HLT/YEKA/6211",
        amount: 5_800_000,
        availableBalance: 2_100_000,
    },
    {
        id: "ALT-003",
        type: "compatibility",
        title: "Code Mismatch — Object vs Sector Category",
        description:
            'Object Code 6311 (Grants & Subsidies) used under Sector Category SC 311 (Education) is flagged. Expected usage is under SC 321 (Health).',
        timestamp: "2026-04-22 08:30:55",
        traceabilityId: "AA/EDU/KIRKOS/6311",
    },
    {
        id: "ALT-004",
        type: "compatibility",
        title: "Code Mismatch — Program vs Bureau",
        description:
            "Road Maintenance program posted under Education Bureau — expected Roads Authority bureau.",
        timestamp: "2026-04-20 14:18:22",
        traceabilityId: "AA/EDU/ARADA/6231",
    },
];

// ---- Transaction Ledger ----
export interface Transaction {
    id: string;
    date: string;
    traceabilityId: string;
    department: string;
    amount: number;
    type: "Allocation" | "Encumbrance" | "Reversal" | "Expenditure";
    status: "Approved" | "Encumbered" | "Pending" | "Rejected" | "Settled" | "Reversed";
}

export const transactionsData: Transaction[] = [
    {
        id: "TXN-10001",
        date: "2026-04-22",
        traceabilityId: "AA/EDU/BOLE/6111",
        department: "Bole Sub City — Education Office",
        amount: 45_000_000,
        type: "Allocation",
        status: "Approved",
    },
    {
        id: "TXN-10002",
        date: "2026-04-22",
        traceabilityId: "AA/EDU/BOLE/6111",
        department: "Bole Sub City — Education Office",
        amount: 12_500_000,
        type: "Encumbrance",
        status: "Rejected",
    },
    {
        id: "TXN-10003",
        date: "2026-04-21",
        traceabilityId: "AA/HLT/KIRKOS/6211",
        department: "Kirkos Sub City — Health Center",
        amount: 28_300_000,
        type: "Expenditure",
        status: "Settled",
    },
    {
        id: "TXN-10004",
        date: "2026-04-21",
        traceabilityId: "AA/HLT/YEKA/6211",
        department: "Yeka Sub City — Health Program",
        amount: 5_800_000,
        type: "Encumbrance",
        status: "Rejected",
    },
    {
        id: "TXN-10005",
        date: "2026-04-20",
        traceabilityId: "AA/RDS/ARADA/6231",
        department: "Arada Sub City — Roads Maintenance",
        amount: 88_000_000,
        type: "Encumbrance",
        status: "Encumbered",
    },
    {
        id: "TXN-10006",
        date: "2026-04-20",
        traceabilityId: "AA/RDS/LIDETA/6231",
        department: "Lideta Sub City — Road Projects",
        amount: 15_200_000,
        type: "Expenditure",
        status: "Settled",
    },
    {
        id: "TXN-10007",
        date: "2026-04-19",
        traceabilityId: "AA/EDU/YEKA/6111",
        department: "Yeka Sub City — Education Office",
        amount: 6_000_000,
        type: "Reversal",
        status: "Reversed",
    },
    {
        id: "TXN-10008",
        date: "2026-04-19",
        traceabilityId: "AA/TRD/KOLFE/6311",
        department: "Kolfe Keranio — Trade & Market Dev.",
        amount: 32_000_000,
        type: "Allocation",
        status: "Approved",
    },
    {
        id: "TXN-10009",
        date: "2026-04-18",
        traceabilityId: "AA/HLT/BOLE/6211",
        department: "Bole Sub City — Health Bureau",
        amount: 18_500_000,
        type: "Encumbrance",
        status: "Encumbered",
    },
    {
        id: "TXN-10010",
        date: "2026-04-18",
        traceabilityId: "AA/EDU/ARADA/6111",
        department: "Arada Sub City — Education Office",
        amount: 72_000_000,
        type: "Expenditure",
        status: "Settled",
    },
    {
        id: "TXN-10011",
        date: "2026-04-17",
        traceabilityId: "AA/TRD/LIDETA/6311",
        department: "Lideta Sub City — Market Development",
        amount: 9_400_000,
        type: "Encumbrance",
        status: "Pending",
    },
    {
        id: "TXN-10012",
        date: "2026-04-17",
        traceabilityId: "AA/RDS/KIRKOS/6231",
        department: "Kirkos Sub City — Road Maintenance",
        amount: 22_000_000,
        type: "Expenditure",
        status: "Settled",
    },
    {
        id: "TXN-10013",
        date: "2026-04-16",
        traceabilityId: "AA/EDU/KOLFE/6111",
        department: "Kolfe Keranio — Education Office",
        amount: 35_000_000,
        type: "Allocation",
        status: "Approved",
    },
    {
        id: "TXN-10014",
        date: "2026-04-16",
        traceabilityId: "AA/HLT/YEKA/6211",
        department: "Yeka Sub City — Health Program",
        amount: 4_200_000,
        type: "Reversal",
        status: "Reversed",
    },
    {
        id: "TXN-10015",
        date: "2026-04-15",
        traceabilityId: "AA/RDS/BOLE/6231",
        department: "Bole Sub City — Urban Transport",
        amount: 41_000_000,
        type: "Encumbrance",
        status: "Encumbered",
    },
];

// ---- Audit Log ----
export interface AuditEntry {
    id: string;
    timestamp: string;
    userId: string;
    actionType: "Create" | "Read" | "Update" | "Delete";
    description: string;
    ipAddress: string;
}

export const auditLogData: AuditEntry[] = [
    {
        id: "AUD-001",
        timestamp: "2026-04-22 09:14:33",
        userId: "USR-0041",
        actionType: "Create",
        description: "Created encumbrance request TXN-10002",
        ipAddress: "10.0.12.45",
    },
    {
        id: "AUD-002",
        timestamp: "2026-04-22 09:14:34",
        userId: "SYS-AUTO",
        actionType: "Update",
        description: "Auto-rejected TXN-10002 — insufficient balance",
        ipAddress: "10.0.0.1",
    },
    {
        id: "AUD-003",
        timestamp: "2026-04-21 16:42:10",
        userId: "USR-0087",
        actionType: "Create",
        description: "Created encumbrance request TXN-10004",
        ipAddress: "10.0.18.102",
    },
    {
        id: "AUD-004",
        timestamp: "2026-04-21 14:30:00",
        userId: "USR-0023",
        actionType: "Read",
        description: "Exported allocation report for FY 2025/26",
        ipAddress: "10.0.12.78",
    },
    {
        id: "AUD-005",
        timestamp: "2026-04-20 11:15:45",
        userId: "USR-0041",
        actionType: "Update",
        description: "Modified encumbrance TXN-10005 amount",
        ipAddress: "10.0.12.45",
    },
    {
        id: "AUD-006",
        timestamp: "2026-04-19 09:00:12",
        userId: "USR-0023",
        actionType: "Create",
        description: "Created reversal TXN-10007",
        ipAddress: "10.0.12.78",
    },
    {
        id: "AUD-007",
        timestamp: "2026-04-19 08:45:00",
        userId: "USR-0056",
        actionType: "Create",
        description: "Created allocation TXN-10008",
        ipAddress: "10.0.14.33",
    },
    {
        id: "AUD-008",
        timestamp: "2026-04-18 15:22:18",
        userId: "USR-0087",
        actionType: "Update",
        description: "Updated department mapping for Bole Sub City",
        ipAddress: "10.0.18.102",
    },
    {
        id: "AUD-009",
        timestamp: "2026-04-17 10:05:30",
        userId: "USR-0012",
        actionType: "Delete",
        description: "Voided draft encumbrance (pre-approval)",
        ipAddress: "10.0.11.88",
    },
    {
        id: "AUD-010",
        timestamp: "2026-04-16 13:40:55",
        userId: "USR-0056",
        actionType: "Create",
        description: "Created allocation TXN-10013",
        ipAddress: "10.0.14.33",
    },
];

// ---- Filter Options ----
export const filterOptions = {
    jurisdictions: [
        { value: "AA", label: "Addis Ababa City Administration" },
    ],
    sectors: [
        { value: "EDU", label: "Education Bureau" },
        { value: "HLT", label: "Health Bureau" },
        { value: "TRD", label: "Trade & Industry Bureau" },
        { value: "RDS", label: "Roads Authority" },
        { value: "REV", label: "Revenue Bureau" },
    ],
    programs: [
        { value: "SCHCON", label: "School Construction" },
        { value: "TCHRTR", label: "Teacher Training" },
        { value: "PRIMHC", label: "Primary Healthcare" },
        { value: "RDMAIN", label: "Road Maintenance" },
        { value: "MKTDEV", label: "Market Development" },
        { value: "URBTRN", label: "Urban Transport" },
    ],
    objectCodes: [
        { value: "6111", label: "6111 — Salaries & Wages" },
        { value: "6211", label: "6211 — Supplies & Materials" },
        { value: "6231", label: "6231 — Maintenance" },
        { value: "6311", label: "6311 — Grants & Subsidies" },
    ],
    subCities: [
        { value: "BOLE", label: "Bole" },
        { value: "YEKA", label: "Yeka" },
        { value: "KIRKOS", label: "Kirkos" },
        { value: "ARADA", label: "Arada" },
        { value: "LIDETA", label: "Lideta" },
        { value: "KOLFE", label: "Kolfe Keranio" },
    ],
    fiscalYears: [
        { value: "2025/26", label: "EFY 2018 (2025/26)" },
        { value: "2024/25", label: "EFY 2017 (2024/25)" },
        { value: "2023/24", label: "EFY 2016 (2023/24)" },
    ],
};

// ---- Helpers ----
export function formatETB(amount: number): string {
    return new Intl.NumberFormat("en-ET", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function formatCompact(amount: number): string {
    if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(1)}B`;
    if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
    if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
    return amount.toString();
}

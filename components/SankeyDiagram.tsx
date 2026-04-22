"use client";

import { sankeyNodes, sankeyLinks } from "@/lib/data";

/**
 * Custom SVG vertical Sankey diagram for Addis Ababa budget flow.
 * Hierarchy: Addis Ababa → Sector Bureaus → Sub Cities → Programs → Object Codes / Sector Categories
 */

// Row groups (top-to-bottom layout)
const rows: number[][] = [
    [0],                        // Addis Ababa City Admin
    [1, 2, 3, 4],              // Sector Bureaus
    [5, 6, 7, 8, 9, 10],       // Sub Cities
    [11, 12, 13, 14, 15, 16],  // Programs
    [17, 18, 19, 20, 21, 22],  // Object Codes & Sector Categories
];

const ROW_LABELS = [
    "City Administration",
    "Sector Bureaus",
    "Sub Cities",
    "Programs",
    "Object Codes & Sector Categories",
];

const ROW_COLORS = [
    "#0645ba",
    "#1d4ed8",
    "#3b82f6",
    "#60a5fa",
    "#0645ba",
];

interface NodeLayout {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
}

function buildVerticalLayout(
    width: number,
    height: number
): { nodes: NodeLayout[] } {
    const nodeH = 26;
    const nodeW = 110;
    const rowGap = (height - rows.length * nodeH - 40) / (rows.length - 1);
    const nodes: NodeLayout[] = [];

    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const y = 28 + r * (nodeH + rowGap);
        const totalRowWidth = row.length * nodeW + (row.length - 1) * 14;
        const startX = (width - totalRowWidth) / 2;

        for (let c = 0; c < row.length; c++) {
            const idx = row[c];
            nodes[idx] = {
                name: sankeyNodes[idx].name,
                x: startX + c * (nodeW + 14),
                y,
                w: nodeW,
                h: nodeH,
                color: ROW_COLORS[r],
            };
        }
    }

    return { nodes };
}

function verticalBezier(
    sx: number,
    sy: number,
    tx: number,
    ty: number
): string {
    const midY = (sy + ty) / 2;
    return `M ${sx} ${sy} C ${sx} ${midY}, ${tx} ${midY}, ${tx} ${ty}`;
}

export default function SankeyDiagram() {
    const svgW = 960;
    const svgH = 520;
    const { nodes } = buildVerticalLayout(svgW, svgH);

    return (
        <div className="surface-panel p-6">
            <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900">
                    Fund Flow Traceability
                </h3>
                <p className="text-sm text-gray-500">
                    Addis Ababa City Admin → Sector Bureaus → Sub Cities → Programs → Object Codes &amp; Sector Categories
                </p>
            </div>

            {/* Row labels on the left */}
            <div className="overflow-x-auto">
                <svg
                    viewBox={`0 0 ${svgW} ${svgH}`}
                    className="w-full"
                    style={{ minWidth: 780 }}
                >
                    {/* Links */}
                    {sankeyLinks.map((link, i) => {
                        const s = nodes[link.source];
                        const t = nodes[link.target];
                        if (!s || !t) return null;
                        const sx = s.x + s.w / 2;
                        const sy = s.y + s.h;
                        const tx = t.x + t.w / 2;
                        const ty = t.y;
                        const opacity = Math.min(0.55, 0.1 + (link.value / 500) * 0.45);
                        const strokeW = Math.max(1, Math.min(3, link.value / 150));
                        return (
                            <path
                                key={`link-${i}`}
                                d={verticalBezier(sx, sy, tx, ty)}
                                fill="none"
                                stroke="#0645ba"
                                strokeWidth={strokeW}
                                strokeOpacity={opacity}
                            />
                        );
                    })}

                    {/* Nodes */}
                    {nodes.map((node, i) => (
                        <g key={`node-${i}`}>
                            <rect
                                x={node.x}
                                y={node.y}
                                width={node.w}
                                height={node.h}
                                rx={4}
                                fill={node.color}
                                fillOpacity={0.07}
                                stroke={node.color}
                                strokeWidth={1}
                            />
                            <text
                                x={node.x + node.w / 2}
                                y={node.y + node.h / 2 + 1}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={9}
                                fontWeight={500}
                                fill="#1e3a5f"
                            >
                                {node.name.length > 16
                                    ? node.name.slice(0, 15) + "…"
                                    : node.name}
                            </text>
                        </g>
                    ))}

                    {/* Row labels — left side */}
                    {rows.map((row, r) => {
                        const firstNode = nodes[row[0]];
                        if (!firstNode) return null;
                        return (
                            <text
                                key={`row-label-${r}`}
                                x={8}
                                y={firstNode.y + firstNode.h / 2}
                                dominantBaseline="middle"
                                fontSize={8}
                                fontWeight={600}
                                fill="#9ca3af"
                                style={{ textTransform: "uppercase" as const, letterSpacing: "0.05em" }}
                            >
                                {ROW_LABELS[r]}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
}

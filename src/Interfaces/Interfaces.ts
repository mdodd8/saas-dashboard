// --- Metric Card ---
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface MetricCardProps {
    label: string;
    value: string;
    icon: IconDefinition;
    subtext: string;
    colorClass?: string;
}

// --- Line Chart Card ---
export interface QuarterlyDataPoint {
    quarter: string;        // "Q1", "Q2", "Q3", "Q4"
    individual: number;     // the selected employee's sales that quarter
    team: number;           // the team average/total that quarter
}

export interface QuarterlyChartProps {
    data: QuarterlyDataPoint[];
    employeeName: string;
}

// --- Donut Chart Card ---
export interface DonutSlice {
    label: string;
    value: number; // percentage 0–100
    color: string;
}

export interface DonutChartCardProps {
    title: string;
    slices: DonutSlice[];
}
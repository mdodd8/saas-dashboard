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
    quarter: string;
    individual: number;
    team: number;
}

export interface QuarterlyChartProps {
    data: QuarterlyDataPoint[];
    employeeName: string;
}

// --- Donut Chart Card ---
export interface DonutChartProps {
    fulfilled: number;
    pending: number;
    returned: number;
}
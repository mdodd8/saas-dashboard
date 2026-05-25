import type { Employee } from "../Interfaces/Employees.ts";
import type {QuarterlyDataPoint} from "../Interfaces/Interfaces.ts";

export function isOnTrack(employee: Employee): boolean {
    return (employee.sales / employee.target) >= 0.7;
}

export function initials(name: string) {
    return name.split(' ').map(n => n[0]).join('');
}

export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(n => n[0])
        .join('');
}

export function buildQuarterlyData(
    individual: number[],
    team: number[]
): QuarterlyDataPoint[] {
    const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    return quarters.map((quarter, i) => ({
        quarter,
        individual: individual[i] ?? 0,
        team: team[i] ?? 0,
    }));
}

export function getPct(n:number,t:number){ return Math.round((n/t)*100); }

export function getFmt(n:number){ return '$'+n.toLocaleString(); }
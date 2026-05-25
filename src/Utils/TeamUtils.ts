import type { Employee } from "../Interfaces/Employees.ts";
import {isOnTrack} from "./EmployeeUtils.ts";

export function getTotalSales(employees: Employee[]): number {
    return employees.reduce((sum, e) => sum + e.sales, 0);
}

export function getTotalOrders(employees: Employee[]): number {
    return employees.reduce((sum, e) => sum + e.ordersCompleted, 0);
}

export function getAveragePerformance(employees: Employee[]): number {
    if (employees.length === 0) return 0;
    const total = employees.reduce((sum, e) => sum + e.performance, 0);
    return Math.round(total / employees.length);
}

export function getOnTrackEmployees(employees: Employee[]): Employee[] {
    return employees.filter(e => isOnTrack(e));
}
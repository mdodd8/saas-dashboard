import "./KpiOverview.css";
import Card from "../Card (shell)/Card.tsx";
import type {Employee} from "../../Interfaces/Employees.ts";
import {getPct} from "../../Utils/EmployeeUtils.ts";

function KpiOverview({employee}: { employee: Employee }) {

    const target = getPct(employee.sales, employee.target);
    return (
        <Card title="KPI overview">
                <div className="kpi-row">
                    <div className="kpi-item">
                        <div className="kpi-label-row"><span className="kpi-label">Sales vs target</span><span
                            className="kpi-val">{target}%</span></div>
                        <div className="kpi-bar-bg">
                            <div className="kpi-bar" style={{width: `${Math.min(target,100)}%`, background: `${target>=70?'var(--color-text-success)':'var(--color-text-warning)'}`}}></div>
                        </div>
                    </div>
                    <div className="kpi-item">
                        <div className="kpi-label-row"><span className="kpi-label">Attendance</span><span
                            className="kpi-val">{employee.attendance}%</span></div>
                        <div className="kpi-bar-bg">
                            <div className="kpi-bar" style={{width: `${employee.attendance}%`, background: `${employee.attendance>=80?'var(--color-text-success)':'var(--color-text-warning)'}`}}></div>
                        </div>
                    </div>
                    <div className="kpi-item">
                        <div className="kpi-label-row"><span className="kpi-label">Performance score</span><span
                            className="kpi-val">{employee.performance}/100</span></div>
                        <div className="kpi-bar-bg">
                            <div className="kpi-bar" style={{width: `${employee.performance}%`, background: `${employee.performance>=70?'var(--color-text-success)':'var(--color-text-warning)'}`}}></div>
                        </div>
                    </div>
                    <div className="kpi-item">
                        <div className="kpi-label-row"><span className="kpi-label">Client satisfaction</span><span
                            className="kpi-val">{employee.satisfaction}/100</span></div>
                        <div className="kpi-bar-bg">
                            <div className="kpi-bar" style={{width: `${employee.satisfaction}%`, background: `${employee.satisfaction>=90?'var(--color-text-success)':'var(--color-text-warning)'}`}}></div>
                        </div>
                    </div>
                </div>
        </Card>

    )
}

export default KpiOverview;
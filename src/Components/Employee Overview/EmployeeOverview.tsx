import type {Employee} from "../../Interfaces/Employees.ts";
import {isOnTrack, getInitials, buildQuarterlyData, getPct, getFmt} from "../../Utils/EmployeeUtils.ts";
import "./EmployeeOverview.css";
import MetricCard from "../Metrics/MetricCard.tsx";
import LineChartComponent from "../RevenueLineChart.tsx";
import {faArrowTrendUp, faArrowTrendDown, faCoins, faFlag} from "@fortawesome/free-solid-svg-icons";
import DonutChart from "../Orders Donut Chart/DonutChart.tsx";
import KpiOverview from "../KPI Overview/KpiOverview.tsx";
import RecentActivity from "../Recent Activity/RecentActivity.tsx";
import RecentOrders from "../Recent Orders/RecentOrders.tsx";

interface EmployeeOverviewProps {
    employee: Employee;
}

function EmployeeOverview({employee}: EmployeeOverviewProps) {
    console.log(employee, 'selected employee');
    const quarterlyData = buildQuarterlyData(employee.quarterly, employee.teamQ);

    return (
        <>
            <div className="overview-widget d-flex">
                <div className="emp-header-av">{getInitials(employee.name)}</div>
                <div className="d-flex flex-column">
                    <h2>{employee.name}</h2>
                    <p className="employee-subheader">{employee.role} </p>
                    <p className="employee-subheader">{employee.tenure} · Big Box Brand Co.</p>
                </div>
                <div className="d-flex align-items-center">
                    <span
                        className={`overview-status-pill ${isOnTrack(employee) ? 'pill-green' : 'pill-amber'}`}>{isOnTrack(employee) ? 'On track' : 'Needs attention'}</span>
                </div>
            </div>
            <main>
                <div className="common-row">
                    <MetricCard label="Monthly sales" value={employee.sales.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })} icon={faArrowTrendUp} subtext={`${getPct(employee.sales, employee.target)}% of target`}
                                colorClass="green-text"/>
                    <MetricCard label="Orders Closed"
                                value={employee.ordersCompleted.toLocaleString()}
                                icon={employee.ordersCompleted >= 10 ? faArrowTrendUp : faArrowTrendDown}
                                subtext={`${getFmt(employee.sales)} This month `}
                                colorClass={employee.ordersCompleted >= 10 ? 'green-text' : 'red-text'}/>
                    <MetricCard label="Commission Earned"
                                value={`${employee.commission.toLocaleString()}`}
                                icon={faCoins} subtext="10% rate"
                                colorClass={employee.commission >= 0 ? 'green-text' : 'red-text'}/>
                    <MetricCard label="Sales Target"
                                value={`${employee.target.toLocaleString()}`}
                                icon={faFlag}
                                subtext={`${employee.target - employee.sales > 0 ? getFmt(employee.target - employee.sales) + ' remaining' : 'Target hit!'}`}
                                colorClass={employee.target - employee.sales > 0 ? 'red-text' : 'green-text'}
                    />
                </div>
                <div className="common-row" style={{gridTemplateColumns: '2fr 1fr'}}>
                    <LineChartComponent data={quarterlyData}
                                        employeeName={employee.name}/>
                    <DonutChart fulfilled={employee.ordersFulfilled}
                                pending={employee.ordersPending}
                                returned={employee.ordersReturned}/>
                </div>
                <div className="common-row">
                    <KpiOverview employee={employee}/>
                    <RecentActivity activities={employee.activity}/>
                </div>
                <RecentOrders orders={employee.orders}/>
            </main>
        </>

    )
}

export default EmployeeOverview;
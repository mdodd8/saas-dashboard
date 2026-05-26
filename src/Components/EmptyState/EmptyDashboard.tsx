import MetricCard from "../Metrics/MetricCard.tsx";
import {getAveragePerformance, getOnTrackEmployees, getTotalOrders, getTotalSales} from "../../Utils/TeamUtils.ts"
import {faArrowTrendDown, faArrowTrendUp, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {employeesDataList} from "../../Data/EmployeesDataList.ts"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




function EmptyDashboard() {

     console.log(getOnTrackEmployees(employeesDataList));
    return (
        <>
            <div className="overview-widget d-flex flex-row gap-5 align-items-center">
                <div className="emp-header-av">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    </div>
                <div className="d-flex flex-column">
                    <p style={{margin: '0'}}>Select an employee from the sidebar to view their individual performance overview.</p>
                </div>
            </div>
            <main>
                <div className="common-row">
                    <MetricCard label="Team Monthly sales" value={getTotalSales(employeesDataList).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })} icon={faArrowTrendUp} subtext={`12.4% vs last month`}
                                colorClass="green-text"/>
                    <MetricCard label="Total Orders"
                                value={getTotalOrders(employeesDataList).toLocaleString()}
                                icon={faArrowTrendUp}
                                subtext={`8.1% vs last month`}
                                colorClass={'green-text'}/>
                    <MetricCard label="Avg Performance"
                                value={`${getAveragePerformance(employeesDataList).toLocaleString()}/100`}
                                icon={faArrowTrendUp} subtext="3.2% vs last month"
                                colorClass={'green-text'}/>
                    <MetricCard label="Reps on track"
                                value={`${getOnTrackEmployees(employeesDataList).length.toLocaleString()}`}
                                icon={faArrowTrendDown}
                                subtext={'2 need attention'}
                                colorClass={ 'red-text' }
                    />
                </div>
            </main>
        </>
    )
}

export default EmptyDashboard;
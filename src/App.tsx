import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import {useState} from "react";
import type {Employee} from "./Interfaces/Employees.ts";
import EmployeeOverview from "./Components/Employee Overview/EmployeeOverview.tsx";
import {employeesDataList} from "./Data/EmployeesDataList.ts";
import EmptyDashboard from "./Components/EmptyState/EmptyDashboard.tsx";
import SelectEmployeeHint from "./Components/SelectEmployeeHint/SelectEmployeeHint.tsx";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function App() {
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [mobileView, setMobileView] = useState<'sidebar' | 'detail'>('sidebar');

    const handleSelect = (employee: Employee) => {
        setSelectedEmployee(employee);
        setMobileView('detail');
    };

    const handleBack = () => {
        setMobileView('sidebar');
        setSelectedEmployee(null);
    };


    const isMobile = window.innerWidth <= 768;


    return (
        <div className="app-layout">
            <div className="app-body">

                <div className={`sidebar-wrap ${mobileView === 'detail' ? 'mobile-hidden' : ''}`} >
                    <Sidebar
                        employees={employeesDataList}
                        selectedId={selectedEmployee?.id ?? null}
                        onSelect={handleSelect}
                    />

                </div>
                <div className="main" id="main">
                    {selectedEmployee
                        ? (
                            <>
                                <button className={`back-btn ${mobileView === 'sidebar' ? 'mobile-hidden' : ''}`} onClick={handleBack} aria-label="Back to employee list">
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                    All employees
                                </button>
                                <EmployeeOverview employee={selectedEmployee} />
                            </>
                        ) : isMobile  ?
                            <SelectEmployeeHint /> : (
                            <EmptyDashboard  />
                        )
                    }
                </div>

            </div>


        </div>
    )
}

export default App

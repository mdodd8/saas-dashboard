import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import {useState} from "react";
import type {Employee} from "./Interfaces/Employees.ts";
import EmployeeOverview from "./Components/Employee Overview/EmployeeOverview.tsx";
import {employeesDataList} from "./Data/EmployeesDataList.ts";
import EmptyDashboard from "./Components/EmptyState/EmptyDashboard.tsx";

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);


    return (
        <>
            <Sidebar
                employees={employeesDataList}
                selectedId={selectedEmployee?.id ?? null}
                onSelect={setSelectedEmployee}
            />
            <div className="main" id="main">
                {selectedEmployee
                    ? <EmployeeOverview employee={selectedEmployee} />
                    : <EmptyDashboard  />
                }
            </div>
        </>
    )
}

export default App

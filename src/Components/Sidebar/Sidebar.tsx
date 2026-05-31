import "./Sidebar.css";
import type {Employee} from "../../Interfaces/Employees.ts";
import {useState} from "react";
import {isOnTrack, getInitials} from "../../Utils/EmployeeUtils.ts";

interface SidebarProps {
    employees?: Employee[];
    selectedId: number | null;
    onSelect: (employee: Employee) => void;
}

function Sidebar({employees = [], selectedId, onSelect}: SidebarProps) {
    console.log(selectedId, 'selected id');

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');


    const filtered = (employees ?? []).filter(e => {
        const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());
        const onTrack = isOnTrack(e);
        const matchFilter = filter === 'all'
            || (filter === 'on-track' && onTrack)
            || (filter === 'needs-attention' && !onTrack);
        return matchSearch && matchFilter;
    });


    return (
        <div className="sidebar">

            <div className="radio-container d-flex justify-content-between" style={{marginBottom: '10px',
                padding: '0px 5px'}}>
                <div className="d-flex gap-1">
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="all"
                           value="all"
                           checked={filter === 'all'}
                           onChange={() => setFilter('all')}
                    />
                    <label className="employee-radio-label" htmlFor="all">All</label>
                </div>
                <div className="d-flex gap-1">
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="onTrack"
                           value="on-track"
                           checked={filter === 'on-track'}
                           onChange={() => setFilter('on-track')}
                    />
                    <label className="employee-radio-label" htmlFor="onTrack">On Track</label>
                </div>
                <div className="d-flex gap-1">
                    <input className="form-check-input"
                           type="radio"
                           name="inlineRadioOptions"
                           id="needs-attention"
                           value="needs-attention"
                           checked={filter === 'needs-attention'}
                           onChange={() => setFilter('needs-attention')}/>
                    <label className="employee-radio-label" htmlFor="needsAttention">Needs Attention</label>
                </div>
            </div>
            <input style={{margin: '3px'}}
                value={search}
                   onChange={e => setSearch(e.target.value)}
                   placeholder="Search…"/>
            {filtered.map(emp => (
                <div key={emp.id}
                    className={`d-flex align-items-center emp-item ${emp.id === selectedId ? 'active' : ''}`}
                    onClick={() => onSelect(emp)}>
                    <div className="emp-initials">{getInitials(emp.name)}</div>
                    <div className="d-flex flex-column flex-grow-1 ms-1">
                        <div className="emp-name">{emp.name}</div>
                        <div className="emp-role">{emp.role}</div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <div className="emp-sales">${emp.sales}</div>
                        <div className="emp-header-right">
                            <span
                                className={`status-pill ${isOnTrack(emp) ? 'pill-green' : 'pill-amber'}`}></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;
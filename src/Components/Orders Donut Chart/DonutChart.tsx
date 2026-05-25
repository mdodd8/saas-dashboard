import "./DonutChart.css";
import Card from "../Card (shell)/Card.tsx";
import type {DonutChartProps} from "../../Interfaces/Interfaces.ts";



function DonutChart({ fulfilled, pending, returned }: DonutChartProps) {
    const total = fulfilled + pending + returned;

    const fulfilledPct = total > 0 ? Math.round((fulfilled / total) * 100) : 0;
    const pendingPct   = total > 0 ? Math.round((pending / total) * 100) : 0;
    const returnedPct  = total > 0 ? Math.round((returned / total) * 100) : 0;


    const circumference = 239;

    const fulfilledDash = (fulfilledPct / 100) * circumference;
    const pendingDash   = (pendingPct / 100) * circumference;
    const returnedDash  = (returnedPct / 100) * circumference;

    const pendingOffset  = -(fulfilledDash);
    const returnedOffset = -(fulfilledDash + pendingDash);


    return (
        <Card title="Orders By Status">
            <div className="donut-wrap">
                <svg width="200" height="200" viewBox="0 0 100 100" aria-hidden="true">
                    <circle cx="50" cy="50" r="38" fill="none"
                            stroke="var(--color-border-tertiary)" strokeWidth="14"/>
                    <circle cx="50" cy="50" r="38" fill="none"
                            stroke="#378ADD" strokeWidth="14"
                            strokeDasharray={`${fulfilledDash} ${circumference - fulfilledDash}`}
                            strokeDashoffset="25"
                            strokeLinecap="butt"/>
                    <circle cx="50" cy="50" r="38" fill="none"
                            stroke="#1D9E75" strokeWidth="14"
                            strokeDasharray={`${pendingDash} ${circumference - pendingDash}`}
                            strokeDashoffset={pendingOffset - 25}
                            strokeLinecap="butt"/>
                    <circle cx="50" cy="50" r="38" fill="none"
                            stroke="#EF9F27" strokeWidth="14"
                            strokeDasharray={`${returnedDash} ${circumference - returnedDash}`}
                            strokeDashoffset={returnedOffset - 25}
                            strokeLinecap="butt"/>
                </svg>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-dot" style={{background: '#378ADD'}}></span>
                        Fulfilled
                        <span className="legend-val">{fulfilledPct}%</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-dot" style={{background: '#1D9E75'}}></span>
                        Pending
                        <span className="legend-val">{pendingPct}%</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-dot" style={{background: '#EF9F27'}}></span>
                        Returned
                        <span className="legend-val">{returnedPct}%</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default DonutChart;
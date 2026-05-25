import "./MetricCard.css";
import Card from "../Card (shell)/Card.tsx";
import type {MetricCardProps} from "../../Interfaces/Interfaces.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function MetricCard({label, value, icon, subtext, colorClass}: MetricCardProps) {

    return (
        <Card>
            <p className="metric-label">{label}</p>
            <p className="metric-value">{value}</p>
            <span className="d-flex gap-2 align-items-center">
                <FontAwesomeIcon className={`metric-subtext ${colorClass}`} icon={icon}/>
                <p className={`metric-subtext ${colorClass}`}>{subtext}</p>
            </span>
        </Card>
    );
}

export default MetricCard;
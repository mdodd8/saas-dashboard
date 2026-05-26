import "./RecentActivity.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import Card from "../Card (shell)/Card.tsx";

interface Activity {
    icon: IconDefinition;
    bg: string;
    text: string;
    time: string;
    createdAt: string;
}

interface RecentActivityProps {
    activities: Activity[];
}


function RecentActivity({ activities }: RecentActivityProps) {

    return (
        <Card title="Recent activity">
                <div className="activity-list">
                    <ul>
                        {activities.map((a) => (
                            <li className="activity-item d-flex gap-2 align-items-center"
                            key={a.createdAt}>
                                <div className="activity-icon" >
                                    <FontAwesomeIcon icon={a.icon}/>
                                    <i className="ti ${a.icon}" style={{fontSize: '14px', color: 'var(--color-text-tertiary)'}} aria-hidden="true"></i></div>
                                <div>
                                    <div className="activity-text">{a.text}</div>
                                    <div className="activity-time">{a.time}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        </Card>

    )
}

export default RecentActivity;
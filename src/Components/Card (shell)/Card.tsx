import React from "react";
import "./Card.css";

type CardProps = {
    title?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    children: React.ReactNode;
    className?: string;
}


function Card({ title, action, children, className }: CardProps) {
    return (
        <div className={`card ${className}`}>
            {(title || action) && (
                <div className="card-header">
                    {title && <h3 className="card-title">{title}</h3>}
                </div>
            )}
            <div style={{padding: '1rem'}}>{children}</div>
        </div>
    )
}

export default Card;
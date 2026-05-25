import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface Employee {
    id: number;
    name: string;
    role: string;
    tenure: string;
    sales: number;
    ordersCompleted: number;
    target: number;
    commission: number;
    attendance: number;
    performance: number;
    satisfaction: number;
    color: number;
    quarterly: number[];
    teamQ: number[];
    activity: {icon: IconDefinition, bg: string, text: string, time: string, createdAt: string}[],
    orders: {id:number,client: string, amount: string,status: string}[]
}


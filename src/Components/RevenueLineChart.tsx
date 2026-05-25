
import type { QuarterlyChartProps } from '../Interfaces/Interfaces.ts';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import Card from "./Card (shell)/Card.tsx";



function LineChartComponent({ data, employeeName }: QuarterlyChartProps) {

    return (
        <Card title="Revenue over time">
            <div style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
                        <Tooltip formatter={(value) =>
                            `$${Number(value).toLocaleString()}`} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="individual"
                            stroke="#4A72E8"
                            name={employeeName}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="team"
                            stroke="#dea145"
                            name="Team average"
                            strokeWidth={2}
                            strokeDasharray="4 3"
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>

    )
}

export default LineChartComponent;
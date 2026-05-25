import "./DonutChart.css";
import Card from "../Card (shell)/Card.tsx";



function DonutChart() {


    return (
        <Card title="Orders By Status">
                <div className="donut-wrap">
                    <svg width="200" height="200" viewBox="0 0 100 100" aria-hidden="true">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-border-tertiary)"
                                strokeWidth="14"/>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#378ADD" strokeWidth="14"
                                strokeDasharray="143 96" strokeDashoffset="25" strokeLinecap="butt"/>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#1D9E75" strokeWidth="14"
                                strokeDasharray="72 167" strokeDashoffset="-118" strokeLinecap="butt"/>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#EF9F27" strokeWidth="14"
                                strokeDasharray="24 215" strokeDashoffset="-190" strokeLinecap="butt"/>
                    </svg>
                    <div className="legend">
                        <div className="legend-item"><span className="legend-dot"
                                                           style={{background: '#378ADD'}}></span>Fulfilled<span
                            className="legend-val">60%</span></div>
                        <div className="legend-item"><span className="legend-dot"
                                                           style={{background: '#1D9E75'}}></span>Pending<span
                            className="legend-val">30%</span></div>
                        <div className="legend-item"><span className="legend-dot"
                                                           style={{background: '#EF9F27'}}></span>Returned<span
                            className="legend-val">10%</span></div>
                    </div>
                </div>

            {/*<PieChart width={400} height={400}>*/}
            {/*    <Pie*/}
            {/*        activeShape={{*/}
            {/*            fill: 'red',*/}
            {/*        }}*/}
            {/*        data={[*/}
            {/*            { name: 'Page A', uv: 590, background: '#378ADD' },*/}
            {/*            { name: 'Page B', uv: 590, background: '#1D9E75' },*/}
            {/*            { name: 'Page C', uv: 868, background: '#EF9F27' },*/}
            {/*        ]}*/}
            {/*        dataKey="uv"*/}
            {/*        isAnimationActive={true}*/}
            {/*    />*/}
            {/*    <Tooltip defaultIndex={2} />*/}
            {/*</PieChart>*/}
        </Card>

    )
}

export default DonutChart;
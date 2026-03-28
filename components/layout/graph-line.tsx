import React from 'react'

export default function GraphLine() {
    const color = '#F36F21',
        animationDuration = '2s',
        points = '80,235 200,180 320,110 390,150 620,45',
        maxWidth = 680,
        showAxes = true
    const pointsArray = points.trim().split(/\s+/);
    const lastPoint = pointsArray[pointsArray.length - 1].split(',');
    const endX = lastPoint[0];
    const endY = lastPoint[1];
    return (
        <div className='absolute z-10 h-full' style={{ width: '100%', maxWidth }}>
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        {`
                            @keyframes draw {
                                from { stroke-dashoffset: 900; }
                                to   { stroke-dashoffset: 0; }
                            }
                            @keyframes dot-pop {
                                0%, 60% { r: 0; opacity: 0; }
                                80%     { r: 8; opacity: 1; }
                                100%    { r: 6; opacity: 1; }
                            }
                            .chart-line {
                                stroke-dasharray: 900;
                                stroke-dashoffset: 900;
                                animation: draw ${animationDuration} cubic-bezier(0.4, 0, 0.2, 1) infinite;
                            }
                            .end-dot {
                                animation: dot-pop ${animationDuration} cubic-bezier(0.4, 0, 0.2, 1) infinite;
                            }
                            .axis-stroke { stroke: #d1d5db; }
                            @media (prefers-color-scheme: dark) {
                                .axis-stroke { stroke: #3f3f3f; }
                            }
                        `}
                    </style>
                </defs>

                {/* Axes */}
                {showAxes && (
                    <>
                        <line
                            x1="80" y1="240" x2="620" y2="240"
                            className="axis-stroke"
                            vectorEffect="non-scaling-stroke" /* Add this! */
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <line
                            x1="80" y1="240" x2="80" y2="40"
                            className="axis-stroke"
                            vectorEffect="non-scaling-stroke" /* Add this! */
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </>
                )}

                {/* Chart line */}
                <polyline
                    className="chart-line"
                    fill="none"
                    stroke={color}
                    strokeWidth="3.5"
                    vectorEffect="non-scaling-stroke" /* Add this! */
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                />

                {/* Dot at the end */}
                <circle
                    className="end-dot"
                    fill={color}
                    cx={endX}
                    cy={endY}
                    r="0"
                />
            </svg>
        </div>
    )
}

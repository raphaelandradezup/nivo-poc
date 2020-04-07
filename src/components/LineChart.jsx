import React from 'react'

import { Line } from '@nivo/line'
import { lineData } from './helper'

const defaultProps = {
    width: 500,
    height: 250,
    margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    },
    xScale: { type: 'point' },
    yScale: { type: 'linear', min: '0', max: '100', stacked: true, reverse: false },
    colors: ['#00CF5A'],
    pointSize: 10,
    pointColor: { from: 'color', modifiers: [] },
    pointBorderWidth: 5,
    enableCrosshair: false,
    useMesh: true
}

const LineChart = () => {

    return <Line data={lineData} {...defaultProps} />
}

export default LineChart;
import React from 'react'

import { Pie } from '@nivo/pie'
import { pieData } from './helper'

const defaultProps = {
    width: 500,
    height: 550,
    fit: true,
    margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    animate: true,
    enableRadialLabels: false,
    motionStiffness: 90,
    motionDamping: 15
}

const fancyStyles = {
    innerRadius: 0.6,
    padAngle: 0.7,
    cornerRadius: 5,
    colors: ['green', 'yellow', 'orange', 'red', 'blue']
}

const legends = [
    {
        anchor: 'bottom',
        direction: 'row',
        itemWidth: 100,
        itemHeight: 35,
        itemTextColor: 'pink',
        symbolSize: 18,
        symbolShape: 'circle',
        translateY: 20,
        effects: [
            {
                on: 'hover',
                style: {
                    itemTextColor: '#000'
                }
            }
        ]
    }
]

const sliceProps = {
    enableSlicesLabels: true,
    sliceLabel: (dt) => `${dt.value}%`,
    slicesLabelsTextColor: 'white'
}

const PieChart = () => {
    return <Pie
        data={pieData()}
        {...defaultProps}
        {...fancyStyles}
        {...sliceProps}
        legends={legends}
    />
}

export default PieChart;
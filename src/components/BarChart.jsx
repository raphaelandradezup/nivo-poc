import React from 'react'

import { Bar } from '@nivo/bar'
import { barData, labels } from './helper'

const defaultProps = {
    height: 250,
    width: 500,
    margin: {
        top: 20,
        right: 30,
        bottom: 20,
        left: 30
    },
    groupMode: 'grouped',
    keys: Object.keys(labels),
    indexBy: 'month',
    enableLabel: false,
    minValue: 0,
    maxValue: 100
}

const fancyStyle = {
    padding: 0.2,
    innerPadding: 3,
    borderRadius: 2,
    colors: ['#00CF5A', '#FDD030', '#FF7A00', '#D60019', 'blue'],
    animate: true,
}

const BarChar = () => {

    return <Bar
        data={barData}
        {...defaultProps}
        {...fancyStyle}
    />
}

export default BarChar;

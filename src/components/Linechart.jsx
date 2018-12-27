import React from 'react';
import { withRouter } from 'react-router';
import { LinePlot } from 'd3plus-react'

import data from '../database/linechart.json'

class LinePlotView extends React.Component {
    state = {
        methods: {
            data: [
                { id: "alpha", x: 4, y: 7 },
                { id: "alpha", x: 5, y: 25 },
                { id: "alpha", x: 6, y: 13 },
                { id: "beta", x: 4, y: 17 },
                { id: "beta", x: 5, y: 8 },
                { id: "beta", x: 6, y: 13 }
            ],
            groupBy: "id",
            shapeConfig: {
                Line: {
                    strokeWidth: 5
                }
            }
        }
    }

    render() {
        const { state } = this;
        return (
            <LinePlot config={state.methods} />
        )
    }
}

export default withRouter(LinePlotView);
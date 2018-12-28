import React from 'react';
import { LinePlot } from 'd3plus-react'
// import axios from 'axios'

export default props => {
    const methods = {
        data: props.data.reverse(),
        groupBy: "type",
        x: "datetime",
        y: "value",
        shapeConfig: {
            Line: {
                strokeWidth: 5
            }
        }
    };

    return (
        <LinePlot config={methods} />
    )
}
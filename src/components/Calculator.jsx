import React from 'react'
import Keyboard from './Keyboard'
import Result from './Result'

function Calculator({ dispatch, theme, result, example }) {
    return (
        <div class="wrapper" style={}>
            <div class="dark">
                <Keyboard dispatch={dispatch} />
                <Result result={result} exmaple={example} />
            </div>
        </div>
    )
}

export default Calculator

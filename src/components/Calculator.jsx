import React from 'react'
import Keyboard from './Keyboard'
import Result from './Result'

function Calculator({ dispatch, theme, result, example }) {
    return (
        <div class="wrapper" style={theme == "light" ? {background: "black"} : {background: "white"}}>
            <div class={theme}>
                <Result result={result} example={example} dispatch={dispatch} theme={theme} />
                <Keyboard dispatch={dispatch} />
            </div>
        </div>
    )
}

export default Calculator

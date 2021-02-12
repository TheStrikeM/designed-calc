import React from 'react'
import {setTheme} from '../redux/actions/theme'

function Result({ result, example, dispatch, theme }) {

    const image_theme = theme == "light" ? "light" : "dark"

    return (
        <div class="result">

            <div class="controller">
                <img src={"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/" + image_theme + "-moon.svg"}  onClick={() => dispatch(setTheme("dark"))} alt="" class="controller__item" />
                <img src={"https://raw.githubusercontent.com/TheStrikeM/designed-calc/main/src/assets/" + image_theme + "-sun.svg"} onClick={() => dispatch(setTheme("light"))} alt="" class="controller__item" />
            </div>

            <div class="result__sample">{example}</div>
            <div class="result__result">{result}</div>
                
        </div>
    )
}

export default Result

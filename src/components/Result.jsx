import React from 'react'

function Result({ result, example }) {
    return (
        <div class="result">

            <div class="controller">
                <img src="https://localhost:9999/assets/dark/moon.svg" alt="" class="controller__item" />
                <img src="https://localhost:9999/assets/dark/sun.svg" alt="" class="controller__item" />
            </div>

            <div class="result__sample">120 x 5</div>
            <div class="result__result">26000</div>
                
        </div>
    )
}

export default Result

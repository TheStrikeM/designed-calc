import React from 'react'
import { clearResult, clearExample, solveExample, addToExample } from '../redux/actions/result'

export default function Keyboard({ dispatch }) {
    return (
        <div class="keyboard">
            <div class="dec">
                    <img src="https://localhost:9999/assets/dark/polosa.svg" alt="" />
            </div>

            <div class="buttons">
                <div class="button__c" onClick={() => {
                    dispatch(clearResult())
                    dispatch(clearExample())
                }}>C</div>
                <div class="button__plmin" onClick={() => dispatch(addToExample("-"))}>
                    <img src="https://localhost:9999/assets/plmin.svg" alt="" />
                </div>
                    <div class="button__percent" onClick={() => dispatch(addToExample("%"))}>
                        <img src="img/percent.svg" alt="" />
                    </div>
                    <div class="button__act" onClick={() => dispatch(addToExample("/"))}>
                        <img src="https://localhost:9999/assets/split.svg" alt="" />
                    </div>

                    <div class="button__number" onClick={() => dispatch(addToExample("7"))}>7</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("8"))}>8</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("9"))}>9</div>
                    <div class="button__act" onClick={() => dispatch(addToExample("*"))}>
                        <img src="https://localhost:9999/assets/mult.svg" alt="" />
                    </div>

                    <div class="button__number" onClick={() => dispatch(addToExample("4"))}>4</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("5"))}>5</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("6"))}>6</div>
                    <div class="button__act" onClick={() => dispatch(addToExample("-"))}>
                        <img src="https://localhost:9999/assets/-.svg" alt="" />
                    </div>

                    <div class="button__number" onClick={() => dispatch(addToExample("1"))}>1</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("2"))}>2</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("3"))}>3</div>
                    <div class="button__act" onClick={() => dispatch(addToExample("+"))}>
                        <img src="https://localhost:9999/assets/+.svg" alt="" />
                    </div>
                    
                    <div class="button__null" onClick={() => dispatch(addToExample("0"))}>0</div>
                    <div class="button__number" onClick={() => dispatch(addToExample("."))}>.</div>
                    <div class="button__result" onClick={() => dispatch(solveExample())}>=</div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Keyboard() {
    return (
        <div class="keyboard">
            <div class="dec">
                    <img src="img/dark/polosa.svg" alt="" />
            </div>

            <div class="buttons">
                <div class="button__c">C</div>
                <div class="button__plmin">
                    <img src="img/plmin.svg" alt="" />
                </div>
                    <div class="button__percent">
                        <img src="img/percent.svg" alt="" />
                    </div>
                    <div class="button__act">
                        <img src="img/split.svg" alt="" />
                    </div>

                    <div class="button__number">7</div>
                    <div class="button__number">8</div>
                    <div class="button__number">9</div>
                    <div class="button__act">
                        <img src="img/mult.svg" alt="" />
                    </div>

                    <div class="button__number">4</div>
                    <div class="button__number">5</div>
                    <div class="button__number">6</div>
                    <div class="button__act">
                        <img src="img/-.svg" alt="" />
                    </div>

                    <div class="button__number">1</div>
                    <div class="button__number">2</div>
                    <div class="button__number">3</div>
                    <div class="button__act">
                        <img src="img/+.svg" alt="" />
                    </div>
                    
                    <div class="button__null">0</div>
                    <div class="button__number">.</div>
                    <div class="button__result">=</div>
            </div>
        </div>
    )
}

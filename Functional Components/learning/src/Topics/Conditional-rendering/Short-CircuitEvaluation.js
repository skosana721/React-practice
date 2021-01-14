import React, { useState } from 'react'
// short-Circuit evaluation
// short-circuit - is where an expression is stopped being evaluated as oon as its outcome is determined.
// OR operator - if the value is truthy the 'OR' operator will only check the first condition and vice verse
// AND operator - if the value is truthy the 'AND' operator will ony check the second condition and vice verse
// ternary operator
function ShortCircuitEvaluation () {
    const [text, settext] = useState('')
    const [isError, setIsError] = useState(true)
    const firstText = text || 'Wazzup'
    const secondText = text && 'Hola'
    return (
        <div>
            {console.log('isError', isError)}
            <h2>{firstText}</h2>
            {!text && <h1>Nigga</h1>}
            <button className='btn' onClick={()=>setIsError(!Error)}>toggle</button>
            {isError || <h1>Error...</h1>}
            {isError ? <h2>There is no error</h2> : <div>
                <p>Something you did cause an error</p>
                
            </div>}
        </div>
    )
}

export default ShortCircuitEvaluation

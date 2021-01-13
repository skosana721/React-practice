import React, { useState, useEffect } from 'react';
// useEffect runs on every render component
// second parameter is dependency list which is an array
// if the array in the second param is empty the useEffect will only run once
function UseEffectBasics () {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('useEffect using..')
        if (value >= 1) {
            
            document.title = `New Message(${value})`
        }
    },[value])
    console.log('component rendered')
    return (
        <div>
            <h1>{value}</h1>
            <button className='btn' onClick={()=> setValue(value + 1)}>Click</button>
        </div>
    )
}

export default UseEffectBasics

import React,{useState, useEffect} from 'react'

function UseEffectBasics () {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('useEffect using..')
        if (value >= 1) {
            
            document.title = `New Message(${value})`
        }
    })
    console.log('component rendered')
    return (
        <div>
            <h1>{value}</h1>
            <button className='btn' onClick={()=> setValue(value + 1)}>Click</button>
        </div>
    )
}

export default UseEffectBasics

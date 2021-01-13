import React from 'react'

function Error () {
    
    let heading = 'Hooks'
    const handleClick = () => {
        heading = 'React!!'
    }
    return (
        <div>
            <h2>{heading}</h2>  
            <button type='button' onClick={handleClick}>Click</button>
        </div>
    )
}

export default Error;

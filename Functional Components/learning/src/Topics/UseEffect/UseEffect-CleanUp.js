import React, { useEffect, useState } from 'react';
//clean function 
//second argument

function UseEffectCleanUp () {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
        return () => {
            
            window.removeEventListener('resize', () => {
                setSize(window.innerWidth);
          })  
        }
    })
     
    
    return (
        <div>
            <h1>Window</h1>
            <h2>{size}</h2>
            
        </div>
    )
}

export default UseEffectCleanUp

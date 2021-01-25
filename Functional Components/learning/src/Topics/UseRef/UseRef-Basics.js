import React, {useEffect, useRef} from 'react'

// preserves values
// Does not trigger re-render
// targets DOM nodes/elements
function UseRefBasics () {
    const refContainer = useRef(null)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(refContainer.current.value)  
    }
    useEffect(() => {
        refContainer.current.focus()
        console.log(refContainer.current)
    })
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UseRefBasics

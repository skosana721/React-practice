import React,{useState, useEffect} from 'react'
// Show and hide component

function ShowHide () {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button className='btn' onClick={() => setShow(!show)}>Show/hide</button> 
            {show && <Item/>}
        </div>
    )
}
const Item = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        };
}, [])
    return (
        <div>
            <h2>Window</h2>
            <h4>Size:{ size} </h4>
        </div>
    )
}

export default ShowHide

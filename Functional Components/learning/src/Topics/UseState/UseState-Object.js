import React,{useState} from 'react'

function UseStateObject () {
    const [car, setCar] = useState({ brand: 'Audi', model: 'A7' })
    const changeModel = () => {
        setCar({...car, model: 'A8'})
    }
    return (
        <div>
            <h2>{car.brand}</h2>
            <h2>{car.model}</h2>
            <button className='btn' onClick={changeModel}>Change</button>
        </div>

    )
}

export default UseStateObject; 

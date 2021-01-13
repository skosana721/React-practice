import React,{useState} from 'react'
import {data} from '../../data'

function UseStateArray () {
  const [place, setPlace] = useState(data)
  const handleClick = () => {
    setPlace([])
  }
  const removeItem =(id) => {
    let newPlace = place.filter(item => item.id !== id)
    setPlace(newPlace)
  }
    return (
      <React.Fragment>
        {place.map(item => {
          const {id, country} = item
          return (
            <div key={id} className='item'>
              <h3>{country}</h3>
              <button onClick={()=>removeItem(id)}>remove</button>
            </div>
          )
        })}
        <button className='btn' onClick={handleClick}>Clear</button>
      </React.Fragment>
    );
}

export default UseStateArray;

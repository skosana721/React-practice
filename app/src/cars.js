import React from 'react';
const Car = (props) => {
  
  const { img, carName, year } = props;
  const clickHandler = () => {
    alert('Awesome')
  }
  return (
    <article>
      <img src={img} alt="" />
      <h1>{carName}</h1>
      <h4>{year}</h4>
      <button type='button' onClick={clickHandler}>click</button>
      
      
    </article>
  )
}
export default Car;

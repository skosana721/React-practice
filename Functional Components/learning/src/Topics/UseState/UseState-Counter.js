import React,{useState} from 'react';

function UseStateCounter (props) {
    const [value, setValue] = useState(0)
  const increment = () => {
      
        setValue(value+1)
    }
    const reset = () => {
        setValue(0)
    }
    const decrement = () => {
        setValue(value-1)
    }
    return (
      <div>
        <section style={{ margin: "4rem 0" }}>
          <h2>Counter</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={decrement}>
            decrease
          </button>
          <button className="btn" onClick={reset}>
            Rest
          </button>
          <button className="btn" onClick={increment}>
            increase
          </button>
        </section>
      </div>
    );
}

export default UseStateCounter;
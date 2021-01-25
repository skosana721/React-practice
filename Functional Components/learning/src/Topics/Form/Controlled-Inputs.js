import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ControlledInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {id:uuidv4(), name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
        console.log('Nothing to submit')
    }
}

  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            value={name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            value={email}
          />
        </div>
        <button type="submit">Submit</button>
          </form>
          {people.map(person => {
              const { id, name, email } = person
              const deleteItem = (id) => {
                  const newPerson = people.filter(person => person.id !== id)
                  setPeople(newPerson)
                  
              }
              return (
                  <div className="item" key={id}>
                      <h3>{name}</h3>
                      <p>{email}</p>
                      <button onClick={()=> deleteItem(id)}>delete</button>
                  </div>
              )
          })}
          
    </div>
  );
}

export default ControlledInputs;

import React, { useState } from "react";

function MultipleInputs () {
    const [person, setPerson] = useState({ name: '', surname: '', email: '' })
    const [formInfo, setFormInfo] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target
       setPerson({...person, [name]: value}) 
    }
    const handleSubmit = (e) => {
        const {name, surname, email} = person
        e.preventDefault();
        if (name && surname && email) {
            const newPerson = { ...person, name, surname, email }
            setFormInfo([...formInfo, newPerson])
        } 
    }
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            name="name"
            value={person.name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="surname">Surname </label>
          <input
            type="type"
            onChange={handleChange}
            id="surname"
            name="surname"
            value={person.surname}
          />
        </div>
        <div className="form-control" onSubmit={handleSubmit}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            name="email"
            value={person.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputs;

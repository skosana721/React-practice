import React, { useState } from "react";
import { data } from "../../data";
//prop-drilling - is the process by which you pass data from one part of 
// the React Component tree to another by going through other parts that do 
// not need the data but only help in passing it around.
// fix - to prop-drilling is context api, redux(for more complex cases)

function PropDrilling() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <div>
      <h2>Prop Drilling</h2>
      <List people={people} removePerson={removePerson} />
    </div>
  );
}
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
          return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
          
      })}
    </>
  );
};
const SinglePerson = ({ id, name ,removePerson}) => {
    
  return (
    <div className="item">
          <h4>{name}</h4>
          <button onClick={()=> removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;

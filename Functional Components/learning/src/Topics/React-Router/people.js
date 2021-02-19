import React, { useState } from "react";
import { data } from "../../data";

function People() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default People;

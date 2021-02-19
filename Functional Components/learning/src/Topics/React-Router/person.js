import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

function Person() {
  const { id } = useParams();
  const [name, setName] = useState("default Name");
  useEffect(() => {
    const NewPerson = data.filter((person) => person.id === parseFloat(id));

    setName(NewPerson[0].name);
  }, [id]);

  return (
    <div>
      <h2>{name}</h2>

      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
}

export default Person;

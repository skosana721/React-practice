import React, { useState } from "react";

function Register() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log("formInfo", formInfo);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          value={formInfo.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={formInfo.surname}
          onChange={handleChange}
          name="surname"
          placeholder="Surname"
        />
        <br />
        <input
          type="email"
          value={formInfo.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={formInfo.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;

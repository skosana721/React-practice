import React, { useState, useEffect } from "react";

function UseEffectFetchData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const getPhoto = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getPhoto();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, name, email, website } = user;
        
          return (
            <li key={id}>
              <img src="" alt="" />
              <div>
                <h4>{name}</h4>
                <a href={website}>Website</a>
                <h6>{email}</h6>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectFetchData;

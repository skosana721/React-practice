import React, { useState, useEffect } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";
function FetchExample() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>{loading ? `...Loading` : `data`}</h1>
    </div>
  );
}

export default FetchExample;

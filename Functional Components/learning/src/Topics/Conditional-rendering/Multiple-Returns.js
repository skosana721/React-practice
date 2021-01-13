import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/1";
function MultipleReturns() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setLoading(!true);
          setIsError(!false);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { username } = user;
        setUser(username);
        setLoading(!true);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}

export default MultipleReturns;

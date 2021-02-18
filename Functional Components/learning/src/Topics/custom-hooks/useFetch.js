import { useState, useEffect } from "react";

export function useFetch(url) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, [url]);
  return { loading, user };
}

import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
const URL = "https://jsonplaceholder.typicode.com/users";
function FetchExample() {
  const { loading, user } = useFetch(URL);
  console.log(user);
  return (
    <div>
      <h1>{loading ? `...Loading` : `data`}</h1>
    </div>
  );
}

export default FetchExample;

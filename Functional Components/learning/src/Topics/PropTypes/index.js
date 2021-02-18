import React from "react";
import User from "./User";
import { useFetch } from "../custom-hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";
function Index() {
  const { user } = useFetch(URL);
  return (
    <div>
      <section className="users">
        {user.map((item) => {
          return <User key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
}

export default Index;

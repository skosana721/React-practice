import React from "react";
import PropTypes from "prop-types";
const User = ({ name }) => {
  return (
    <article>
      <li>
        <h4>{name}</h4>
      </li>
    </article>
  );
};
User.propTypes = {
  name: PropTypes.string.isRequired,
};
User.defaultProps = {
  name: "User name",
};
export default User;

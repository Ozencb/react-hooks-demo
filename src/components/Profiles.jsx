// Styles
import '../styles/Profile.css';

// Packages
import React from 'react';

const Profiles = (props) => (
  <div className="profiles">
    <img
      className="profile-image"
      src={props.users[props.count].avatar_url}
      alt=""
    />
    <div className="username">
      <a href={props.users[props.count].html_url}>
        {props.users[props.count].login.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}
      </a>
    </div>
  </div>
);

export default Profiles;

/*
  This function creates a component called Profiles, which displays a name and an image
  that it receives from "users" object that is being passed from the main function as a prop, where
  this component is being called and rendered.

  This component is created in the main function like this:

        <Profiles users={users} count={count} />

  As we can see, the prop is receiving two different values called "count" and "users".
  These become the members of the "props" object, and can be called with "props." adjective.
*/

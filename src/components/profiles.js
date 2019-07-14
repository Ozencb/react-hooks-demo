/*
  This function creates a component called Profiles, which displays a name and an image
  that it receives from "users" object that is being passed from the main function as a prop, where
  this component is being called and rendered. 

  This component is created in the main function like this:

        <Profiles users={users} count={count} />

  As we can see, the prop is receiving two different values called "count" and "users".
  These become the members of the "props" object, and can be called with "props." adjective.
*/

import React from "react";

function Profiles(props) {
  return (
    <div className="profiles">
      <h1>
        {props.users[props.count].login.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </h1>
      <img
        src={props.users[props.count].avatar_url}
        alt=""
      />
    </div>
  );
}

export default Profiles;

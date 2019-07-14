import React from "react";
import { useFetch }  from "./fetchHook";
import { Icon } from "antd";

/*
  This function displays repositories of the GitHub user that is shown at that time.
*/

function Repos(props) {
  const [userRepos, reposLoading] = useFetch(`https://api.github.com/users/${props.users[props.count].login}/repos`); 
  // This URL string has some variables in it which change everytime Repos function receives new props values.
  // In order to express that there will be some variables in our string, we have to use template literals or string literals (``).

  // The rest of the function utilises the same "loading ?" ternary logic what we have used in our App function,
  // then displays every repo of the user with the .map() function
                                                                                                                      
  return reposLoading ? (
    <div className="App">
      <Icon
        style={{ color: "white", fontSize: "50px", verticalAlign: "middle" }}
        type="loading"
      />
    </div>
  ) : (
    <div style={{ marginTop: "25px" }} className="repos">
      {userRepos.map(function(repo) {
        return (
          <h4 key={repo.id} style={{ color: "white"}}>
            <a href={repo.html_url}>
              {repo.name} - <Icon type="star" theme="filled" />
              {repo.stargazers_count}
            </a>
          </h4>
        );
      })}
    </div>
  );
}

export default Repos;

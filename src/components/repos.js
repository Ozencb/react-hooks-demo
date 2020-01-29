import React from "react";
import { useFetch }  from "./FetchHook";

// Styles
import "../styles/Repos.css";
import 'font-awesome/css/font-awesome.min.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  This function displays repositories of the GitHub user that is shown at that time.
*/

function Repos(props) {
  const [userRepos, reposLoading] = useFetch(`https://api.github.com/users/${props.users[props.count].login}/repos`); 
  // This URL string has some variables in it which change everytime Repos function receives new props values.
  // In order to express that there will be some variables in our string, we have to use template literals or string literals (``).
  

  // The rest of the function utilises the same "loading ?" ternary logic that we have used in our App function,
  // then displays every repo of the user with the .map() function
     
  return reposLoading ? (
    <div></div>                                                         

  ) : (
    <div className="repos">
      <hr />
      {
        userRepos.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1) // Sort userRepos by stargazers count
                 .map(function(repo) {                                               // Map the array
                    return ( 
                      <div className="repo" key={repo.id}>
                        <a href={repo.html_url}>
                          <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count} - {repo.name}
                        </a>
                      </div>
                    );})
                 .slice(0,5) // Show top five
      }
    </div>
  );
}

export default Repos;
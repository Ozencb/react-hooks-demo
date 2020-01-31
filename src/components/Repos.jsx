/* eslint-disable react/prop-types */

// Styles
import '../styles/Repos.css';
import 'font-awesome/css/font-awesome.min.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Packages
import React from 'react';

// Components
import useFetch from './FetchHook';

const Repos = (props) => {
  // Object destructuring
  const { user } = props;
  const { login } = user;

  // This URL string has some variables in it which change
  // everytime Repos function receives new props values.
  // In order to express that there will be some variables in our string,
  // we have to use template literals or string literals (``)
  const [userRepos, reposLoading] = useFetch(`https://api.github.com/users/${login}/repos`);

  // Sort userRepos by star count then take top five
  const chosenRepos = reposLoading ? null
    : userRepos.sort((a, b) => ((a.stargazers_count < b.stargazers_count) ? 1 : -1))
      .slice(0, 5);

  // The rest of the function utilises the same "loading ?" ternary logic
  // that we have used in our App function,
  // then displays every repo of the user with the .map() function
  return reposLoading ? (
    <div />
  ) : (
    <div className="repos">
      <hr />
      {
        chosenRepos.map((repo) => (
          <div className="repo" key={repo.id}>
            <a href={repo.html_url}>
              <FontAwesomeIcon icon={faStar} />
              {' '}
              {repo.stargazers_count}
              {' - '}
              {repo.name}
            </a>
          </div>
        ))
      }
    </div>
  );
};

export default Repos;

/*
  This function displays repositories of the GitHub user that is shown at that time.
*/

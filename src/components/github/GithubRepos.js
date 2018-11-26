import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const GithubRepos = ({ repos }) => (
    <ul>
        {map(repos, (repo, index) => (
        <li key={index}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
            </a>
        </li>
        ))}
    </ul>
);

GithubRepos.propTypes = {
    repos: PropTypes.array
};

export default GithubRepos;
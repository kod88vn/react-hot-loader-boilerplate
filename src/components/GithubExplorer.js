
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import { getRepos } from 'actions';
import InputDebounced from './_shared/InputDebounced';

class GithubExplorer extends Component {
  state = {
    username: 'kod88vn'
  }
  static propTypes = {
    getRepos: PropTypes.func,
    repos: PropTypes.array,
  };

  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = (username) => this.props.getRepos(username);

  render() {
    return (
      <div>
        <h1>Github Explorer</h1>
        <strong>Github username: </strong>
        <InputDebounced
          onChange={(value) => this.updateRepoList(value)}
          placeholder="Github username..."
          type="text"
          value={this.state.username}/>
        <ul>
          {map(this.props.repos, (repo, index) => (
            <li key={index}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { repos: state.repos }
};
const mapDispatchToProps = { getRepos };

export default connect(mapStateToProps, mapDispatchToProps)(GithubExplorer);

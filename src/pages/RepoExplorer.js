import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRepos } from '../actions';

// App.js
export class RepoExplorer extends Component {
    state = {
        username: 'kod88vn'
    };

  componentDidMount() {
    this.updateRepoList(this.state.username);
  }

  updateRepoList = username => this.props.getRepos(username);

  render() {
    return (
      <div>
        <h1>I AM AN ASYNC APP!!!</h1>
        <strong>Github username: </strong>
        <input
          type="text"
          value={this.state.username}
          onChange={ev => this.setState({ username: ev.target.value })}
          placeholder="Github username..."
        />
        <button onClick={() => this.updateRepoList(this.state.username)}>
          Get Lastest Repos
        </button>
        <ul>
          {this.props.repos.map((repo, index) => (
            <li key={index}>
              <a href={repo.html_url} target="_blank">
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

const ConnectedRepoExplorer = connect(mapStateToProps, mapDispatchToProps)(RepoExplorer);

export default ConnectedRepoExplorer;

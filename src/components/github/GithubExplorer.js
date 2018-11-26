
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRepos } from 'actions';
import InputDebounced from '../_shared/InputDebounced';
import GithubRepos from './GithubRepos';

class GithubExplorer extends Component {
  state = {};

  static propTypes = {
    getRepos: PropTypes.func,
    repos: PropTypes.array,
  };

  handleChange(username) {
    this.setState({ username });
    this.updateRepoList(this.state.username); 
  }

  updateRepoList(username) {
    this.props.getRepos(username);
  }

  render() {
    const { repos } = this.props;
    return (
      <div>
        <h1>Github Explorer</h1>
        <strong>Github username: </strong>
        <InputDebounced
          onChange={(value) => this.handleChange(value)}
          placeholder="Github username..."
          type="text" />
        {(repos.length) ?
          <GithubRepos {...{ repos }} /> : 
          <div>No repos was found with given username</div>}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { repos: state.repos }
};
const mapDispatchToProps = { getRepos };

export default connect(mapStateToProps, mapDispatchToProps)(GithubExplorer);

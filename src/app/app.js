// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// Action creators and helpers
import { establishCurrentUser } from '../modules/auth';
import { isServer } from '../store';

import Header from './header';
import Routes from './routes';

import './app.css';
import CommonTopBar from './components/common/common.topbar';
import CommonMenu from './components/common/common.menu';
import CommonFooter from './components/common/common.footer';

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      this.props.establishCurrentUser();
    }
  }

  render() {
    return (
      <div id="app">
        {/* <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        /> */}
        <CommonTopBar></CommonTopBar>
        <CommonMenu></CommonMenu>
        <div id="content">
          <Routes />
        </div>
        <CommonFooter></CommonFooter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ establishCurrentUser }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

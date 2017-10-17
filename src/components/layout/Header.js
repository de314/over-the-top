import React from 'react';
import _ from 'lodash';
import { selectIsAnon } from '../../redux/selectors'
import { loginUserEvent, loginUserSuccess, logoutUser } from '../../redux/actions'

import { connect } from 'react-redux';

import { Link, NavLink } from 'react-router-dom'

const AuthNav = ({ auth, onLogout }) => (
  <div className="AuthNav collapse navbar-collapse">
    <nav className="navbar-nav mr-auto">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/link">Link</NavLink>
      <NavLink className="nav-link disabled" to="/unknown">Disabled</NavLink>
    </nav>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={onLogout}>Logout</button>
  </div>
);

const AnonNav = ({ onLogin }) => (
  <div className="AnonNav collapse navbar-collapse"></div>
);

let Header = ({ isAnon, onLogin, onLogout }) => {
  let navContent = isAnon ? (<AnonNav onLogin={onLogin} />) : (<AuthNav onLogout={onLogout} />)
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">tmp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {navContent}
      </nav>
    </div>
  )
};



Header = connect(
  (state, props) => ({
    isAnon: selectIsAnon(state)
  }),
  (dispatch, ownProps) => ({
    onLogin: () => {
      dispatch(loginUserEvent())
      setTimeout(() => dispatch(loginUserSuccess({})), 500)
    },
    onLogout: () => dispatch(logoutUser())
  })
)(Header)

export default Header;

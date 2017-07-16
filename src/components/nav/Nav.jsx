'use strict';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Dropdown } from '../';
import './nav.scss';

class Nav extends Component {

account = () => {
    this.props.history.push('/account');
};
profile = () => {
    this.props.history.push('/profile');
};
    render() {
        console.log("props from nav", this.props);
        const user = {
            name: "prakash",
            image: "./images/user.png"
        };
       const dropdownListItem = [{
            name: "account",
            onClick: this.account,
            icon: "settings"
        },
        {
            name: "profile",
            onClick: this.profile,
            icon: "exit_to_app"
        }];

        const className = "default";
        const ButtonToNavigate = ({ title, history }) => (
            <button
                type="button"
                onClick={() => history.push('/my-new-location')}
            >
                {title}
            </button>
        );
        const Profile = ({ title, history }) => (
            <button
                type="button"
                onClick={() => history.push('/profile')}
            >
                {title}
            </button>
        );
        return (
            <div className="navbar">
                <li><NavLink exact to="/" activeClassName="active">Home </NavLink></li>
                <li><NavLink exact to="/dashboard" activeClassName="active">Dashboard </NavLink></li>
                <li><Route path="/" render={(props) => <ButtonToNavigate {...props} title="Button as NavLivk" />} /></li>
                <li><Dropdown user={user} dropdownListItem={dropdownListItem} className={className} /></li>
            </div>
                );
    }
}
export default withRouter(Nav);

//Remarks
/****************************************************
 1.exact to is needed in Navlink to work for activeClassName style.







 *******************************************************/
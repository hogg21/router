import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import User from "./User.jsx";


class Users extends React.Component {
    render() {
        const { match } = this.props;
        return (
            <div className="page">
                <h1>Users</h1>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/users/github">Github</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/users/facebook">Facebook</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path={`${match.url}/:userId`} component={User}></Route>
                    <Route path={match.url}>
                        <span>Select a user please</span>
                    </Route>
                </Switch>
            </div>
        );
    }
}
export default Users;
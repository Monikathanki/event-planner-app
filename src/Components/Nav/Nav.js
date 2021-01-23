import React from "react";
import TokenService from "../../Services/TokenService";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.handleLogout(e);
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        {!TokenService.hasAuthToken() ? (
          <>
            <div className="nav-home">
              <div className="nav-logo">
                <h1>
                  <Link id = "link"to="/">Event Planner</Link>
                </h1>
              </div>
              <div className="nav-links">
                <Link id= "link" to="/">Home</Link>
                <Link to="/login">
                  <button id="button">Login</button>
                </Link>
                <Link to="/register">
                  <button id="button">Register</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div id="main-menu" className="dashboard-menu">
            <h1>
              <Link to="/dashboard">Event Planner</Link>
            </h1>
            <ul>
              <li>
                <h2>
                  <Link to="/dashboard">Home</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/calendar">Calendar</Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link to="/events">Events</Link>
                </h2>
              </li>
              <li>
                <Link to="/add-event">+ Event</Link>
              </li>

              <li>
                <h2>
                  <Link to="/teams">Teams</Link>
                </h2>
              </li>
              <li>
                <Link to="/add-team">+ Team</Link>
              </li>

              <li>
                <h2>
                  <button id = "button" onClick={(e) => this.handleLogout(e)}>Log Out</button>
                </h2>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}
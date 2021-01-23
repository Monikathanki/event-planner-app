import React from "react";
import { Link } from "react-router-dom";
//import config from "../../Config/Config";

export default class EventsList extends React.Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };


  render() {

    return (
      <aside
        className={
          this.props.match.url === "/add-event"
            ? "event-sidebar-hidden"
            : "event-sidebar"
        }
      >
        <h2>My Events</h2>
        <p>(events you created)</p>
        <ul>
          {this.props.events.filter((event) => event.team_id === this.props.team)&& this.props.events.map((event, i) => (
            <li key={i}>
              <div className="events-desktop">
                <Link to={`/events/${event.id}`}>
                  <h3>{event.title}</h3>
                </Link>
              </div>
              <div className="view-modal">
                <button onClick={this.showModal} className="view-modal-button">
                  <Link to={`/events/${event.id}`}>
                    <h2>{event.name}</h2>
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/add-event">
            <button>+ Event</button>
          </Link>
        </div>
      </aside>
    );
  }
}
import React from "react";
import { Link } from "react-router-dom";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";


export default class Event extends React.Component {
 

  handleDelete = () => {
    fetch(`${config.REACT_APP_API_BASE_URL}/events/${this.props.match.params.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(() => {
        this.props.deleteEvent(parseInt(this.props.match.params.id));

      });
  };

  render() {
    let event = this.props.events
    return(
      <section className="event-view">
        <div className="event-view-selected">
          {event && event.map((event, i) => 
              <React.Fragment key={i}>
                <h2 key={i}>{event.title}</h2>
                <h3>{event.location}</h3>
                <p>{event.description}</p>
                <div
                  className={
                    this.props.location.pathname === `/events/${event.id}`
                      ? "my-events"
                      : "tm-events"
                  }
                >
                  <div>
                    <Link to={`/edit-event/${event.id}`}>
                      <button>Edit Event</button>
                    </Link>
                  </div>
                  <div>
                    <button
                    className="delete-button"
                      onClick={this.handleDelete
                      }
                    >
                      Delete Event
                    </button>
                  </div>
                </div>


              </React.Fragment>
          )}

        </div>

      </section>
    )

  } 
}
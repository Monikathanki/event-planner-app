import React from "react";
import DummyStore from "../../DummyStore/DummyStore";
import { Link } from "react-router-dom";

export default class TeamList extends React.Component {
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
    const teamMembers = this.props.teamMembers;
    //console.log(this.props.teamMembers);

   const teamMember = this.props.match.params.id ? this.props.teams.find((team) => team.id === Number(this.props.match.params.id)) : "";
    return (
      <aside className="team-sidebar">
        <ul>
          {teamMembers.map((team, i) => (
            <li key={i}>
              <div className="team-desktop">
                <Link to={`/teams/team-member/${team.id}`}>
                  <h3 id="sidebar">{`${team.first_name} ${team.last_name}`}</h3>
                </Link>
              </div>
              <div className="view-modal">
                <button onClick={this.showModal} className="view-modal-button">
                  <Link to={`/teams/team-member/${team.id}`}>
                    <h2 id="team-link">{`${team.first_name} ${team.last_name}`}</h2>
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/add-team-member">
          <button>+ Add Team Member</button>
        </Link>
      </aside>
    );
  }
}

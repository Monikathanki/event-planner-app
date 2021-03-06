import React from "react";

export default class TeamMember extends React.Component {
  render() {
    const teams = this.props.teamMembers;
    //console.log(team)
    return (
      <section className="team-view">
        <div className="team-member-selected">
          {teams.map((team, i) =>
            team.id === Number(this.props.match.params.id) ? (
              <>
                <h2 key={i}>{`${team.first_name} ${team.last_name}`}</h2>
                <h3>Phone Number: {team.phone_number}</h3>
              </>
            ) : (
              ""
            )
          )}
        </div>
      </section>
    );
  }
}

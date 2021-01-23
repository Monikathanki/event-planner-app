import React from "react";
import { Link } from "react-router-dom";
import config from "../../Config/Config";
import TokenService from "../../Services/TokenService";
export default class AddTeamMember extends React.Component {
  handleAddTeamMember = (e) => {
    e.preventDefault();
    const { user_id } = TokenService.readJwtToken()
    const member = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      user_id,
      team_id: parseInt(e.target.teams.value)
    }
    fetch(`${config.REACT_APP_API_BASE_URL}/team-members`, {
      method: "POST",
      headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(member)
  })
  .then((res) => {
        if(!res.ok) throw new Error('error')
        return res.json()
     })
     .then(member => {
       this.props.updateTeamMember(member) 
     })
     this.props.history.push("/teams");
  }
  render() {
    // console.log(this.props.team && this.props.match.id)
    //
    return(

      <>
        <div className="add-team-view">
            <h2>Add Team member</h2>
              <form
                  onSubmit={this.handleAddTeamMember}
                  className="add-team-form"
              >
                <label htmlFor='teams'>Select Team</label>
                  <select id="teams" name="teams">
                     <option value="">..</option> 
                    {
                      this.props.teams && this.props.teams.map(team => (
                        <option key={team.id} value={team.id}>{team.title}</option>
                      ))
                    }
                  </select>
                  <br />
                <label>First Name: (required)</label>
                <input type="text" name="first_name" require="true"/>
                <br />
                <label>Last Name: (required)</label>
                <input type="text" name="last_name" require="true"/>
                <br />
                <label htmlFor="phone">Phone Number</label>
                 <input type="tel" name="phone_number" />
                <br />
                <button type="submit">Add Team Members</button>
              </form>
              <div>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
          </div>
      </>
    )
  }
}
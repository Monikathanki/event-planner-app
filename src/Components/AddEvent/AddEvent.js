import React from "react";

class AddEvent extends React.Component {
    state = {
        events: [
            {
                id: [],
                description: [],
                location: [],
                date: [],
                user_id: [],
                time_start: [],
                time_end: [],
                name: [],

            }
        ],
    }
    handleAddCal = (event) => {
        event.preventDefault();
        // elements will have an object with the values
        // of the inputs
        console.log(event.target.elements.start_time.value)
        let newEvent = {
            // id: event.target.elements.id.value,
            description: event.target.elements.description.value,
            location: event.target.elements.location.value,
            // date: event.target.date.value,
            // user_id: event.target.user_id.value,
            time_start: event.target.elements.start_time.value,
            time_end: event.target.elements.end_time.value,
            // name: event.target.elements.name.value,
        }
        let currentEvents = this.state.events;
        currentEvents.push(newEvent);
        this.setState({
            newEvent: currentEvents
        });

        this.props.history.push("/events")

    }

    handleCancel = () => {
        this.props.history.goBack("/events");
    };
    render() {
        return (
            <>
                <div>
                    <h2>Add a New Event</h2>
                    <form
                    onSubmit={(e) => this.handleAddCal(e)}
                        className="add-event-form">
                        <label>What time is your event?</label>
                        <p>My event starts at:</p>
                        <input type="time" name="start_time" />
                        <p>My event ends at:</p>
                        <input type="time" name="end_time" />
                        <label>Add an address:</label>
                        <input type="text" name="location" />
                        <label>Add a description:</label>
                        <input type="text" name="description" />
                        <input type="submit" value="Add to calendar."  />
                    </form>
                    
                </div>
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            </>
        )
    }
}


export default AddEvent;
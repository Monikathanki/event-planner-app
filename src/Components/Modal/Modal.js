import React from "react";
import { Link } from "react-router-dom";
// import DummyStore from "../../DummyStore/DummyStore";

function Modal(props) {
    const showHideClassName = props.show
        ? "modal display-block"
        : "modal display-none";
    const id = Number(props.match.params.id);


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {props.match.pathname === `/events/${id}` ? (
                    <>
                        <h2>{props.events.name}</h2>
                        <h3>{`${props.events.time_start} ${props.events.time_end}`}</h3>
                        <h3>{props.events.location}</h3>
                        <h3>{props.events.description}</h3>
                
                        <div>
                            <Link to="/add-event">
                                <button>+ Event</button>
                            </Link>
                        </div>
                    </>
                ) : (
                        ""
                    )}{" "}
                {props.match.url === `/teams/${id}` ? (
                    <>
                        <h2>{`${props.teamMembers.first_name} ${props.teamMembers.last_name}`}</h2>
                        {/* <img
                            className="modal-photo"
                            alt=""
                            src={props.teamMembers.profile_image}
                        /> */}
                        <h3>Name: {props.teamMembers.first_name} {props.teamMembers.last_name}</h3>
                        <h3>Phone Number: {props.teamMembers.phone_number}</h3>
                    </>
                ) : (
                        ""
                    )}{" "}
                <button className="close-button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
}

export default Modal;

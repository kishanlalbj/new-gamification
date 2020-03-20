import React from "react";
import "./TeamMembersList.css";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const TeamMembersList = props => {
  return (
    <div>
      <h5>Team Members</h5>
      <ListGroup className="team-members-list">
        {props.members.map(member => (
          <ListGroup.Item key={member._id}>
            <FontAwesomeIcon icon={faUser} /> &nbsp; {member.teamMemberName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TeamMembersList;

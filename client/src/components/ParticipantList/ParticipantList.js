import React from "react";
import Participant from "../Participant/Participant";

const ParticipantList = props => {
  return (
    <div>
      {props.type === "team"
        ? props.participants.map((participant, index) => {
            return (
              <Participant
                key={participant._id}
                id={participant._id}
                handleClick={props.navigateTo}
                type={props.type}
                meta={participant.memberCount}
                name={participant.teamName}
                rank={index + 1}
                score={participant.score}
              />
            );
          })
        : null}

      {props.type === "member"
        ? props.participants.map((participant, index) => {
            return (
              <Participant
                key={participant._id}
                id={participant._id}
                handleClick={props.navigateTo}
                type={props.type}
                name={participant.teamMemberName}
                meta={participant.teamName}
                rank={index + 1}
                score={participant.score}
              ></Participant>
            );
          })
        : null}
    </div>
  );
};

export default ParticipantList;

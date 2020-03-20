import React from "react";
import "./Avatar.css";
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCrown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Avatar = props => {
  return (
    <div className="avatar">
      <div>
        <img src={avatar} alt="" width="100" height="100"></img>
      </div>
      &nbsp; &nbsp;
      <div className="avatar-content">
        <h4>
          {props.name}
          {props.rank <= 3 ? (
            <FontAwesomeIcon
              icon={faCrown}
              color={
                props.rank === 1
                  ? "#FFD700" // Gold Color
                  : props.rank === 2
                  ? "#aaa9ad" // Metallic Silver coloe
                  : props.rank === 3
                  ? "#cd7f32" // Bronze color
                  : null
              }
            />
          ) : null}
        </h4>

        <span className="created-on">
          {moment(props.createdOn).format("MMM DD, YYYY")}
        </span>

        <span>
          {props.score} <FontAwesomeIcon icon={faCoins} color="#FFD700" />
        </span>
      </div>
    </div>
  );
};

export default Avatar;

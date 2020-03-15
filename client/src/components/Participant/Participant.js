import React from "react";
import "./Participant.css";
import { Row, Col } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCrown } from "@fortawesome/free-solid-svg-icons";

const Participant = props => {
  return (
    <div className="participant" onClick={() => props.handleClick(props.id)}>
      <Row>
        <Col md="1" className="reference-element">
          <span className="content">
            {props.rank <= 3 ? (
              <FontAwesomeIcon
                className="icon-btn"
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
            ) : (
              props.rank
            )}
          </span>
        </Col>
        <Col md="8">
          <div>
            <span
              style={{
                float: "left"
              }}
            >
              <img src={avatar} alt="" width="48" height="48"></img>
            </span>
            &nbsp;
            <span className="name">{props.name}</span>
            <span className="meta">
              {props.type === "team" ? props.meta + " Members" : null}
              {props.type === "member" ? props.meta : null}
            </span>
          </div>
        </Col>
        <Col md="3" className="reference-element">
          <span className="content">
            {props.score} &nbsp;
            <FontAwesomeIcon
              className="icon-btn"
              icon={faCoins}
              style={{ color: "#e0aa04" }}
            />
            &nbsp; &nbsp;
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Participant;

import React, { Component } from "react";
import "./Team.css";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getTeamDetails } from "../../redux/teams/actions";
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCrown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

class Team extends Component {
  state = {
    teamMembers: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getTeamDetails(id);
    this.getTeamMembers("Avengers");
  }

  getTeamMembers = async teamName => {
    try {
      let response = await fetch(`/api/members/list/${teamName}`);
      let data = await response.json();
      this.setState({ teamMembers: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col md="4">
            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyItems: "space-between"
              }}
            >
              <div>
                <img src={avatar} alt="" width="100" height="100"></img>
              </div>
              &nbsp;
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <h4>
                  {this.props.team.teamName}
                  {this.props.team.rank <= 3 ? (
                    <FontAwesomeIcon
                      icon={faCrown}
                      color={
                        this.props.team.rank === 1
                          ? "#FFD700" // Gold Color
                          : this.props.team.rank === 2
                          ? "#aaa9ad" // Metallic Silver coloe
                          : this.props.team.rank === 3
                          ? "#cd7f32" // Bronze color
                          : null
                      }
                    />
                  ) : null}
                </h4>

                <span
                  style={{
                    color: "grey",
                    marginTop: "-5px",
                    fontSize: "0.8rem"
                  }}
                >
                  {moment(this.props.team.createdOn).format("MMMM Do YYYY")}
                </span>

                <span>
                  {this.props.team.score}{" "}
                  <FontAwesomeIcon icon={faCoins} color="#FFD700" />
                </span>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div style={{ minHeight: "70px", padding: "10px" }}>
              {this.props.team
                ? this.props.team.toolSets.map(tool => (
                    <>
                      <p className="chip" key={tool._id}>
                        {tool.toolName.charAt(0).toUpperCase() +
                          tool.toolName.slice(1, tool.toolName.length)}
                      </p>
                      &nbsp;
                    </>
                  ))
                : null}
            </div>
          </Col>

          <Col md="4">
            <div style={{ border: "1px solid black", padding: "10px" }}></div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md="8">
            <div style={{ border: "1px solid black" }}>Applied Rules</div>
          </Col>

          <Col md="4">
            <div style={{ border: "1px solid black" }}>Metrics</div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teams.team,
  message: state.teams.message
});

const mapDispatchToProps = dispatch => ({
  getTeamDetails: id => dispatch(getTeamDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);

import React, { Component } from "react";
import "./Home.css";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getTeamsLeaderboard,
  getMemberLeaderboard
} from "../../redux/teams/actions";
import ParticipantList from "../../components/ParticipantList/ParticipantList";

class Home extends Component {
  state = {
    activeParticipant: {}
  };

  componentDidMount() {
    this.props.getTeamsLeaderboard();
    this.props.getMemberLeaderboard();
  }

  navigateToTeam = id => this.props.history.push(`/teams/${id}`);

  navigateToMember = id => this.props.history.push(`/member/${id}`);

  setActiveParticipant = participant => {
    let { activeParticipant } = this.state;
    activeParticipant = participant;
    this.setState({
      activeParticipant
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <h5>Team Leaderboard</h5>
            {this.props.teams.length !== 0 ? (
              <ParticipantList
                navigateTo={this.navigateToTeam}
                participants={this.props.teams}
                type="team"
              />
            ) : (
              <p>No Team Data</p>
            )}
          </Col>

          <Col md={6}>
            <h5>Member Leaderboard</h5>
            {this.props.members.length !== 0 ? (
              <ParticipantList
                navigateTo={this.navigateToMember}
                participants={this.props.members}
                type="member"
              />
            ) : (
              <p>No Member Data</p>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams.team_leaderboard,
  members: state.teams.member_leaderboard,
  message: state.teams.message
});

const mapDispatchToProps = dispatch => ({
  getTeamsLeaderboard: () => dispatch(getTeamsLeaderboard()),
  getMemberLeaderboard: () => dispatch(getMemberLeaderboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from "react";
import "./Team.css";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getTeamDetails } from "../../redux/teams/actions";
import Avatar from "../../components/Avatar/Avatar";
import ToolsList from "../../components/ToolsList/ToolsList";
import RuleTable from "../../components/RuleTable/RuleTable";
import MetricList from "../../components/MetricList/MetricList";
import TeamMembersList from "../../components/TeamMembersList/TeamMembersList";
import moment from "moment";

class Team extends Component {
  state = {
    teamMembers: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTeamDetails(id);
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

  componentDidUpdate(prevProps) {
    if (prevProps.team !== this.props.team)
      this.getTeamMembers(this.props.team.teamName);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="8">
            <Row>
              <Col md="5">
                <Avatar
                  name={this.props.team.teamName}
                  tagline={moment(this.props.team.createdOn).format(
                    "MMM DD, YYYY"
                  )}
                  score={this.props.team.score}
                ></Avatar>
              </Col>
              <Col md="7">
                <ToolsList
                  toolSets={this.props.team.toolSets || []}
                ></ToolsList>
              </Col>

              <Col md="12">
                <RuleTable rules={this.props.team.appliedRules || []} />
              </Col>
            </Row>
          </Col>

          <Col md="4">
            <Col md="12">
              <MetricList metrics={this.props.team.metrics} />
            </Col>
            &nbsp;
            <Col md="12">
              <TeamMembersList
                members={this.state.teamMembers}
              ></TeamMembersList>
            </Col>
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

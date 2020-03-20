import React, { Component } from "react";
import "./Member.css";
import { connect } from "react-redux";
import { getMember } from "../../redux/members/actions";
import Avatar from "../../components/Avatar/Avatar";
import { Row, Col } from "react-bootstrap";
import RuleTable from "../../components/RuleTable/RuleTable";
import MetricList from "../../components/MetricList/MetricList";

class Member extends Component {
    
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMember(id);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="4">
            <Row>
              <Col md={"12"}>
                <Avatar
                  name={
                    this.props.member.teamMemberName !== undefined
                      ? this.props.member.teamMemberName.split("@")[0]
                      : ""
                  }
                  tagline={this.props.member.teamName}
                  score={this.props.member.score}
                ></Avatar>
              </Col>
              &nbsp;
              <Col md="12">
                <MetricList metrics={this.props.member.metrics || []} />
              </Col>
            </Row>
          </Col>

          <Col md="8">
            <RuleTable rules={this.props.member.appliedRules || []} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  member: state.members.member,
  message: state.members.message
});

const mapDispatchToProps = dispatch => ({
  getMember: id => dispatch(getMember(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Member);

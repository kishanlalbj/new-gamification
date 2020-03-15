import React, { Component } from "react";
import "./Rules.css";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCoins } from "@fortawesome/free-solid-svg-icons";
import { getAllRules, deleteRule } from "../../redux/rules/actions";

class Rules extends Component {
  state = {
    toggleModal: true
  };

  componentDidMount() {
    this.props.getAllRules();
  }

  handleEdit = (e, ruleId) => {
    e.stopPropagation();
    this.props.history.push(`/rules/${ruleId}`);
  };

  handleDelete = (e, ruleId) => {
    e.stopPropagation();
    console.log("Delete ", ruleId);
    this.props.deleteRule(ruleId);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h5
            style={{
              float: "left"
            }}
          >
            Rules
          </h5>

          <div
            style={{
              float: "right",
              display: "flex"
            }}
          >
            <Form.Control as={"select"} placeholder="filter rules">
              <option value="">Select</option>
              <option value="all">All</option>
              <option value="team">Team</option>
              <option value="member">Member</option>
            </Form.Control>
            &nbsp;&nbsp;
            <Link to="/rules/new">
              <Button variant="dark">New</Button>
            </Link>
          </div>
        </div>

        <div
          style={{
            clear: "both"
          }}
        >
          <br></br>
          <Table responsive hover size="sm">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Rule Name</th>
                <th>Rule Type</th>
                <th>Tool Name</th>
                <th>Metric Name</th>
                <th>Operator</th>
                <th>Threshold</th>
                <th>Reward</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.rules.length !== 0 ? (
                this.props.rules.map((rule, index) => (
                  <tr
                    key={rule._id}
                    onClick={e => this.handleEdit(e, rule.ruleName)}
                  >
                    <td>{index + 1}</td>
                    <td>{rule.ruleName}</td>
                    <td>{rule.ruleType}</td>
                    <td>{rule.toolName}</td>
                    <td>{rule.metricName}</td>
                    <td>{rule.operator}</td>
                    <td>{rule.threshold}</td>
                    <td>
                      {rule.reward}
                      &nbsp;
                      <FontAwesomeIcon
                        className="icon-btn"
                        icon={faCoins}
                        style={{ color: "#e0aa04" }}
                      />
                    </td>
                    <td>
                      &nbsp; &nbsp;
                      <FontAwesomeIcon
                        className="icon-btn"
                        onClick={e => this.handleDelete(e, rule._id)}
                        icon={faTrash}
                        color="#ca0b00"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12">No Rules</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rules: state.rules.rules,
  message: state.rules.message
});

const mapDispatchToProps = dispatch => ({
  getAllRules: () => dispatch(getAllRules()),
  deleteRule: ruleId => dispatch(deleteRule(ruleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rules);

import React, { Component } from "react";
import "./Rules.css";
import { Button, Table, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCoins } from "@fortawesome/free-solid-svg-icons";
import { getAllRules, deleteRule, filterRule } from "../../redux/rules/actions";

class Rules extends Component {
  state = {
    toggleModal: true,
    filterType: "all"
  };

  componentDidMount() {
    this.props.getAllRules();
  }

  componentDidUpdate(prevState) {
    if (prevState.rules !== this.props.rules) {
    }
  }

  handleEdit = (e, ruleId) => {
    e.stopPropagation();
    this.props.history.push(`/rules/edit/${ruleId}`);
  };

  handleDelete = (e, ruleId) => {
    e.stopPropagation();
    console.log("Delete ", ruleId);
    this.props.deleteRule(ruleId);
  };

  handleFilter = type => {
    console.log(type);
    this.props.filterRule(type);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.handleFilter(this.state.filterType);
    });
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              float: "right",
              display: "flex"
            }}
          >
            <Form.Control
              as={"select"}
              name={"filterType"}
              value={this.state.filterType}
              placeholder="filter rules"
              onChange={this.handleChange}
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="all">All</option>
              <option value="team">Team</option>
              <option value="member">Member</option>
            </Form.Control>
            &nbsp;&nbsp;
            <Link to="/rules/add/new">
              <Button variant="dark">New</Button>
            </Link>
          </div>
        </div>

        <div
          style={{
            clear: "both"
          }}
        >
          <h5>Rules</h5>
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
              {this.props.search_result.length !== 0 ? (
                this.props.search_result.map((rule, index) => (
                  <tr
                    key={rule._id}
                    onClick={e => this.handleEdit(e, rule._id)}
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
  search_result: state.rules.search_result,
  message: state.rules.message
});

const mapDispatchToProps = dispatch => ({
  getAllRules: () => dispatch(getAllRules()),
  deleteRule: ruleId => dispatch(deleteRule(ruleId)),
  filterRule: type => dispatch(filterRule(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rules);

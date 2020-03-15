import React, { Component } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { addRule } from "../../redux/rules/actions";

class NewRule extends Component {
  state = {
    validated: false,
    ruleName: "",
    ruleType: "",
    ruleDescription: "",
    toolName: "",
    metricName: "",
    threshold: 0,
    operator: "",
    reward: 0
  };

  handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      event.preventDefault();
      this.props.addRule(this.state);
      if (this.props.message === "") {
        this.props.history.push("/rules");
      }
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { validated } = this.state;
    return (
      <div>
        <h4>New Rule</h4>
        <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="validateRuleName">
                <Form.Label>Rule Name*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Rule Name"
                  name="ruleName"
                  value={this.state.ruleName}
                  onChange={this.handleChange}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Rule Name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="validateRuleType">
                <Form.Label>Rule Type*</Form.Label>

                <Form.Control
                  as="select"
                  required
                  placeholder="Rule Type"
                  name="ruleType"
                  value={this.state.ruleType}
                  onChange={this.handleChange}
                >
                  <option value="">Select</option>
                  <option value="TEAM">Team</option>
                  <option value="MEMBER">Member</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a Rule Type
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="validateRuleDescription">
                <Form.Label>Rule Description</Form.Label>

                <Form.Control
                  as={"textarea"}
                  name={"ruleDescription"}
                  value={this.state.ruleDescription}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="validateToolName">
                <Form.Label> Tool Name*</Form.Label>
                <Form.Control
                  required
                  as={"select"}
                  name="toolName"
                  value={this.state.toolName}
                  onChange={this.handleChange}
                >
                  <option value="">Select Tool</option>
                  <optgroup label="Source Control">
                    <option value="github">Github </option>
                    <option value="gitlab">Gitlab </option>
                    <option value="bitbucket">Bitbucket </option>
                  </optgroup>
                  <optgroup label="Continuous Integration">
                    <option value="jenkins"> Jenkins </option>
                    <option value="bamboo"> Bamboo </option>
                  </optgroup>

                  <optgroup label="Code Quality">
                    <option value="sonarqube"> Sonarqube </option>
                  </optgroup>
                  <optgroup label="Application Management">
                    <option value="jira">Jira</option>
                  </optgroup>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a Tool Name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="validateMetricName">
                <Form.Label>Metric Name*</Form.Label>
                <Form.Control
                  as="select"
                  required
                  name="metricName"
                  value={this.state.metricName}
                  onChange={this.handleChange}
                >
                  <option value=""> Select</option>
                  <optgroup label="Source Control">
                    <option value="total_commits"> total_commits </option>
                  </optgroup>
                  <optgroup label="Continuous Integration">
                    <option value="total_builds">total_builds</option>
                    <option value="success_builds">success_builds </option>
                    <option value="failure_builds">failure_builds </option>
                  </optgroup>

                  <optgroup label="Code Quality">
                    <option value="coverage"> coverage </option>
                    <option vaue="duplications"> duplications </option>
                    <option value="vulnerabilities"> vulnerabilities </option>
                    <option value="tech_debt"> tech_debt </option>
                  </optgroup>

                  <optgroup label="Application Management">
                    <option value="total_wip"> total_wip </option>
                    <option value="total_completed"> total_completed </option>
                    <option value="total_bugs"> total_bugs </option>
                  </optgroup>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a Metric Name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="validateOperator">
                <Form.Label>Operator</Form.Label>

                <Form.Control
                  as="select"
                  required
                  name="operator"
                  value={this.state.operator}
                  onChange={this.handleChange}
                >
                  <option value="">Select</option>
                  <option value="gt">Greater than </option>
                  <option value="lt">Lesser than </option>
                  <option value="eq">Equal to </option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="validateThreshold">
                <Form.Label>Threshold*</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Threshold"
                  name="threshold"
                  value={this.state.threshold}
                  onChange={this.handleChange}
                  min="0"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide threshold value
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="validateReward">
                <Form.Label>Reward*</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Reward"
                  name="reward"
                  value={this.state.reward}
                  onChange={this.handleChange}
                  min="0"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please provide reward points
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md="6">
              <Button variant="secondary">Cancel</Button>
            </Col>

            <Col
              md="6"
              style={{
                textAlign: "end"
              }}
            >
              <Button type="submit" variant="dark">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.teams.message
});

const mapDispatchToProps = dispatch => ({
  addRule: rule => dispatch(addRule(rule))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRule);

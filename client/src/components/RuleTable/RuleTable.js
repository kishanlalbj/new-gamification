import React from "react";
import "./RuleTable.css";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const RuleTable = props => {
  return (
    <div>
      <h5>Rules Passed</h5>
      <Table responsive hover size="sm">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Rule Name</th>
            <th>Tool Name</th>
            <th>Metric Name</th>
            <th>Operator</th>
            <th>Threshold</th>
            <th>Reward</th>
          </tr>
        </thead>

        <tbody>
          {props.rules.length !== 0 ? (
            props.rules.map((rule, index) => (
              <tr key={rule._id}>
                <td>{index + 1}</td>
                <td>{rule.ruleName}</td>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="rule-message">
                No Rules
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default RuleTable;

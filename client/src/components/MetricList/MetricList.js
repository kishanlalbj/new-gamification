import React from "react";
import "./MetricList.css";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const MetricList = props => (
  <div>
    <h5>Metrics Collected</h5>

    <ListGroup>
      {props.metrics.map((metric, index) => {
        return (
          <ListGroup.Item key={metric._id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {metric.metricName.charAt(0).toUpperCase() +
                  metric.metricName
                    .slice(1, metric.metricName.length)
                    .replace("_", " ")}
              </div>
              <div>
                <span>
                  {metric.value}
                  &nbsp;
                  <FontAwesomeIcon icon={faChartLine} />
                </span>
              </div>
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  </div>
);

export default MetricList;

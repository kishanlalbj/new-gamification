import React from "react";
import "./ToolsList.css";

const ToolsList = props => {
  return (
    <div className="tools-list">
      <h5>Tools</h5>

      <div className="tools-container">
        {props.toolSets.map(tool => (
          <span key={tool._id}>
            <p className="chip" key={tool._id}>
              {tool.toolName.charAt(0).toUpperCase() +
                tool.toolName.slice(1, tool.toolName.length)}
            </p>
            &nbsp;
          </span>
        ))}
        <p className="chip">Bitbucket</p>
        &nbsp;
        <p className="chip">Bamboo</p>
        &nbsp;
        <p className="chip">Nexus</p>
      </div>
    </div>
  );
};

export default ToolsList;

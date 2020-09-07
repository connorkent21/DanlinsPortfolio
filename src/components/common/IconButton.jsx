import React from "react";
import { Flex } from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Flex direction="column" className="iconContainer">
        <FontAwesomeIcon icon={props.icon} />
        <div className="label">{props.label}</div>
      </Flex>
    </a>
  );
}

export default IconButton;

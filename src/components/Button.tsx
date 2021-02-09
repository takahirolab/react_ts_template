import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronRight,
  faArrowLeft,
  fas,
  faRedoAlt,
  faUndoAlt,
  faCloudDownloadAlt,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Colors } from "@Constants/config";

library.add(fas);

type enumType =
  | "blue"
  | "gray"
  | "green"
  | "red"
  | "hollow-blue"
  | "hollow-gray"
  | "hollow-dark-gray"
  | "linear-blue"
  | "linear-light-blue"
  | "linear-gray";

interface Props {
  /** type of button */
  type: enumType;
  /** button text */
  text: string;
  /** callback */
  onclick?: (arg?: any) => void;
  /** style */
  style?: { [k: string]: string | number };
  /** FontAwesome icon */
  iconType?: string;
  /** FontAwesome Icon Postion */
  iconPosition?: "left" | "right";
}

const Icon = (type: string) => {
  switch (type) {
    case "plus":
      return (
        <FontAwesomeIcon
          icon={faPlus}
          style={{
            border: "2px solid #fff",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            padding: "2px",
          }}
        />
      );
    case "chevron-right":
      return (
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ width: "16px", height: "16px" }}
        />
      );
    case "triangle-down":
      return (
        <FontAwesomeIcon
          icon={["fas", "sort-down"]}
          style={{
            width: "16px",
            height: "16px",
            position: "absolute",
            top: "25%",
            right: "10px",
          }}
        />
      );
    case "arrow-left":
      return (
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ width: "16px", height: "16px" }}
        />
      );
    case "redo-alt":
      return (
        <FontAwesomeIcon
          icon={faRedoAlt}
          style={{ width: "16px", height: "16px" }}
        />
      );
    case "undo-alt":
      return (
        <FontAwesomeIcon
          icon={faUndoAlt}
          style={{ width: "16px", height: "16px" }}
        />
      );
    case "download":
      return (
        <FontAwesomeIcon
          icon={faCloudDownloadAlt}
          style={{ width: "16px", height: "16px" }}
        />
      );
    case "unvisible":
      return (
        <FontAwesomeIcon
          icon={faEyeSlash}
          style={{ width: "16px", height: "16px" }}
        />
      );
    default:
      return null;
  }
};

export default ({
  type,
  text,
  onclick,
  style,
  iconType,
  iconPosition,
}: Props) => {
  return (
    <Button
     type={type}>
      {iconType && iconPosition === "left" && (
        <>
          {Icon(iconType)}
          <div style={{ marginLeft: "6px" }}>{text}</div>
        </>
      )}
      {iconType && iconPosition === "right" && (
        <>
          <div style={{ marginRight: "4px" }}>{text}</div>
          {Icon(iconType)}
        </>
      )}
      {iconType === undefined && <>{text}</>}
    </Button>
  );
};


const Button = styled.div<{
  type: enumType;
}>`
  min-width: 92px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 0 1em;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.type) {
      case "blue":
        return Colors.blue;
      case "gray":
        return Colors.gray;
      case "green":
        return Colors.green;
      case "red":
        return Colors.red;
      default:
        return "#FFFFFF";
    }
  }};
  background-image: ${(props) => {
    switch (props.type) {
      case "linear-blue":
        return "linear-gradient(#4393D1, #0F75C2)";
      case "linear-light-blue":
        return "linear-gradient(#6AAFE3, #3798E2)";
      case "linear-gray":
        return "linear-gradient(#D6D6D6, #BDBDBD)";
      default:
        return "transparent";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "hollow-blue":
        return Colors.blue;
      case "hollow-gray":
        return Colors.hollowGray;
      case "hollow-dark-gray":
        return Colors.darkGray;
      default:
        return "#FFFFFF";
    }
  }};
  border: ${(props) => {
    switch (props.type) {
      case "blue":
      case "gray":
      case "green":
      case "red":
        return "2px solid transparent";
      case "hollow-blue":
        return `2px solid ${Colors.blue}`;
      case "hollow-gray":
        return `2px solid ${Colors.gray}`;
      case "hollow-dark-gray":
        return `2px solid ${Colors.darkGray}`;
      default:
        return "none";
    }
  }};
  height: 40px;
`;

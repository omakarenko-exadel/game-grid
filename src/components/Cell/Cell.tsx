import React from "react";
import "./Cell.scss";
import classnames from "classnames";

interface Props {
  color: number;
  cellClickHandler: () => void;
}

const classes = ["", "cell__firstPlayer", "cell__secondPlayer"];

const Cell = ({ color, cellClickHandler }: Props): JSX.Element => {
  return (
    <div
      onClick={cellClickHandler}
      className={classnames("cell", classes[color])}
    ></div>
  );
};

export default Cell;

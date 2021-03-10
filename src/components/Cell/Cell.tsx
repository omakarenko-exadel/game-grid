import React from "react";
import "./Cell.scss";
import classnames from "classnames";

interface Props {
  color: number;
  eHandler: () => void;
}

const classes = ["", "selectedFirst", "selectedSecond"];
const Cell = ({ color, eHandler }: Props): JSX.Element => {
  return (
    <>
      <div
        className={classnames("cell", classes[color])}
        onClick={eHandler}
      ></div>
    </>
  );
};

export default React.memo(Cell);

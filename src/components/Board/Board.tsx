import React from "react";
import "./Board.scss";
import BoardField from "./BoardField";
import AnimatedBackground from "../../helper/AnimatedBackground";
import { Container } from "react-bootstrap";

const Board: React.FC = (): JSX.Element => {
  return (
    <div className="area">
      <ul className="circles d-flex align-items-center">
        <Container className="board">
          <BoardField />
        </Container>
        <AnimatedBackground />
      </ul>
    </div>
  );
};

export default React.memo(Board);

import React from "react";
import { Row, Container, Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { findConnection } from "../../helper/Functions";
import ResultModal from "../ResultModal";

interface forPlayer {
  firstPlayerName: string;
  secondPlayerName: string;
}

interface IProps {
  createdBoard: number[][];
  movesRemain: number;
}

const PlayerTable = (props: IProps) => {
  const { createdBoard, movesRemain } = props;
  const selectFirstPlayerName = (state: forPlayer) => state.firstPlayerName;
  const selectSecondPlayerName = (state: forPlayer) => state.secondPlayerName;

  const firstPlayer = useSelector(selectFirstPlayerName);
  const secondPlayer = useSelector(selectSecondPlayerName);

  const pointsFirstPlayer = findConnection(createdBoard, 1);
  const pointsSecondPlayer = findConnection(createdBoard, 2);

  return (
    <>
      <Container className="board__table">
        <Row className="d-flex justify-content-between">
          <Card className="board__table-card">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/wJ3GF64/simpleavatar.png"
            />
            <Card.Body className="board__table-body">
              <span className="board__table-text">{firstPlayer}</span>
              <Badge variant="success" className="board__table-badge">
                Очки: {pointsFirstPlayer}
              </Badge>
            </Card.Body>
          </Card>
          <Card className="board__table-card">
            <Card.Img
              variant="top"
              src="https://i.ibb.co/wJ3GF64/simpleavatar.png"
            />
            <Card.Body className="board__table-body">
              <span className="board__table-text">{secondPlayer}</span>
              <Badge variant="danger" className="board__table-badge">
                Очки: {pointsSecondPlayer}
              </Badge>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      {!movesRemain && (
        <ResultModal
          resultFirstPlayer={[firstPlayer, pointsFirstPlayer]}
          resultSecondPlayer={[secondPlayer, pointsSecondPlayer]}
        />
      )}
    </>
  );
};

export default React.memo(PlayerTable);

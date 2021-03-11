import React from "react";
import { Row, Container, Badge, Col, Card } from "react-bootstrap";
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
          <Col className="text-center p-1" xs={6} lg={4}>
            <Card className="board__table-card">
              <Card.Img
                variant="top"
                src="../../src/assets/img/simpleAvatar.png"
              />
              <Card.Body>
                <Card.Text>{firstPlayer}</Card.Text>
                <Card.Text>
                  <Badge className="cell__firstPlayer">
                    Очки: {pointsFirstPlayer}
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center p-1" xs={6} lg={4}>
            <Card className="board__table-card">
              <Card.Img
                variant="top"
                src="../../src/assets/img/simpleAvatar.png"
              />
              <Card.Body>
                <Card.Text>{secondPlayer}</Card.Text>
                <Card.Text>
                  <Badge variant="danger">Очки: {pointsSecondPlayer}</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
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

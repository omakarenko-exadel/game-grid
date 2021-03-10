import React, { useEffect, useState } from "react";
import "./Board.scss";
import Cell from "../Cell";
import { Container, Row, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import findConnection from "../../helper";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function newMatrix(size: number): number[] {
  const sub = new Array(size);
  for (let index = 0; index < sub.length; index++) {
    sub[index] = new Array(size).fill(0);
  }

  return sub;
}

const Board: React.FC = (): JSX.Element => {
  const [newBoard, setNewBoard] = useState([]);
  const [player, setPlayer] = useState(true);
  const history = useHistory();
  interface forPlayer {
    firstPlayer: string;
    secondPlayer: string;
    boardSize: number;
  }
  const selectFirstPlayer = (state: forPlayer) => state.firstPlayer;
  const selectSecondPlayer = (state: forPlayer) => state.secondPlayer;
  const selectBoardSize = (state: forPlayer) => state.boardSize;
  const firstPlayer = useSelector(selectFirstPlayer);
  const secondPlayer = useSelector(selectSecondPlayer);
  const boardSize = useSelector(selectBoardSize);
  const matrix = newMatrix(boardSize);

  useEffect(() => {
    setNewBoard(matrix);
  }, []);

  const newHandler = (i: number, j: number): void => {
    const allItems = [...newBoard];
    if (player && allItems[j][i] === 0) {
      allItems[j][i] = 1;
      setPlayer(false);
    } else if (allItems[j][i] === 0) {
      allItems[j][i] = 2;
      setPlayer(true);
    }
    setNewBoard(allItems);
  };

  const returnHandler = () => {
    console.log(newBoard);
    history.push("/");
  };

  return (
    <>
      <Container fluid className="board">
        <div>
          {firstPlayer} : {findConnection(newBoard, 1)}
          {secondPlayer} : {findConnection(newBoard, 2)}
        </div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        {newBoard.map((row, j) => (
          <Row xs={newBoard.length} key={uuidv4()}>
            {row.map((col, i) => (
              <Col key={uuidv4()}>
                <Cell color={col} eHandler={() => newHandler(i, j)} />
              </Col>
            ))}
          </Row>
        ))}
        <Button onClick={returnHandler}>Back</Button>
      </Container>
    </>
  );
};

export default React.memo(Board);

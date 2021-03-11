import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { newMatrix } from "../../helper/Functions";
import { ModalRules } from "../../helper/ModalRules";
import Cell from "../Cell";
import PlayerTable from "./PlayerTable";

interface ForBoard {
  boardSize: number;
}

const BoardField: React.FC = () => {
  const [newBoard, setNewBoard] = useState([]);
  const [player, setPlayer] = useState(true);
  const [movesLeft, setMovesLeft] = useState(1);
  const history = useHistory();

  const selectBoardSize = (state: ForBoard) => state.boardSize;
  const boardSize = useSelector(selectBoardSize);

  useEffect(() => {
    setNewBoard(newMatrix(boardSize));
    setMovesLeft(boardSize * boardSize);
  }, []);

  const newHandler = (i: number, j: number): void => {
    const allItems = [...newBoard];
    if (player && allItems[j][i] === 0) {
      allItems[j][i] = 1;
      setPlayer(false);
      setMovesLeft((prev) => prev - 1);
    } else if (allItems[j][i] === 0) {
      allItems[j][i] = 2;
      setPlayer(true);
      setMovesLeft((prev) => prev - 1);
    }
    setNewBoard(allItems);
  };

  const returnHandler = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Button variant="light" onClick={returnHandler} className="ml-1">
            Перезапустить
          </Button>
          <ModalRules />
        </Row>
      </Container>
      <Container className="board__field">
        {newBoard.map((rowsInMatrix, rowsIndex) => (
          <Row xs={12} key={uuidv4()}>
            {rowsInMatrix.map((itemInRow, itemIndex) => (
              <Col key={uuidv4()}>
                <Cell
                  color={itemInRow}
                  cellClickHandler={() => newHandler(itemIndex, rowsIndex)}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <PlayerTable movesRemain={movesLeft} createdBoard={newBoard} />
    </>
  );
};

export default React.memo(BoardField);

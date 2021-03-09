import React, { useEffect, useState } from "react";
import "./Board.scss";
import Cell from "../Cell";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function newMatrix(n: number): number[] {
  const sub = new Array(n);
  for (let i = 0; i < sub.length; i++) {
    sub[i] = new Array(n).fill(0);
  }

  return sub;
}
const matrix = newMatrix(8);

const Board: React.FC = (): JSX.Element => {
  const [newBoard, setNewBoard] = useState([]);
  const [player, setPlayer] = useState(true);

  useEffect(() => {
    setNewBoard(matrix);
  }, []);

  const newHandler = (i: number, j: number): void => {
    const allItems = [...newBoard];
    if (player && allItems[j][i] === 0) {
      allItems[j][i] = 1;
    } else if (allItems[j][i] === 0) {
      allItems[j][i] = 2;
    }
    setNewBoard(allItems);
    setPlayer(!player);
  };

  return (
    <>
      <Container className="board">
        {newBoard.map((row, j) => (
          <Row xs={newBoard.length} key={uuidv4()}>
            {row.map((col, i) => (
              <Col key={uuidv4()}>
                <Cell color={col} eHandler={() => newHandler(i, j)} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      {console.log(player)}
    </>
  );
};

export default Board;

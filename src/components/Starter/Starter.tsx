import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { changeNames, changeBoard } from "../redux/actions";
import "./Starter.scss";

const Starter: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [boardSize, setBoardSize] = React.useState(2);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target.name);
    dispatch(changeNames(firstName, secondName));
    dispatch(changeBoard(boardSize));
    history.push("/board");
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputData = event.target.value;
    console.log(inputName);
    if (inputName === "first") {
      setFirstName(inputData);
    } else if (inputName === "second") {
      setSecondName(inputData);
    } else if (inputName === "boardSize") {
      setBoardSize(Number(inputData));
    }
  };

  return (
    <>
      <div className="area">
        <ul className="circles">
          <div className="testClass">
            <Col xs={12} sm={8} md={6} lg={4} className="mainForm">
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="firstPlayerName">
                  <Form.Label>Введите имя первого игрока</Form.Label>
                  <Form.Control
                    placeholder="Player 1 name"
                    size="lg"
                    required
                    name="first"
                    value={firstName}
                    onChange={inputHandler}
                  />
                </Form.Group>

                <Form.Group controlId="secondPlayerName">
                  <Form.Label>Введите имя второго игрока</Form.Label>
                  <Form.Control
                    placeholder="Player 2 name"
                    size="lg"
                    required
                    name="second"
                    value={secondName}
                    onChange={inputHandler}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <Form.Label>Выберите размер доски</Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    custom
                    name="boardSize"
                    onChange={inputHandler}
                  >
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </Form.Control>
                </Form.Group>
                <div className="d-flex justify-content-center pt-5">
                  <Button variant="success" type="submit">
                    Начать игру
                  </Button>
                </div>
              </Form>
            </Col>
          </div>
          {Array(10)
            .fill(1)
            .map(() => (
              <li key={uuidv4()}></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Starter;

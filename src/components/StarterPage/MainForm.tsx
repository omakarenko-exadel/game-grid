import React from "react";
import { Form, Button, Col, Image, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePlayerNames, changeBoardSize } from "../redux/actions";
import { ModalRules } from "../../helper/ModalRules";

const MainForm: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [boardSize, setBoardSize] = React.useState(2);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changePlayerNames(firstName, secondName));
    dispatch(changeBoardSize(boardSize));
    history.push("/board");
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputData = event.target.value;
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
      <Container className="mainForm">
        <Col xs={12} sm={8} md={6} lg={4} className="mainForm__wrapper">
          <Form onSubmit={submitHandler}>
            <h2 className="mainForm__text">Grid Square Game</h2>
            <div className="d-flex justify-content-between pt-1 pb-2">
              <Button variant="success" type="submit">
                Старт
              </Button>
              <ModalRules />
            </div>
            <Form.Group controlId="firstPlayerName">
              <Form.Label>Первый игрок</Form.Label>
              <Form.Control
                placeholder="Введите имя"
                size="sm"
                required
                name="first"
                value={firstName}
                onChange={inputHandler}
              />
            </Form.Group>
            <Form.Group controlId="secondPlayerName">
              <Form.Label>Второй игрок</Form.Label>
              <Form.Control
                placeholder="Введите имя"
                size="sm"
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
                size="sm"
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
          </Form>
          <div className="d-flex justify-content-center pt-1">
            <Col className="pt-1">
              <Image src="https://i.ibb.co/Gdj3fd6/gameimg.png" thumbnail />
            </Col>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default React.memo(MainForm);

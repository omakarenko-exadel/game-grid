import React from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Image } from "react-bootstrap";
import "./ResultModal.scss";

interface IProps {
  resultFirstPlayer: Array<string | number>;
  resultSecondPlayer: Array<string | number>;
}

const ResultModal = (props: IProps): JSX.Element => {
  const [show, setShow] = React.useState(true);
  const history = useHistory();
  const { resultFirstPlayer, resultSecondPlayer } = props;

  const handleClose = () => setShow(false);
  const returnHandler = () => {
    history.push("/");
  };

  const resultData = (player1, player2) => {
    if (player1[1] > player2[1]) {
      return (
        <div className="ResultModal">
          <Image
            className="ResultModal__img"
            src="../../src/assets/img/winnerImg.jpeg"
            rounded
            thumbnail
          />
          <h2 className="ResultModal__text">{`Победил ${player1[0]}, результат: ${player1[1]}`}</h2>
        </div>
      );
    } else if (player1[1] < player2[1]) {
      return (
        <div className="ResultModal">
          <Image
            className="ResultModal__img"
            src="../../src/assets/img/winnerImg.jpeg"
            rounded
            thumbnail
          />
          <h2 className="ResultModal__text">{`Победил ${player2[0]}, результат: ${player2[1]}`}</h2>
        </div>
      );
    } else {
      return (
        <div className="ResultModal">
          <Image
            className="ResultModal__img"
            src="../../src/assets/img/drawImage.png"
            rounded
            thumbnail
          />
          <h2 className="ResultModal__text">{`${player1[1]} : ${player2[1]}`}</h2>
        </div>
      );
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Игра окончена</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{resultData(resultFirstPlayer, resultSecondPlayer)}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={returnHandler}>
            Новая игра
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResultModal;

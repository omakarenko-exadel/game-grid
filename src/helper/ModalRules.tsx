import React, { useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import "./helper.scss";

export const ModalRules: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ml-1" variant="light" onClick={handleShow}>
        Правила игры
      </Button>

      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal__text">
            Правила игры для Grid Square Game
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>
              <span>
                Для начала игры первый игрок выбирает ячейку и делает первый ход
              </span>
            </li>
            <li>
              <span>Игроки ходят по очереди</span>
            </li>
            <li>
              <span>Игра заканчивается после заполнения всех ячеек</span>
            </li>
            <li>
              <span>
                Победа присуждается игроку с наибольшей площадью ячеек{" "}
                <strong>подряд</strong>
              </span>
            </li>
            <li>
              <span>Удачи!</span>
            </li>
          </ol>
          <div className="modal__img">
            <Image
              className="modal__img-wrapper"
              src="./../../src/assets/img/winExample.png"
              rounded
              thumbnail
            />
            <Image
              className="modal__img-wrapper"
              src="./../../src/assets/img/exampleWinGrey.png"
              rounded
              thumbnail
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

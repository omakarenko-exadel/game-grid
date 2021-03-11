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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Правила игры для Grid Square Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>
              <p>
                Для начала игры первый игрок выбирает ячейку и делает первый ход
              </p>
            </li>
            <li>
              <p>Игроки ходят по очереди</p>
            </li>
            <li>
              <p>Игра заканчивается после заполнения всех ячеек</p>
            </li>
            <li>
              <p>
                Победа присуждается игроку с наибольшей площадью ячеек{" "}
                <strong>подряд</strong>
              </p>
            </li>
            <li>
              <p>Удачи!</p>
            </li>
          </ol>
          <div className="modalRules">
            <Image
              className="modalRules__img"
              src="../../src/assets/img/winExample.png"
              rounded
              thumbnail
            />
            <Image
              className="modalRules__img"
              src="../../src/assets/img/exampleWinGrey.png"
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

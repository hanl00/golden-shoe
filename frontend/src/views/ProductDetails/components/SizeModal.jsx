import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "../ProductDetails.css";
import "./SizeModal.css";

const SizeModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow} className="size-modal">
        Size buying guide
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closebutton>
          <Modal.Title>Size Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Clothing Guide</h2>
          <body>
            <table>
              <tr>
                <th>Size</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
              </tr>
              <tr>
                <td>EU Shoe Size</td>
                <td>32-35.5</td>
                <td>35-36.5</td>
                <td>37-38.5</td>
                <td>39-42.5</td>
                <td>43-45</td>
              </tr>
              <tr>
                <td>UK Shoe Size</td>
                <td>3-4.5</td>
                <td>5-6.5</td>
                <td>7-8</td>
                <td>8.5-11</td>
                <td>11.5-14</td>
              </tr>
            </table>
          </body>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SizeModal;

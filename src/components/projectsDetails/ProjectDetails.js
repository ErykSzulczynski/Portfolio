import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styles from './projectDetails.module.scss'

export default function ProjectDetails(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.test}
      >
        <Modal.Header className={styles.modal__header}>
          <Modal.Title id="contained-modal-title-vcenter" className={styles.modal__title}>
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className={styles.modal__footer}>
          <Button onClick={props.onHide} className={styles.modal__button}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styles from './projectDetails.module.scss'
import data from "../../data.json"

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
            {data["projects"][0]["name"]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ul className={styles.technologies__list}>
              <li>
                {data["projects"][0]["technologies"][0]}
              </li>
              <li>
                {data["projects"][0]["technologies"][1]}
              </li>
              <li>
                {data["projects"][0]["technologies"][2]}
              </li>
              <li>
                {data["projects"][0]["technologies"][3]}
              </li>
            </ul>
          </div>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            
          </p>
          <Button onClick={props.onHide} className={styles.modal__button}>Take me to the site</Button>
        </Modal.Body>
        <Modal.Footer className={styles.modal__footer}>
          <Button onClick={props.onHide} className={styles.modal__button}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
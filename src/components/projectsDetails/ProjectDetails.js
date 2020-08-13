import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styles from './projectDetails.module.scss'
import data from "../../data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'

export default function ProjectDetails(props) {
  console.log(props.link)
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
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ul className={styles.technologies__list}>
              {props.show ? props.technologies.map((technology) => {
                return(<li>{technology}</li>)
              }) : null}
            </ul>
          </div>
          <p>
              {props.description}
          </p>
          <Button onClick={() => {window.location.href = props.link; return null}} className={styles.modal__button}>Take me to the site</Button>
        </Modal.Body>
        <Modal.Footer className={styles.modal__footer}>
          <Button onClick={props.onHide} className={styles.modal__button}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
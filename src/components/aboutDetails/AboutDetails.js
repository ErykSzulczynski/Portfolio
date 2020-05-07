import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styles from "./aboutDetails.module.scss"
import data from "../../data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faMusic, faUserClock } from "@fortawesome/free-solid-svg-icons"

export default function AboutDetails(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.test}
    >
      <Modal.Header className={styles.modal__header}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.modal__title}
        >
          More about me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.more__item}>
          <div className={styles.more__content}>
            <h4>My other passion</h4>
            <p>{data["about-more"]["other-passions"]}</p>
          </div>
          <div className={styles.more__itemIcon}>
            <FontAwesomeIcon icon={faGamepad}/>
          </div>
        </div>
        <div  className={styles.more__item}>
          <div className={styles.more__content}>
            <h4>What kind of music do I listen?</h4>
            <p>{data["about-more"]["music"]}</p>
          </div>
          <div className={styles.more__itemIcon}>
            <FontAwesomeIcon icon={faMusic}/>
          </div>
        </div>
        <div  className={styles.more__item}>
          <div className={styles.more__content}>
            <h4>Plans for the future</h4>
            <p>{data["about-more"]["future"]}</p>
          </div>
          <div className={styles.more__itemIcon}>
            <FontAwesomeIcon icon={faUserClock}/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.modal__footer}>
        <Button onClick={props.onHide} className={styles.modal__button}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

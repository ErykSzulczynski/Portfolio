import React from "react"
import styles from "./about.module.scss"
import AboutDetails from '../aboutDetails/AboutDetails'
import data from '../../data.json'

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.about}>
      <div className={styles.about__photo}>
      </div>
      <p className={styles.about__title}>Hello world👋</p>
      <p className={styles.about__content}>
        {data.about}
      </p>
      <button className={styles.about__more} onClick={() => setModalShow(true)}>More</button>
      <AboutDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-90w"
        />
    </div>
  )
}

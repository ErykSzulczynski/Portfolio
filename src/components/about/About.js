import React from "react"
import styles from "./about.module.scss"
import AboutDetails from '../aboutDetails/AboutDetails'

export default function About() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.about}>
      <div className={styles.about__photo}>
      </div>
      <p className={styles.about__title}>Hello world👋</p>
      <p className={styles.about__content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        convallis mauris. Mauris accumsan vehicula ante vitae auctor. Nam mi
        turpis, scelerisque et magna in, dapibus sollicitudin purus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Nam ac tristique mi.
        Fusce et eleifend tortor. Donec pulvinar congue dictum. Fusce vulputate
        turpis nibh, ut porta dolor facilisis sed. Sed cursus faucibus erat
        ultricies rutrum. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Donec volutpat justo fringilla
        tellus convallis, et congue arcu mattis. Suspendisse vel magna eget enim
        tincidunt gravida vitae id dolor. Phasellus quis libero ligula. Cras sit
        amet nulla metus. Aenean congue erat vel euismod fermentum.
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

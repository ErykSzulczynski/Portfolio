import React from 'react'
import styles from './projects.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faGraduationCap, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ProjectDetails from '../projectsDetails/ProjectDetails'

export default function Projects() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>   
        <div className={styles.projects}>
            <div className={styles.title}>
                <p>Projects ☄️</p>
            </div>
            <div className={styles.projectItem}>
            <div className={styles.projectTitle}>
                    <h2>Title</h2>
                </div>
                <div className={styles.projectStack}>
                    <ul className={styles.technologies__list}>
                        <li>
                            React
                        </li>
                        <li>
                            SASS
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
                <div className={styles.projectContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempor quam orci, at accumsan nunc gravida id.
                        Ut ut sagittis arcu. Sed nec diam non leo lacinia vulputate.
                        Maecenas ultrices venenatis magna,
                        in semper metus faucibus eu.
                        Sed id urna vel lacus pellentesque tempus.
                        Duis a volutpat mi. Quisque porta tristique orci,
                        ac facilisis diam efficitur non.
                        Sed malesuada mauris eu mattis sodales.
                        Cras eros enim, condimentum non nulla nec,
                        ullamcorper dictum ante.
                   </p>
                    <button className={styles.projectMore} onClick={() => setModalShow(true)}>
                        More
                   </button>
                </div>
            </div>
            <div className={styles.projectItem}>
                <div className={styles.projectTitle}>
                    <h2>Title</h2>
                </div>
                <div className={styles.projectStack}>
                    <ul className={styles.technologies__list}>
                        <li>
                            React
                        </li>
                        <li>
                            SASS
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
                <div className={styles.projectContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempor quam orci, at accumsan nunc gravida id.
                        Ut ut sagittis arcu. Sed nec diam non leo lacinia vulputate.
                        Maecenas ultrices venenatis magna,
                        in semper metus faucibus eu.
                        Sed id urna vel lacus pellentesque tempus.
                        Duis a volutpat mi. Quisque porta tristique orci,
                        ac facilisis diam efficitur non.
                        Sed malesuada mauris eu mattis sodales.
                        Cras eros enim, condimentum non nulla nec,
                        ullamcorper dictum ante.
                   </p>
                    <button className={styles.projectMore}>
                        More
                   </button>
                </div>
            </div>
            <div className={styles.projectItem}>
            <div className={styles.projectTitle}>
                    <h2>Title</h2>
                </div>
                <div className={styles.projectStack}>
                    <ul className={styles.technologies__list}>
                        <li>
                            React
                        </li>
                        <li>
                            SASS
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
                <div className={styles.projectContent}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus tempor quam orci, at accumsan nunc gravida id.
                        Ut ut sagittis arcu. Sed nec diam non leo lacinia vulputate.
                        Maecenas ultrices venenatis magna,
                        in semper metus faucibus eu.
                        Sed id urna vel lacus pellentesque tempus.
                        Duis a volutpat mi. Quisque porta tristique orci,
                        ac facilisis diam efficitur non.
                        Sed malesuada mauris eu mattis sodales.
                        Cras eros enim, condimentum non nulla nec,
                        ullamcorper dictum ante.
                   </p>
                    <button className={styles.projectMore}>
                        More
                   </button>
                </div>
            </div>
        </div>
        <ProjectDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </div>
    )
}

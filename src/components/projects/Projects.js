import React from 'react'
import styles from './projects.module.scss'
import bg from './bg.png'

export default function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.projectItem}>
                <div className={styles.projectPhoto}>
                    <img src={bg} alt="Project image" />
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
    )
}

import React from 'react'
import styles from './skills.module.scss'

export default function Skills() {
    return (
        <div className={styles.skills}>
           <div className={styles.skills__title}>
                Skills  💪 
           </div>
           <div className={styles.skills__grid}>
                <div className={styles.skills__gridItem}>
                    <p className={styles.skills__gridItemTitle}>Technologies</p>
                    <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Front-end: </span>HTML, CSS, JS, SASS, jQuery, React.js
                    </p>
                    <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Back-end: </span>Node.js, express, PHP
                    </p>
                    <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Databases: </span>MySQL, MongoDB
                    </p>
                </div>
                <div className={styles.skills__gridItem}>
                    <p className={styles.skills__gridItemTitle}>Tools</p>
                    <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Design tools: </span>AdobeXd, Figma
                    </p>
                    <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Back-end: </span>Visual Studio Code, Atom, Sublime Code
                    </p>
                </div>
                <div className={styles.skills__gridItem}>
                <p className={styles.skills__gridItemTitle}>Others</p>
                <p className={styles.skills__gridItemText}>
                        <span className={styles.skills__gridItemTextSection}>Version control: </span>Git
                </p>
                </div>
           </div>
        </div>
    )
}

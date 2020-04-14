import React from 'react'
import styles from './skills.module.scss'

export default function Skills() {
    return (
        <div className={styles.skills}>
           <div className={styles.skills__title}>
                Skills
           </div>
           <div className={styles.skills__grid}>
                <div className={styles.skills__gridItem}>
                    <p className={styles.skills__gridItemTitle}>Ive been working with</p>
                </div>
                <div className={styles.skills__gridItem}>
                <p className={styles.skills__gridItemTitle}>Ive been working with</p>
                </div>
                <div className={styles.skills__gridItem}>
                <p className={styles.skills__gridItemTitle}>Ive been working with</p>
                </div>
           </div>
        </div>
    )
}

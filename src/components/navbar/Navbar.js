import React from 'react'
import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
           <ul className={styles.links__list}>
               <li className={styles.links__listItem}>About</li>
               <li className={styles.links__listItem}>Skills</li>
               <li className={styles.links__listItem}>Portfolio</li>
               <li className={styles.links__listItem}>Contact</li>
           </ul>
        </div>
    )
}

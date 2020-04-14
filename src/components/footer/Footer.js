import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.footer__text}>Made with GatsbyJS</p>
        </div>
    )
}

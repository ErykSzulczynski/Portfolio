import React from 'react'
import styles from './contact.module.scss'

export default function Contact() {
    return (
        <div className={styles.contact}>
            <p className={styles.contact__title}>Contact me ✉️</p>
            <p className={styles.contact__content}>
            If you want to contact with me you are more than welcome to do so by using email
            <br/><br/>
            ✉️ Email: eryk.szulczynski0@gmail.com
            </p>
        </div>
    )
}

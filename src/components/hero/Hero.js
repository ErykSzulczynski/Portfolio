import React from 'react'
import styles from './hero.module.scss'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <p className={styles.hero__text}><span className={styles.hero__textHighlighted}>Eryk Szułczyński</span><br/>Web developer</p>
            <div className={styles.box}></div>
        </div>
    )
}

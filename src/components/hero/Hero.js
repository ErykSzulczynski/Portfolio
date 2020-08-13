import React from 'react'
import styles from './hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/fontawesome-free-brands'

export default function Hero() {

    let link = 'https://www.google.com'

    return (
            <div className={styles.hero}>
                <p className={styles.hero__text}>
                    <span className={styles.hero__textHighlighted}>
                        Eryk Szułczyński
                    </span><br/>
                    Web developer
                    <br/>
                    <span className={styles.hero__icon}><FontAwesomeIcon icon={faGithubSquare} /></span>
                    <span className={styles.hero__icon}><FontAwesomeIcon icon={faLinkedin} /></span>
                </p> 
                <div className={styles.box}></div>
            </div>
    )
}

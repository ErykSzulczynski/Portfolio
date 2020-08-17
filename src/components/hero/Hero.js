import React from 'react'
import styles from './hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/fontawesome-free-brands'

export default function Hero() {

    let link = 'https://www.google.com'

    const elo = () => {
        console.log("elo")
    }

    return (
            <div className={styles.hero}>
                <div className={styles.hero__text}>
                    <span className={styles.hero__textHighlighted}>
                        Eryk Szułczyński
                    </span><br/>
                    Web developer
                    <br/>
                    
                </div>
                <div className={styles.hero__links}>
                    <span className={styles.hero__icon} onClick={() => {window.location.assign("https://github.com/ErykSzulczynski")}}><FontAwesomeIcon icon={faGithubSquare} /></span>
                    <span className={styles.hero__icon} onClick={() => {window.location.assign("https://www.linkedin.com/in/eryk-szu%C5%82czy%C5%84ski-225386192/")}}><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <div className={styles.box}></div>
            </div>
    )
}

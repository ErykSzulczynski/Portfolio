import React from 'react'
import styles from './hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default function Hero() {
    return (
        <Router>
            <div className={styles.hero}>
                <p className={styles.hero__text}>
                    <span className={styles.hero__textHighlighted}>
                        Eryk Szułczyński
                    </span><br/>
                    Web developer
                    <br/>
                    <span className={styles.hero__icon}><Link href="https://www.google.com"><FontAwesomeIcon icon={faGithubSquare} /></Link></span>
                    <span className={styles.hero__icon}><Link><FontAwesomeIcon icon={faLinkedin} /></Link></span>
                </p>
                <div className={styles.box}></div>
            </div>
        </Router>
    )
}

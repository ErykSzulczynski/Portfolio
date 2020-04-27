import React from "react"
import styles from "./navbar.module.scss"
import logo from "./Brzoza.png"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo} alt="logo" />
      <ul className={styles.links__list}>
        <li className={styles.links__listItem}><a href="#about">About</a></li>
        <li className={styles.links__listItem}><a href="#skills">Skills</a></li>
        <li className={styles.links__listItem}><a href="#projects">Projects</a></li>
        <li className={styles.links__listItem}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

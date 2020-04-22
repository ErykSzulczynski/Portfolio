import React from 'react'
import styles from './navbar.module.scss'

export default function NavbarMobile() {

    let isOpen = false

    function toggleMenu(){
        isOpen = !isOpen
        console.log("Menu opened")
    }

    return (
        <div className={styles.navbar}>
           <ul className={styles.links__list}>
               <li className={styles.links__listItem} onClick={() => {toggleMenu()}}>Mobile</li>
           </ul>
           <div className={isOpen ? styles.overlayOpened : styles.overlayHidden}></div>
        </div>
    )
}

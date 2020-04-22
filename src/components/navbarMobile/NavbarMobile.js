import React from 'react'
import styles from './navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class NavbarMobile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))
        console.log("Mobile menu opened")
        console.log("State: " + this.state.isOpen)
    }

    render(){
        return (
            <div className={styles.navbar}>
               <ul className={styles.links__list}>
                   <li className={styles.links__listItem} onClick={this.toggleMenu}>{this.state.isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}</li>
               </ul>
               <div className={this.state.isOpen ? styles.overlayOpened : styles.overlayHidden}>
                   <ul className={styles.overlay__menu}>
                       <li className={styles.overlay__menuItem}>About</li>
                       <li className={styles.overlay__menuItem}>Skills</li>
                       <li className={styles.overlay__menuItem}>Portfolio</li>
                       <li className={styles.overlay__menuItem}>Contact</li>
                   </ul>
               </div>
            </div>
        )
    }  
}

export default NavbarMobile

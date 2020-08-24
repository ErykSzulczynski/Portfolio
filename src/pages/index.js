import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbarMobile/NavbarMobile'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from "react-helmet"

export default function index() {

    function isMobile(){
        if(document.getElementsByTagName('body')[0].clientWidth < 768){
            return true
        }
        else{
            return false
        }
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Eryk Szułczyński - Web developer</title>
            </Helmet>
            {isMobile() ? <NavbarMobile/> : <Navbar/>}
            <Hero/>
            <div id="about"></div>
            <About/>
            <div id="skills"></div>
            <Skills/>
            <div id="projects"></div>
            <Projects/>
            <div id="contact"></div>
            <Contact/>
            <Footer/>
        </div>
    )
}

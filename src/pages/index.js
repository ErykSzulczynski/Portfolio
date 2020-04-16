import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'



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
            <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

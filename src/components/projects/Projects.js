import React from 'react'
import styles from './projects.module.scss'
import data from "../../data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faGraduationCap, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ProjectDetails from '../projectsDetails/ProjectDetails'

export default function Projects() {
    const [modalShow, setModalShow] = React.useState(false);
    const [targetTitle, setTargetTitle] = React.useState();
    const [targetTechnologies, setTargetTechnologies] = React.useState();
    const [targetDescription, setTargetDescription] = React.useState();
    const [targetLink, setTargetLink] = React.useState();

    const projects = data["projects"].map((project) => {
        return(<div className={styles.projectItem}>
            <div className={styles.projectTitle}>
                <h2>{project.title}</h2>
                </div>
                <div className={styles.projectStack}>
                    <ul className={styles.technologies__list}>
                        {project.technologies.map((technology) => {
                            return(<li>{technology}</li>)
                        })}
                    </ul>
                </div>
                <div className={styles.projectContent}>
                    <p>
                        {project.shortDescription}
                   </p>
                    <button className={styles.projectMore} onClick={() => {/*openProjectDescription(project.title, project.technologies, project.description)*/setTargetTitle(project.title); setTargetTechnologies(project.technologies); setTargetDescription(project.description); setTargetLink(project.link); setModalShow(true)}}>
                        More
                   </button>
                </div>
            </div>
        )}
    )

    return (
        <div>
            <div className={styles.projects}>
                <div className={styles.title}>
                    <p>Projects ☄️</p>
                </div>
                {projects}
            </div>
            <ProjectDetails
            show={modalShow}
            onHide={() => setModalShow(false)}
            title = {targetTitle}
            technologies = {targetTechnologies}
            description = {targetDescription}
            link = {targetLink}
            />
        </div>
    )
}

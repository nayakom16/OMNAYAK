import React, { use } from 'react'
import './Projects.css'
import { project } from '../../assets/assets'
import { animate, motion } from "motion/react"



const Projects = () => {
    
    return (
        <div className='projects' id='project'>
            <h2 className='projects-heading'>PROJECTS</h2>
            <div className="projects-contents">
                {project.map((item) => {
                    return (
                        <div className='project-item'>
                            <motion.div className="project-item-left"

                            >
                                <motion.img src={item.img} alt=""
                                    initial={{ opacity: 0, x: -500 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                />
                            </motion.div>

                            <motion.div className="project-item-right"
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <h1>{item.name}</h1>
                                <p>{item.des}</p>
                                <a href={item.link} target='_blank'><img className='icon-img' src={item.icon} alt="" /></a>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects

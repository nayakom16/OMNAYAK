import React from 'react'
import './Contact.css'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { animate, motion } from "motion/react"


const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h2 className="container-left-heading">
                <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
                >Let`s </motion.span>
                <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.9 }}
                >Work </motion.span>
                <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: 1.1 }}
                >Together </motion.span>
            </h2>
            <div className="contact-container">
                <div className="contact-left-container">

                    <div className="address">
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div className="contact-icon"><MdDriveFileRenameOutline /></div>
                            <p>OM NAYAK</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div className="contact-icon"><MdOutlineMarkEmailRead /></div>
                            <p>nayakankush71@gmail.com</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div className="contact-icon"><IoCallOutline /></div>
                            <p>8260886904</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div className="contact-icon"><a target='_blank'  href="https://github.com/nayakom16"><FaGithubSquare /></a></div>
                            <div className="contact-icon"><a target='_blank'  href="https://www.linkedin.com/in/om-nayak-1162a2270/"><FaLinkedin /></a></div>
                        </motion.div>
                    </div>
                </div>

                <div className="contact-right-container">
                    <div className='form-div'>
                        <motion.input type="text" placeholder='Name'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        />
                        <motion.input type="email" placeholder='Email'

                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        />
                        <motion.textarea placeholder='Message' rows='5'
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        ></motion.textarea>
                        <motion.button
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >Send Message</motion.button>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Contact

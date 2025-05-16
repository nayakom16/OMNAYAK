import React from 'react'
import './Navbar.css'
import { animate, motion } from "motion/react"

const Navbar = () => {

    
    return (
        <motion.div className='navbar'
            // variants={navbarVariants}
            // initial="hidden"
            animate="visible"
        >
            <motion.div className="logo-image"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 ,rotate : 360}}
                transition={{ duration: 0.3, ease: 'easeOut', delay: 1 }}
            >
                <img src="profile.png" alt="" />
            </motion.div>
            <div className="navlink">
                <ul>
                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut', delay: 1.2 }}
                    >Home</motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut', delay: 1.4 }}
                    ><a href="#project">Projects</a></motion.li>
                    <motion.li
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut', delay: 1.6 }}
                    ><a href="#contact">Contact</a></motion.li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Navbar

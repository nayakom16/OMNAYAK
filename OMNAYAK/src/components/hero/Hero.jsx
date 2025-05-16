import React from 'react'
import './hero.css'
import { animate, easeOut, motion } from "motion/react"


const Hero = () => {

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textcontainer"
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }} >
                    <motion.h2
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }} >OM NAYAK</motion.h2>
                    <motion.h1 >Web Developer <br /> and UI designer</motion.h1>
                    <motion.div className="buttons"
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <motion.button
                            initial={{ opacity: 0, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        ><a href="OM_Nayak.pdf" download >Download CV</a></motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: -500 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        ><a href="#contact">Contact Me</a></motion.button>

                    </motion.div>
                    <motion.img
                        // initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 0, y: 10 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        src="scroll.png" alt=""
                    />
                </motion.div>
                <div className="hero-background-text">
                    <motion.div className="slidingtextcontainer"
                        initial={{ x: 0 }}
                        animate={{ x: "-220%" }}
                        transition={{ repeat: Infinity, repeatType: "morror", duration: 290 }}
                    >
                        Programmer UI designer Developer Programmer UI designer Developer
                    </motion.div>
                </div>
                <motion.div className="imagecontainer"
                    initial={{ opacity:0 }}
                    animate={{ opacity :1}}
                    transition={{  duration: 5  , ease : easeOut}}
                >
                    <img src="profile.png" alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero

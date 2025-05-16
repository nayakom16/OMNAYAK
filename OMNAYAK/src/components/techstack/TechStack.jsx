import React from 'react'
import './Tachstack.css'
import { motion } from "motion/react"
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className='techstack'>
      <motion.h2 className="technologies"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >TECHNOLOGIES</motion.h2>

      <div className="techstackcontents">
        <motion.div
          animate={{ x: [0, 2, -2, 0], y: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="icon"><FaReact /></motion.div>
        <motion.div
          animate={{ x: [0, 2, -2, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="icon"><RiJavascriptLine /></motion.div>
        <motion.div
          animate={{ x: [0, 2, -2, 0], y: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="icon"><AiOutlineHtml5 /></motion.div>
        <motion.div
          animate={{ x: [0, 2, -2, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="icon"><TbBrandCss3 /></motion.div>
        <motion.div
          animate={{ x: [0, 2, -2, 0], y: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="icon"><FaFigma /></motion.div>
      </div>
    </div>
  )
}

export default TechStack

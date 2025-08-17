'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { delay } from 'motion'
const Execom = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8
      }
    }
  };

  const listItem = {
    transition:{
      delay:0.5
    },
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <div className="bg-white py-5" id='execom'>
      <div className='screen sm:px-10 px-5'>
        <h4 className='text-6xl text-black'><span className='font-semibold text-primary'>IEDC</span> EXECOM</h4>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container} className="screen sm:px-10 px-5 pt-5 grid md:grid-cols-4 grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/INTRO2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/NODALOFFICER2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/COMMUNITY2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/OPERATIONS2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/MARKETING2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/TECH2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/CREATIVE2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/FINANCE2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/IPRL2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/STUDENT1-2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/STUDENT2-2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={listItem} className="">
          <Image src={'/WIL2025.jpg'} alt='' width={500} height={700} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Execom
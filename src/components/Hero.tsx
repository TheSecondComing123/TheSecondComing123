'use client';

import { motion } from 'framer-motion';
import { containerVariantsWithDelay, itemVariants } from '@/constants/animations';

export default function Hero() {
  return (
    <section className="pt-32 pb-0 flex items-center justify-center bg-[#16181d]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariantsWithDelay}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          variants={itemVariants}
        >
          Hi, I&apos;m <span className="text-green-600">Alan Bagel</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Competitive Programmer • Developer
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
          variants={itemVariants}
        >
          I enjoy doing competitive programming and building websites and apps in my free time,
          like this one!
        </motion.p>
      </motion.div>
    </section>
  )
}

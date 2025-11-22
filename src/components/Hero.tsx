'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98] as const
      }
    }
  };

  return (
    <section className="pt-32 pb-10 flex items-center justify-center bg-[#16181d]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
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
          Competitve Programmer, Developer
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          I enjoy doing competitive programming and building websites and apps in my free time,
          like this one!
        </motion.p>
      </motion.div>
    </section>
  )
}

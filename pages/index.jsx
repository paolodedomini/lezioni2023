import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import style from './indexStyle.module.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
export default function Home() {
  const section1 = useRef(null)
  const section2 = useRef(null)
  const isInview1 = useInView(section1, { once: false })
  const isInview2 = useInView(section2, { once: false })
  return (
    <>
      <Hero />
      <Divisorio tooltip={'test'} />
      <motion.section
        ref={section1}
        className={style.sectionHomeSx}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <div className={style.sectionHomeSx__boxText}>
          <h2>In evidenza</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
        </div>
        <Image src={'/home-sezione-1.jpg'} width={845} height={608} alt='home sezione 1' />

      </motion.section>

      <motion.section
        ref={section2}
        className={style.sectionHomeDx}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <Image src={'/home-sezione-2.jpg'} width={845} height={608} alt='home sezione 1' />

        <div className={style.sectionHomeDx__boxText}>
          <h2>La tradizione</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
        </div>


      </motion.section>
    </>
  )
}

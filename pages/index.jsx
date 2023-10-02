import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Divisorio from '../components/divisorio'
import GrigliaProdotti from '../components/grigliaProdotti'
import style from './indexStyle.module.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GET } from '../utils/HTTPS'



export default function Home({ hero, prodotti }) {
  const section1 = useRef(null)
  const section2 = useRef(null)
  const sectionGriglia = useRef(null)
  const isInview1 = useInView(section1, { once: false })
  const isInview2 = useInView(section2, { once: false })
  const isInviewGriglia = useInView(sectionGriglia, { once: true })

  return (
    <div className={style.home}>
      <Hero data={hero} />
      <Divisorio />
      <motion.section
        ref={sectionGriglia}
        className={style.__sectionGriglia}
        initial={{ opacity: 0, y: 10 }}
        animate={isInviewGriglia ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: .3, duration: 1 }}
      >
        <GrigliaProdotti prodotti={prodotti} titolo={'In evidenza'} />
      </motion.section>
      <motion.section ref={section1}
        className={style.__sectionHome}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}>
        <div className={style.__sectionHome__boxText}>
          <div className={style.__sectionHome__boxText__text}>
            <h2>Il territorio</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
          </div>
        </div>

        <Image src={'/home-sezione-1.jpg'} width={845} height={608} alt='home sezione 1' />

      </motion.section>

      <motion.section
        ref={section2}
        className={style.__sectionHome}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <Image src={'/home-sezione-2.jpg'} width={845} height={608} alt='home sezione 1' />

        <div className={style.__sectionHome__boxText}>
          <div className={style.__sectionHome__boxText__text} >
            <h2>La tradizione</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
          </div>
        </div>


      </motion.section>
    </div>
  )
}
export async function getServerSideProps() {
  const hero = await GET('https://api.npoint.io/e1196a33a6420ecb773e')
  const prodotti = await GET('https://api.npoint.io/f2fea3df1468a4daf95f')
  return { props: { hero, prodotti } }
}
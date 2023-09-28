import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Divisorio from '../components/divisorio'
import GrigliaProdotti from '../components/grigliaProdotti'
import style from './indexStyle.module.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const data = {
  prodotti: [
    {
      name: 'Fermata 125',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/fermata125.png',
    },
    {
      name: 'Ferrero',
      anno: '2011',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/ferrero.png',
    },
    {
      name: 'Syrah',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/syrah.png',
    },
    {
      name: 'Valpolicella',
      anno: '1956',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/valpolicella.png',
    },
    {
      name: 'Chianti Classico',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/fermata125.png',
    },
    {
      name: 'Amarone',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/ferrero.png',
    },
    {
      name: 'Merlot',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/syrah.png',
    },
    {
      name: 'Appassimento',
      anno: '2010',
      path: '/prodotti/chianti-classico',
      img: '/immagini-prodotto/valpolicella.png',
    }
  ]
}

export default function Home() {
  const section1 = useRef(null)
  const section2 = useRef(null)
  const sectionGriglia = useRef(null)
  const isInview1 = useInView(section1, { once: false })
  const isInview2 = useInView(section2, { once: false })
  const isInviewGriglia = useInView(sectionGriglia, { once: false })
  return (
    <>
      <Hero />
      <Divisorio tooltip={'test'} />
      <motion.section className={style.sectionGriglia}>
        <GrigliaProdotti data={data} titolo={'In evidenza'} />
      </motion.section>
      <motion.section ref={section1}
        className={style.sectionHome}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}>
        <div className={style.sectionHome__boxText}>
          <div className={style.sectionHome__boxText__text}>
            <h2>Il territorio</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
          </div>
        </div>

        <Image src={'/home-sezione-1.jpg'} width={845} height={608} alt='home sezione 1' />

      </motion.section>

      <motion.section
        ref={section2}
        className={style.sectionHome}
        initial={{ opacity: 0, y: 10 }}
        animate={isInview2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
      >
        <Image src={'/home-sezione-2.jpg'} width={845} height={608} alt='home sezione 1' />

        <div className={style.sectionHome__boxText}>
          <div className={style.sectionHome__boxText__text} >
            <h2>La tradizione</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
          </div>
        </div>


      </motion.section>
    </>
  )
}

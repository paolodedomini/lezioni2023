import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import style from './indexStyle.module.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
export default function Home() {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true, threshold: 30 })
  return (
    <>
      <Hero />
      <section ref={ref} className={style.sectionHomeSx}>
        <div className={style.sectionHomeSx__boxText}>
          <h2>In evidenza</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis voluptas quisquam beatae sed, cumque, dolorem, obcaecati iste maiores suscipit recusandae id ipsum quam? Maxime deleniti eum nesciunt beatae! Aspernatur. </p>
        </div>
        <Image src={'/home-sezione-1.jpg'} width={845} height={608} alt='home sezione 1' />

      </section>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Divisorio from '../components/divisorio'
export default function Home() {
  return (
    <>
      <Hero />
      <Divisorio tooltip={'test'} />
    </>
  )
}

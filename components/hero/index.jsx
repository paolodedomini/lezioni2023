import style from './style.module.scss'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const data = [
    {
        name: 'Fermata 125',
        path: '/prodotti/chianti-classico',
        img: '/immagini-prodotto/fermata125.png',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
        name: 'Ferrero',
        path: '/prodotti/chianti-classico',
        img: '/immagini-prodotto/ferrero.png',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
        name: 'Syrah',
        path: '/prodotti/chianti-classico',
        img: '/immagini-prodotto/syrah.png',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
        name: 'Valpolicella',
        path: '/prodotti/chianti-classico',
        img: '/immagini-prodotto/valpolicella.png',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    }
]
function Hero() {
    const [active, setActive] = useState(-1)
    const refContent = useRef(null)
    const [pos, setPos] = useState(0)
    //se l'elemento è attivo carica la stessa immagine sul box informazioni nella posizione corretta e fa partire l'animaizone
    useEffect(() => {

        if (refContent.current != null) {
            if (active !== -1) {

                setPos(refContent.current.children[active].offsetLeft)
            }

        }

    }, [pos])

    console.log(pos)
    return (
        <>
            <AnimatePresence>
                {(active != -1) &&
                    <motion.div className={style.heroInfo}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: .5, ease: 'easeInOut' }}
                    >  <div onClick={() => setActive(-1)}>close</div>
                        <motion.div className={style.heroInfo__boxImage}
                            initial={{ opacity: 0, left: pos }}
                            animate={{ opacity: 1, left: 0 }}
                            exit={{ opacity: 0, left: '50%' }}
                            transition={{ delay: .5, duration: .5, ease: 'easeInOut' }}
                        >
                            <Image src={data[active]?.img} alt={data[active]?.name} width={100} height={400} />
                        </motion.div>

                    </motion.div>}
            </AnimatePresence>
            <div className={style.heroContainer} ref={refContent}>

                {
                    data.map((item, index) => {
                        return (

                            <div onClick={() => { setActive(index) }} className={`style.heroContainer__heroBox`} key={index}>
                                <div className={style.heroContainer__heroBox__image} >
                                    <Image src={item.img} alt={item.name} layout="fill" objectFit="cover" />

                                </div>
                            </div>


                        )
                    })

                }

            </div ></>)
}

export default Hero
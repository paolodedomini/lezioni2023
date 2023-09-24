import style from './style.module.scss'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const data = [
    {
        name: 'Fermata 125',
        path: '/prodotti/chianti-classico',
        img: '/immagini-prodotto/fermata125.png',
        text: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
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
    const [pos, setPos] = useState({})

    //se l'elemento è attivo carica la stessa immagine sul box informazioni nella posizione corretta e fa partire l'animazione

    const measuredRef = useCallback(node => {

        if (node !== null && active != -1) {
            const position = {
                x: node.children[active].offsetLeft + node.offsetLeft,
                y: node.offsetTop,
                postitionBox: node.offsetLeft
            }

            setPos(position)
        }
    }, [active]);




    return (
        <>
            <AnimatePresence>
                {(active != -1) &&
                    <div className={style.heroInfo}>
                        <motion.div className={style.heroInfo__backgroundClose}
                            onClick={() => setActive(-1)}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0, }}
                            transition={{ delay: .5, duration: .5, ease: 'easeInOut' }}
                        ></motion.div>
                        <motion.div
                            className={style.heroInfo__boxWine}
                            initial={{
                                opacity: 0, left: pos.x, top: pos.y,
                            }}
                            animate={{
                                opacity: 1,
                                left: [pos.x, pos.postitionBox + pos.postitionBox / 2],
                                top: pos.y,
                                transition: {
                                    duration: 3,
                                    ease: 'easeInOut',
                                }
                            }}
                            exit={{
                                opacity: 0, left: pos.x, top: pos.y,
                                transition: {
                                    duration: 1,
                                    ease: 'easeInOut',
                                }
                            }}
                        >

                            <Image src={data[active]?.img} alt={data[active]?.name} width={115} height={460} />
                            <motion.div class={style.heroInfo__boxWine__boxText}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: 2, duration: 1 }
                                }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, top: 10 }}
                                    animate={{
                                        opacity: 1, top: 0,
                                        transition: { delay: 3, duration: 1 }
                                    }}
                                    exit={{ opacity: 0 }}
                                >{data[active]?.name}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, top: 10 }}
                                    animate={{
                                        opacity: 1, top: 0,
                                        transition: { delay: 3.5, duration: 1 }
                                    }}
                                    exit={{ opacity: 0 }}

                                > <hr />{data[active]?.text}</motion.p>
                            </motion.div>
                        </motion.div>

                    </div>}
            </AnimatePresence>
            <div className={style.heroContainer}
                ref={measuredRef}>
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
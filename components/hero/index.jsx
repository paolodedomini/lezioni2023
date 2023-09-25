import style from './style.module.scss'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { boxWine, boxText, header, headerP } from './animations'
const data = {
    titolo: 'Selezione autunnale',
    paragrafo: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard',
    prodotti: [
        {
            name: 'Fermata 125',
            cantina: 'Cantina di Radda',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/fermata125.png',
            text: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
        },
        {
            name: 'Ferrero',
            cantina: 'Cantina di Radda',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/ferrero.png',
            text: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
        },
        {
            name: 'Syrah',
            cantina: 'Cantina di Radda',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/syrah.png',
            text: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
        },
        {
            name: 'Valpolicella',
            cantina: 'Cantina di Radda',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/valpolicella.png',
            text: 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.'
        }
    ]
}
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
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={boxWine(pos)}
                        >

                            <Image src={data.prodotti[active]?.img} alt={data.prodotti[active]?.name} width={115} height={460} />
                            <motion.div class={style.heroInfo__boxWine__boxText}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={boxText}
                            >
                                <motion.header
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={header}
                                >
                                    <h2>{data.prodotti[active]?.name}</h2>
                                    <h3>{data.prodotti[active].cantina}</h3>
                                </motion.header>
                                <motion.p
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={headerP}
                                >
                                    <hr />{data.prodotti[active]?.text}
                                    <Image src="/ui/freccia.svg" alt="arrow" width={400} height={30} />
                                </motion.p>
                            </motion.div>
                        </motion.div>

                    </div>}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className={style.heroContainer}
                    ref={measuredRef}>
                    {
                        data.prodotti.map((item, index) => {
                            return (
                                <div onClick={() => { setActive(index) }} className={`style.heroContainer__heroBox`} key={index}>
                                    <div className={style.heroContainer__heroBox__image} >
                                        <Image src={item.img} alt={item.name} layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div >
                <div className={style.mainContent}>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: .5, duration: 1 }}
                    >{data.titolo}</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 1, duration: 1 }}
                    > {data.paragrafo}</motion.p>
                </div>
            </motion.div ></>)
}

export default Hero
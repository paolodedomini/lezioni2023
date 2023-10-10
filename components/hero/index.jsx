import style from './style.module.scss'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { boxWine, boxText, header, headerP } from './animations'
import { useRouter } from 'next/router'

function Hero({ data }) {
    const [active, setActive] = useState(-1)
    const [pos, setPos] = useState({})
    const router = useRouter()
    useEffect(() => {
        if (active != -1) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'unset'
        }
    }, [active])

    function handleClick(path, sku) {
        document.body.style.overflow = 'unset'
        router.push({
            pathname: `/prodotti/${path}`,
            query: { SKU: sku },
        })
    }

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
        <div className={style.hero}>
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className={style.__heroContainer}
                    ref={measuredRef}>
                    {
                        data.prodotti.map((item, index) => {
                            return (
                                <div onClick={() => { setActive(index) }} className={style.__heroContainer__heroBox} key={index}>
                                    <div className={style.__heroContainer__heroBox__image} >
                                        <Image src={item.img} alt={item.name} fill sizes='100%' />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div >
                <div className={style.__mainContent}>
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
            </motion.div >
            <AnimatePresence>
                {(active != -1) &&
                    <div className={style.__heroInfo}>
                        <motion.div style={{ backgroundImage: `url(${data.background})` }} className={style.__heroInfo__backgroundClose}
                            onClick={() => setActive(-1)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0, }}
                            transition={{ delay: .5, duration: .5, ease: 'easeInOut' }}
                        ></motion.div>
                        <motion.div
                            className={style.__heroInfo__boxWine}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={boxWine(pos)}
                        >
                            <div className={style.__heroInfo__boxWine__link} onClick={() => handleClick(data.prodotti[active].name, data.prodotti[active].SKU)}>  <Image src={data.prodotti[active]?.img} alt={data.prodotti[active]?.name} width={115} height={460} /></div>
                            <motion.div className={style.__heroInfo__boxWine__boxText}
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
                                    {data.prodotti[active]?.text}
                                    <div className={style.__heroInfo__boxWine__boxText__buttonFreccia} onClick={() => handleClick(data.prodotti[active].name, data.prodotti[active].SKU)}>
                                        <Image src="/ui/freccia.svg" alt="arrow" width={400} height={30} /></div>
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>}
            </AnimatePresence>

        </div>)
}

export default Hero
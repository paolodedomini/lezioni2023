import style from './style.module.scss'
import Image from 'next/image'
import Divisorio from '../../../components/divisorio'
import { useRouter } from 'next/router'
import { GET } from '../../../utils/HTTPS'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Prodotto({ prodotti }) {
    const router = useRouter()
    const [SKU, setSku] = useState(router.query.SKU)


    //useEffect per aggiornare lo SKU quando cambia il router.query (quando cambia la pagina) per evitare che l'animazione di uscita non venga eseguita

    useEffect(() => {
        if (router.query.SKU) {
            setSku(router.query.SKU)
        }
    }, [router.query])

    const data = prodotti.find((prodotto) => {
        return prodotto.SKU === SKU
    })

    const section1 = useRef(null)
    const section2 = useRef(null)
    const isInview1 = useInView(section1, { once: false })
    const isInview2 = useInView(section2, { once: false })

    return (
        <div className={style.schedaProdotto}>
            <motion.section
                className={style.__section1}
                ref={section1}
                initial={{ opacity: 0, y: 10 }}
                animate={isInview1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 1 }}
            >
                <div className={style.__section1__container} >
                    <div className={style.__section1__container__boxSx}>
                        <Image src={data.image} width={100} height={380} alt={data.nome} />
                    </div>
                    <div className={style.__section1__container__boxDx}>
                        <h1>
                            {data.nome}
                        </h1>
                        <h2>{data.anno}</h2>
                        <p>{data.descrizione1}</p>
                    </div>
                </div>
            </motion.section>
            <Divisorio size={200} />
            <section className={style.__section2}>
                <div className={style.__section2__container} >
                    <h2>Descrizione</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, provident minus. Nesciunt laboriosam sapiente ut in commodi maiores quo tempora animi reiciendis ea laudantium, ipsam velit. Quia porro sint repellat?</p>

                </div>
                <motion.div
                    ref={section2}
                    className={style.__section2__infoContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInview2 ?
                        { opacity: 1, y: 0 } :
                        { opacity: 0, y: 10, }
                    }
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: .3, duration: 1 }}
                >
                    <div className={style.__section2__infoContainer__box}>
                        <ul>
                            <li>
                                <span>Classificazione: </span>
                                <span>{data.classificazione}</span>
                            </li>
                            <li>
                                <span>Formato: </span>
                                <span>{data.formato}</span>
                            </li>
                            <li>
                                <span>Grado Alcolico: </span>
                                <span>{data.grado_alcolico}</span>
                            </li>
                            <li>
                                <span>Vitigni: </span>
                                <span>{data.vitigni}</span>
                            </li>
                            <li>
                                <span>Servire: </span>
                                <span>{data.servire}</span>
                            </li>
                            <li>
                                <span>Longevità: </span>
                                <span>{data.longevita}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={style.__section2__infoContainer__box}>
                        <Image src={data.image} width={165} height={660} alt={data.nome}></Image>
                    </div>
                    <motion.div className={style.__section2__infoContainer__box}
                        animate={isInview2 ? { opacity: 1, y: 0, transition: { delay: .5 } } : { opacity: 0, y: 10 }}>

                        <div
                            className={style.__section2__infoContainer__box__acquista}>

                            <div className={style.__section2__infoContainer__box__acquista__text}>
                                <h3>{data.prezzo}€</h3>
                                <span>*IVA inclusa</span>
                                <button>Acquista</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )

}

export default Prodotto
export async function getServerSideProps() {
    const prodotti = await GET('https://api.npoint.io/f2fea3df1468a4daf95f')
    return { props: { prodotti } }
}
import style from './style.module.scss'
import Image from 'next/image'
import Divisorio from '../../../components/divisorio'
import { useRouter } from 'next/router'
import { GET } from '../../../utils/HTTPS'
import { motion, AnimatePresence } from 'framer-motion'

function Prodotto({ prodotti }) {
    const router = useRouter()
    const sku = router.query.SKU
    const data = prodotti.find((prodotto) => {
        return prodotto.SKU === sku
    })

    return (
        <div className={style.schedaProdotto}>
            <section className={style.__section1}>
                <div className={style.__section1__container} >
                    <div className={style.__section1__container__boxSx}>
                        <Image src={data.image} width={100} height={380} />
                    </div>
                    <div className={style.__section1__container__boxDx}>
                        <h1>
                            {data.nome}
                        </h1>
                        <h2>{data.anno}</h2>
                        <p>{data.descrizione1}</p>
                    </div>
                </div>
            </section>
            <Divisorio size={150} />
            <section className={style.__section2} >
                <div className={style.__section2__container} >
                    <h2>Descrizione</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, provident minus. Nesciunt laboriosam sapiente ut in commodi maiores quo tempora animi reiciendis ea laudantium, ipsam velit. Quia porro sint repellat?</p>

                </div>
                <div className={style.__section2__infoContainer} >
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
                        </ul>
                    </div>
                    <div className={style.__section2__infoContainer__box}>
                        <Image src={data.image} width={165} height={660}></Image>
                    </div>
                    <div className={style.__section2__infoContainer__box}>
                        <ul>
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
                </div>
            </section>
        </div>
    )

}

export default Prodotto
export async function getServerSideProps() {
    const prodotti = await GET('https://api.npoint.io/f2fea3df1468a4daf95f')
    return { props: { prodotti } }
}
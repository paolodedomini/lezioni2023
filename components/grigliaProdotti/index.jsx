import style from './style.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
function GrigliaProdotti({ prodotti, titolo, num = -1 }) {

    const [filterProdotti, setFilterProdotti] = useState([])

    useEffect(() => {
        if (prodotti.length > 0) {
            if (num !== -1) {
                const prodottiFiltrati = prodotti.filter((prodotto, index) => {
                    return index < num
                })
                setFilterProdotti(prodottiFiltrati)
            } else {
                setFilterProdotti(prodotti)
            }
        }
    }, [])

    return (
        <div className={style.GrigliaProdotti}>
            <h2>{titolo}</h2>
            <div className={style.__containerLoop} >

                {prodotti.map((prodotto, index) => {
                    return (
                        <div className={style.__containerLoop__box} key={index}>
                            <div className={style.__containerLoop__box__img}>
                                {prodotto.image ?
                                    <Link href={`/prodotti/${prodotto.nome}`}>  <Image src={prodotto.image} alt={prodotto.name} width={80} height={320} /></Link> :
                                    <Link href={`/prodotti/${prodotto.nome}`}> <Image src={'/ui/bottiglia-default.png'} alt={prodotto.name} width={80} height={320} /></Link>
                                }
                            </div>
                            <div className={style.__containerLoop__box__text}>
                                <h3>{prodotto.nome}
                                    <span>{prodotto.anno}</span>
                                </h3>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default GrigliaProdotti
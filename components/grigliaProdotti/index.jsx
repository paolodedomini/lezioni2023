import style from './style.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

function GrigliaProdotti({ data, titolo, num = -1 }) {

    const [prodotti, setProdotti] = useState([])

    useEffect(() => {
        if (num !== -1) {
            const prodotti = data.prodotti.filter((prodotto, index) => {
                return index < num
            })
            setProdotti(prodotti)
        } else {
            setProdotti(data.prodotti)
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
                                {prodotto.img ?
                                    <Image src={prodotto.img} alt={prodotto.name} width={80} height={320} /> :
                                    <Image src={'/ui/bottiglia-default.png'} alt={prodotto.name} width={80} height={320} />
                                }
                            </div>
                            <div className={style.__containerLoop__box__text}>
                                <h3>{prodotto.name}
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
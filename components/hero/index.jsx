import style from './style.module.scss'
import Image from 'next/image'
import { useState, useRef } from 'react'

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

    //se l'elemento è attivo carica la stessa immagine sul box informazioni nella posizione corretta e fa partire l'animaizone
    if (refContent.current != null) {
        if (active !== -1) {
            console.log(refContent.current.children[active])
        }

    }

    return (<div className={style.heroContainer} ref={refContent}>
        {data.map((item, index) => {
            return (

                <div onClick={() => { setActive(index) }} className={`style.heroContainer__heroBox ${active === index && style["heroContainer__heroBox--active"]}`} key={index}>
                    <div className={style.heroContainer__heroBox__image} >
                        <Image src={item.img} alt={item.name} layout="fill" objectFit="cover" />

                    </div>
                </div>


            )
        })

        }

    </div>)
}

export default Hero
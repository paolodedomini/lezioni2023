import style from './style.module.scss'
import Image from 'next/image'
const data = {
    titolo: 'In evidenza',
    prodotti: [
        {
            name: 'Fermata 125',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/fermata125.png',
        },
        {
            name: 'Ferrero',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/ferrero.png',
        },
        {
            name: 'Syrah',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/syrah.png',
        },
        {
            name: 'Valpolicella',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/valpolicella.png',
        },
        {
            name: 'Chianti Classico',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/fermata125.png',
        },
        {
            name: 'Amarone',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/ferrero.png',
        },
        {
            name: 'Merlot',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/syrah.png',
        },
        {
            name: 'Appassimento',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/valpolicella.png',
        }
    ]
}
function GrigliaProdotti() {
    return (
        <div className={style.container}>
            <h2>{data.titolo}</h2>
            <div className={style.containerLoop} >

                {data.prodotti.map((prodotto, index) => {
                    return (
                        <div className={style.containerLoop__box} key={index}>
                            <div className={style.containerLoop__box__img}>
                                <Image src={prodotto.img} alt={prodotto.name} width={80} height={320} />
                            </div>
                            <div className={style.containerLoop__box__text}>
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
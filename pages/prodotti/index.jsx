import GrigliaProdotti from "../../components/grigliaProdotti"
import style from './style.module.scss'

const data = {
    prodotti: [
        {
            name: 'Fermata 125',
            anno: '2010',
            path: '/prodotti/chianti-classico',
            img: '/immagini-prodotto/fermata125.png',
        },
        {
            name: 'Ferrero',
            anno: '2011',
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
            anno: '1956',
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


function Prodotti() {
    return (
        <div className={style.prodotti}>
            <h1>Prodotti </h1>
            <GrigliaProdotti data={data} />
        </div>
    )
}
export default Prodotti
import style from './style.module.scss'
import Image from 'next/image'
import Divisorio from '../../../components/divisorio'

const data = {
    nome: 'Fermata 125',
    anno: '2010',
    classificazione: 'Chianti Classico',
    formato: '750ml',
    grado_alcolico: '13,5%',
    vitigni: 'Sangiovese 90%, Canaiolo 10%',
    servire: '18° C',
    longevita: '10 anni',
    bicchiere: 'Bicchiere ampio',
    image: '/immagini-prodotto/fermata-big.png',
    descrizione1: 'Il Moet & Chandon Dom Perignon Champagne Vintage è un brut millesimato, cuvée di prestigio della storica maison di Épernay Moet & Chandon, erede spirituale del monaco enologo dom Pierre Pérignon, cui si attribuisce affinamento della tecnica di produzione dello champagne nel XVII secolo presso antica Abbazia di Hautvillers. Questo prestigioso champagne AOC è un assemblaggio delle migliori uve grand cru dell azienda, selezionate nella singola annata, i vitigni Chardonnay e Pinot Nero, allevati sui terreni calcarei della regione francese Champagne-Ardenne',
    descrizione2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem architecto, cumque est eveniet non corrupti quia laboriosam ipsa tenetur odit tempore nam culpa, alias officiis id. Ab quam ducimus asperiores!',
}

function Prodotto() {

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
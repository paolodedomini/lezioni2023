import GrigliaProdotti from "../../components/grigliaProdotti"
import style from './style.module.scss'
import { GET } from "../../utils/HTTPS"
import Loading from "../../components/loading"


function Prodotti({ prodotti }) {
    return (
        <Loading data={prodotti}>
            <div className={style.prodotti}>
                <h1>Prodotti </h1>
                <GrigliaProdotti prodotti={prodotti} num={8} />
            </div>
        </Loading>
    )
}
export default Prodotti
export async function getServerSideProps() {
    const prodotti = await GET('https://api.npoint.io/f2fea3df1468a4daf95f')

    return { props: { prodotti } }
}
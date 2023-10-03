import GrigliaProdotti from "../../components/grigliaProdotti"
import style from './style.module.scss'
import { GET } from "../../utils/HTTPS"



function Prodotti({ prodotti }) {
    return (
        <div className={style.prodotti}>
            <h1>Prodotti </h1>
            <GrigliaProdotti prodotti={prodotti} num={8} />
        </div>
    )
}
export default Prodotti
export async function getServerSideProps() {
    const prodotti = await GET('https://api.npoint.io/f2fea3df1468a4daf95f')
    return { props: { prodotti } }
}
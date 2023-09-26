import style from './style.module.scss';

function Divisorio({ tooltip, size }) {

    return (
        <div className={style.divisorio} >
            {tooltip && <div className={style.divisorio__tooltip}>{tooltip}</div>}
            <hr style={{ height: size ? size : 100 }} />
        </div>
    )

}
export default Divisorio;

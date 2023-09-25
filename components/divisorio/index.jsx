import style from './style.module.scss';

function Divisorio({ tooltip }) {

    return (
        <div className={style.divisorio} >
            {tooltip && <div className={style.divisorio__tooltip}>{tooltip}</div>}
            <hr />


        </div>
    )

}
export default Divisorio;

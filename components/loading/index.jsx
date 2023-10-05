import { BsTypeH1 } from 'react-icons/bs'
import style from './style.module.scss'
import { useEffect, useState } from 'react';
function Loading({ children, data }) {

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        if (data.length === 0) {
            setTimeout(() => {
                setRefresh(true)
            }, 5000);
        }

    }, [])

    return (
        <>
            {(data.length === 0 && !refresh) &&
                <div className={style.loading}>
                    <h1>loading...</h1>
                </div>}

            {(data.length === 0 && refresh) &&
                <div className={style.loading}>
                    <h1>Problema con il caricamento dei dati, ricarica la pagina</h1>
                </div>}

            {data.length > 0 && children}
        </>

    )
}
export default Loading
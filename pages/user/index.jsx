import style from './style.module.scss'
import router from 'next/router'

function UserPage() {
    function logOut() {
        localStorage.removeItem('login')
        router.push('/')
    }
    function goToStore() {
        router.push('/')
    }

    return (
        <div className={style.userPage}>
            <div className={style.userPage__container} >
                <h1>Area Utente</h1>
                <div className={style.userPage__container__acquisti} >
                    <h3>Storico Acquisti</h3>
                    <ul>
                        <li>
                            <h4>data:12/12/2323 </h4>
                            <div><ul>
                                <li>prodotto1</li>
                                <li>prodotto2</li>
                            </ul></div>

                            <div>prezzo: 123</div>
                        </li>
                        <li>
                            <h4>data:12/12/2323 </h4>
                            <div><ul>
                                <li>prodotto1</li>
                                <li>prodotto2</li>
                            </ul></div>

                            <div>prezzo: 123</div>
                        </li>

                    </ul>
                </div>
                <div className={style.userPage__container__dati} ></div>
                <div className={style.userPage__container__ui} >

                    <button onClick={() => goToStore()} >Vai allo store</button>
                    <button onClick={() => logOut()} >Logout</button>

                </div>

            </div>
        </div>
    )
}

export default UserPage
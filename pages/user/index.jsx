import style from './style.module.scss'
import router from 'next/router'

function UserPage() {
    function logOut() {
        localStorage.removeItem('login')
        router.push('/')
    }

    return (
        <div className={style.userPage}>
            <div className={style.userPage__container} >
                <div className={style.userPage__container__acquisti} ></div>
                <div className={style.userPage__container__dati} ></div>
                <div className={style.userPage__container__logout} >
                    <h1>Area Utente</h1>
                    <button onClick={() => logOut()} >Logout</button>
                </div>

            </div>
        </div>
    )
}

export default UserPage
import style from './style.module.scss'
function Login() {
    return (
        <div className={style.login}>
            <div className={style.login__box}>
                <div className={style.login__box__formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={style.login__box__formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}
export default Login
import style from './style.module.scss'
function Login() {
    return (
        <div className={style.login}>
            <div className={style.login__formgroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className={style.login__formgroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
        </div>
    )
}
export default Login
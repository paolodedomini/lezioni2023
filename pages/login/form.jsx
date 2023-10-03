import style from './style.module.scss'
function FormLogReg({ email, password, setEmail, setPassword, handleSubmit }) {
    return (
        <>
            <div className={style.login__box__formGroup}>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
            </div>
            <div className={style.login__box__formGroup}>
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
            </div>
            <button className={style.login__box__btnSignin} onClick={() => handleSubmit(email, password)}>Login</button>
            <button className={style.login__box__btnSignup}>Registrati</button></>)
}
export default FormLogReg
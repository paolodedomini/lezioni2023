import style from './style.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistrationForm, setIsRegistrationForm] = useState(false)

    function handleSubmintRegistration(email, password) {
        console.log('registrazione!!!' + email + password)
    }

    function handleSubmit(email, password) {
        if (email && password) {
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            localStorage.setItem('login', true)
        }
        else { console.log('Please fill in all fields') }

    }


    return (
        <div className={style.login}>
            <motion.div
                className={style.login__box}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <div className={style.login__box__formGroup}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                </div>
                <div className={style.login__box__formGroup}>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                </div>
                {isRegistrationForm && <div className={style.login__box__formGroup}>
                    <label htmlFor="confirmPass">Conferma password</label>
                    <input type="input" name="confirmPass" id="confirmPass" />
                </div>}


                {isRegistrationForm ?
                    <>
                        <div className={style['login__box__formGroup--checkbox']}>
                            <input type="checkbox" name="privacy" id="privacy" />
                            <label htmlFor="privacy">Accetto tutteccose</label>
                        </div>
                        <button className={style.login__box__btnRegistrati} onClick={() => handleSubmintRegistration(email, password)}>Registrati</button>
                    </> :
                    <button className={style.login__box__btnSignin} onClick={() => handleSubmit(email, password)}>Login</button>}

                <button onClick={() => setIsRegistrationForm((prev) => !prev)} className={style.login__box__btnSignup}>
                    {
                        isRegistrationForm ? 'Login' : 'Registrati'
                    }
                </button>
            </motion.div>
        </div>
    )
}
export default Login
import style from './style.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import router from 'next/router'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [condizioni, setCondizioni] = useState(false)
    const [isRegistrationForm, setIsRegistrationForm] = useState(false)

    function handleSubmintRegistration(email, password) {
        if (passwordConfirm !== password) { alert('Le password non coincidono'); }
        else if (condizioni === false) { alert('Devi accettare le condizioni'); }
        else {
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            setIsRegistrationForm(false)
        }

    }

    function handleSubmit(email, password) {

        if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            localStorage.setItem('login', true)
            router.push('/user')
        } else {
            alert('Credenziali errate')
        }

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
                    <label htmlFor="confirmPass" >Conferma password</label>
                    <input onChange={(e) => setPasswordConfirm(e.target.value)} type="input" name="confirmPass" id="confirmPass" />
                </div>}


                {isRegistrationForm ?
                    <>
                        <div className={style['login__box__formGroup--checkbox']}>
                            <input onChange={(e) => setCondizioni(e.target.value)} type="checkbox" name="privacy" id="privacy" />
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
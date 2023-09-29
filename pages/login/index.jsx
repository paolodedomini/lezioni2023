import style from './style.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                <button onClick={() => handleSubmit(email, password)}>Login</button>
            </motion.div>
        </div>
    )
}
export default Login
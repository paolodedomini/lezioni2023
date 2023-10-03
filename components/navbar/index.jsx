import Link from 'next/link'
import style from './style.module.scss'
import { RxHamburgerMenu, RxCross1, RxPerson } from 'react-icons/rx'
import { BsCart2 } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { RxMagnifyingGlass } from 'react-icons/rx'
import Divisorio from '../divisorio'
import router from 'next/router'

const data = [
    { name: 'prodotti', path: '/prodotti' },
    { name: 'azienda', path: '/azienda' },
    { name: 'contatti', path: '/contatti' },
    { name: 'login', path: '/login' },
]

function SearchField() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)



    return (
        <div className={style.navBar__searchField}>
            <Link href={'/search'} className={style.navBar__searchField__button} >
                <RxMagnifyingGlass />
            </Link>

            <input type="text" placeholder="Cerca" />

        </div >
    )
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function isInLocalStorage(login) {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem(login)
            return true
        }
        return false
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'

        }

    }, [menuOpen])

    useEffect(() => {
        router.events.on('routeChangeComplete', () => setMenuOpen(false));
    }, [router.events]);

    return (
        <>
            <nav className={style.navBar}>
                <div className={style.navBar__boxLogo}>
                    <Link href="/">
                        <Image src="/ui/logo.svg" alt="Luxwine Logo" width={180} height={40} />
                    </Link>
                </div>
                <div className={style.navBar__userBox}>
                    <div className={style.navBar__userBox__cart} >
                        <BsCart2 />
                    </div>
                </div>
                <div onClick={() => { setMenuOpen(!menuOpen) }} className={style.navBar__menuIcon}>
                    <RxHamburgerMenu />
                </div>
                <AnimatePresence>
                    {menuOpen && <motion.div
                        className={style.navBar__mainNav}
                        initial={{ opacity: 0, left: '50vw' }}
                        animate={{ opacity: 1, left: 0 }}
                        exit={{ opacity: 0, left: '50vw' }}
                        transition={{ duration: .5, ease: 'easeInOut' }}
                    >
                        <div onClick={() => { setMenuOpen(false) }} className={style.navBar__mainNav__closeBtn}>
                            <RxCross1 />
                        </div>
                        <ul className={style.navBar__mainNav__navList}>
                            {
                                data.map((item, index) => {
                                    if (isInLocalStorage('login') && item.name === 'login') {
                                        return (<li className={style.navBar__mainNav__navList__listItem} key={index}>
                                            <Link href={item.path}>Area utente</Link>
                                        </li>)
                                    } else {
                                        return (
                                            <li className={style.navBar__mainNav__navList__listItem} key={index}>
                                                <Link href={item.path}>{item.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                            }
                            <li>
                                <Divisorio size={30} />
                                <SearchField />
                            </li>
                        </ul>

                    </motion.div>}
                </AnimatePresence>

            </nav >
        </>
    )
}
export default Navbar
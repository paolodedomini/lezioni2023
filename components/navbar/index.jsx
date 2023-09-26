import Link from 'next/link';
import style from './style.module.scss';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const data = [
    { name: 'prodotti', path: '/prodotti' },
    { name: 'azienda', path: '/azienda' },
    { name: 'contatti', path: '/contatti' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])
    return (
        <>
            <nav className={style.navBar}>
                <div className={style.navBar__boxLogo}>
                    <Image src="/ui/logo.svg" alt="Luxwine Logo" width={180} height={40} />
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
                                data.map((item, index) => (
                                    <li className={style.navBar__mainNav__navList__listItem} key={index}>
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul></motion.div>}
                </AnimatePresence>

            </nav >
        </>
    )
}
export default Navbar
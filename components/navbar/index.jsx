import Link from 'next/link';
import style from './style.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react';

const data = [
    { name: 'prodotti', path: '/prodotti' },
    { name: 'azienda', path: '/azienda' },
    { name: 'contatti', path: '/contatti' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className={style.navBar}>
                <div onClick={() => { setMenuOpen(!menuOpen) }} className={style.navBar__menuIcon}>
                    <RxHamburgerMenu /></div>
                <ul className={`${style.navBar__mainNav} ${menuOpen && style['navBar__mainNav--open']}`}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default Navbar
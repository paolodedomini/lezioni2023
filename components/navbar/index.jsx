import Link from 'next/link';
import style from './style.module.scss';

const data = [
    { name: 'prodotti', path: '/prodotti' },
    { name: 'azienda', path: '/azienda' },
    { name: 'contatti', path: '/contatti' },
]

function Navbar() {
    return (
        <>

            <nav>

                <ul class={style.mainNav}>
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
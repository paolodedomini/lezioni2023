import style from './style.module.scss'
import Image from 'next/image'
function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.__container} >
                <div className={style.__container__boxSx} >
                    <Image src="/ui/logo.svg" alt="logo" width={180} height={40} />
                </div>
                <div className={style.__container__boxDx} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nulla eveniet veniam, nisi illum, a perspiciatis ipsum dolore modi similique assumenda, quod laboriosam itaque nam odio autem quibusdam obcaecati id.
                </div>
            </div>

        </footer>
    )
}
export default Footer
import style from './style.module.scss'
import Image from 'next/image'
function Footer() {
    return (
        <footer>
            <div className={style.container} >
                <div className={style.container__boxSx} >
                    <Image src="/ui/logo.svg" alt="logo" width={180} height={40} />
                </div>
                <div className={style.container__boxDx} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nulla eveniet veniam, nisi illum, a perspiciatis ipsum dolore modi similique assumenda, quod laboriosam itaque nam odio autem quibusdam obcaecati id.
                </div>
            </div>

        </footer>
    )
}
export default Footer
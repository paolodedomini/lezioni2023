import style from './style.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
function CartDrawer({ isOpen, setIsOpen }) {
    return (
        <AnimatePresence>
            {isOpen &&
                <div className={style.cartDrawer}>
                    <div className={style.cartDrawer__backGroundClose}
                        onClick={() => setIsOpen(false)}></div>
                    <motion.div
                        className={style.cartDrawer__container}
                        initial={{ right: '-30%' }}
                        animate={{ right: 0 }}
                        exit={{ right: '-30%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <h2>Carrello vuoto e triste</h2>
                    </motion.div>
                </div>
            }
        </AnimatePresence >
    )
}
export default CartDrawer
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

function LayoutPage({ children }) {
    const router = useRouter()
    return (
        <AnimatePresence mode="wait" >
            <motion.div key={router.pathname} className="layoutPage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />

            </motion.div>
        </AnimatePresence>
    )

}
export default LayoutPage
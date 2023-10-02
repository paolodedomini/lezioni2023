import Navbar from "../components/navbar"
import { ScrollerMotion } from 'scroller-motion'
import Footer from "../components/footer"
import { useRouter } from "next/router"

function LayoutPage({ children }) {
    const router = useRouter()
    const { pathname } = router
    return (
        <div className="layoutPage" >

            <Navbar />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )

}
export default LayoutPage
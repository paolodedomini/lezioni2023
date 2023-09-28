import Navbar from "../components/navbar"
import { ScrollerMotion } from 'scroller-motion'
import Footer from "../components/footer"
import { useRouter } from "next/router"

function LayoutPage({ children }) {
    const router = useRouter()
    const { pathname } = router
    return (
        <>
            <ScrollerMotion>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </ScrollerMotion>
        </>
    )

}
export default LayoutPage
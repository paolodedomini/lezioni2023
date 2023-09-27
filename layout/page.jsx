import Navbar from "../components/navbar"
import { ScrollerMotion } from 'scroller-motion'
import Footer from "../components/footer"
function LayoutPage({ children }) {
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
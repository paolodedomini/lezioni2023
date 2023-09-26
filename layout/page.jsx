import Navbar from "../components/navbar"
import { ScrollerMotion } from 'scroller-motion'
function LayoutPage({ children }) {
    return (
        <>
            <ScrollerMotion>
                <Navbar />
                <main>
                    {children}
                </main></ScrollerMotion>
        </>
    )

}
export default LayoutPage
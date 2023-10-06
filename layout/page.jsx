import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Scroll from "../components/scroll"

function LayoutPage({ children }) {

    return (
        <Scroll>
            <div className="layoutPage">
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />

            </div>
        </Scroll >

    )

}
export default LayoutPage
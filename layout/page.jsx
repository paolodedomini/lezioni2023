import Navbar from "../components/navbar"
import Footer from "../components/footer"


function LayoutPage({ children }) {

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
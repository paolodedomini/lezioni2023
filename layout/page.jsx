import Navbar from "../components/navbar"
function LayoutPage({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main></>
    )

}
export default LayoutPage
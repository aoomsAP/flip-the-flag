import { Outlet } from "react-router-dom"
import "./Root.css"

// components
import Footer from "../Footer/FooterComponent/Footer";
import Header from "../Header/Header";

const Root = () => {

    // ROOT, with:
    // - header
    // - main
    // - footer

    return (
        <>
            <Header />

            <Outlet />
            
            <Footer />
        </>
    )
}

export default Root;
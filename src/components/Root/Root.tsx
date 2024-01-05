import { Outlet } from "react-router-dom"
import "./Root.css"

// components
import Footer from "../Footer/FooterComponent/Footer";
import Header from "../Header/HeaderComponent/Header";

const Root = () => {

    // root consists of:
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
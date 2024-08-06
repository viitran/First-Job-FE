import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import HeaderMobile from "../Headers/Mobile";
import "./Master.css";
import Plugin from "../Plugin";
import Partner from "../Partner";
import Footer from "../Footer";

export default function Master() {
    return (
        <>
            <header>
                <Headers />
                <HeaderMobile />
            </header>
            <Outlet />
            <Partner />
            <footer>
                <Footer />
            </footer>
            <Plugin />
        </>
    )
}
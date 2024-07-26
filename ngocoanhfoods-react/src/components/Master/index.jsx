import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import HeaderMobile from "../Headers/Mobile";
import "./Master.css";
import Plugin from "../Plugin";

export default function Master() {
    return (
        <>
            <header>
                <Headers />
                <HeaderMobile />
            </header>
            <Outlet />
            <Plugin />
        </>
    )
}
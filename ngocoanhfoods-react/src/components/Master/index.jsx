import { Outlet } from "react-router-dom";
import Headers from "../Headers";
import HeaderMobile from "../Headers/Mobile";
import "./Master.css";

export default function Master() {
    return (
        <>
            <header>
                <Headers />
                <HeaderMobile />
            </header>
            <Outlet />
        </>
    )
}
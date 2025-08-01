import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/TopBar";
import Navbar from "../components/shared/Navbar";
import NavLinks from "../components/shared/NavLinks";
import { Home } from "lucide-react";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div >
            <TopBar />
            <Navbar />
            <NavLinks />

            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
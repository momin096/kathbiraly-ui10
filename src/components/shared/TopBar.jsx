import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="bg-gray-800 text-white py-2 hidden md:block fixed top-0 z-50 w-full">
            <div className="container mx-auto flex justify-between">
                <ul className="flex gap-5">
                    <li>
                        <Link >Download App</Link>
                    </li>
                    <li>
                        <Link >Help & Support</Link>
                    </li>
                    <li>
                        <Link >Seller Center</Link>
                    </li>
                </ul>
                <ul className="flex gap-5 items-center justify-center">
                    <li>
                        <Link>Track Order</Link>
                    </li>
                    <li>
                        <Facebook />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <Youtube />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopBar;
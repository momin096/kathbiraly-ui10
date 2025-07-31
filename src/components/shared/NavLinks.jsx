import { Baby, Gift, ShoppingBag, ShoppingBasket, Watch } from "lucide-react";
import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <div className=" py-4 bg-orange-100">
            <div className="container mx-auto">
                <ul className="flex flex-wrap gap-5 md:gap-20 xl:gap-36 justify-center">
                    <li>
                        <Link className="flex gap-1 items-center text-xl">
                            <ShoppingBasket size={30} />
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 items-center text-xl">
                            <ShoppingBag size={30} />
                            Home Appliances
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 items-center text-xl">
                            <Baby size={30} />
                            Baby Products
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 items-center text-xl">
                            <Gift size={30} />
                            Accessories
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 items-center text-xl">
                            <Watch size={30} />
                            Gadget
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavLinks;
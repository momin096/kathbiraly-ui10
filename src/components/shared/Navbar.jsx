import { LogIn, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-200 shadow-sm py-1 sticky">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <a className=" text-xl max-w-28">
                        <img src="/logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex justify-center items-center  px-4">
                        <div className="flex w-xl">
                            <input
                                type="text"
                                placeholder="Search Products..."
                                className="input input-bordered w-full h-14 text-lg border-2  focus:border-amber-600 focus:outline-none rounded-l-md"
                            />
                            <button className="btn h-14 px-6 bg-amber-500 hover:bg-amber-600 text-white rounded-r-md rounded-l-none text-lg">
                                <Search size={22} />
                            </button>
                        </div>
                    </div>

                </div>
                <div className="navbar-end gap-4">
                    <button className="p-3 bg-white border-gray-100 border rounded-xl">
                        <Link className="flex items-center gap-1">
                            <LogIn />
                            Login
                        </Link>
                    </button>
                    <button className="p-3 bg-gray-800 text-white border rounded-xl">
                        <Link className="flex gap-1 items-center">
                            <ShoppingCart />
                            <div className="badge font-bold badge-xs">2</div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
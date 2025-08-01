import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import DiscountProducts from "../components/Home/DiscountProducts";
import Women from "../components/Home/Women";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <div className="bg-gray-100">
                <DiscountProducts />
                <Women />
            </div>
        </div>
    );
};

export default Home;
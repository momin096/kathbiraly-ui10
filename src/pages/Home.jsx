import Banner from "../components/Home/Banner";
import BannerSlider from "../components/Home/BannerSlider";
import Category from "../components/Home/Category";
import DiscountProducts from "../components/Home/DiscountProducts";
import Men from "../components/Home/Men";
import Recommended from "../components/Home/Recommended";
import TestimonialCarousel from "../components/Home/TestimonialCarousel";
import Women from "../components/Home/Women";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <div className="bg-gray-100">
                <DiscountProducts />
                <Women />
                <BannerSlider />
                <Men />
                <TestimonialCarousel />
                <Recommended />
            </div>
        </div>
    );
};

export default Home;
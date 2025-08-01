import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";



const DiscountProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/discount.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        // protom line e items-center hobe 
        <div className="container mx-auto my-10 flex flex-col py-10 ">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-5">
                <h2 className="text-xl lg:text-3xl mb-5 ">🔥  Upto <span className="text-amber-500 font-medium">30% Discount</span></h2>
                <button className="bg-amber-500 px-5 py-2 rounded-md font-bold text-white">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center  ">

                {
                    products.map(item => <ProductCard key={item.title} item={item} />)
                }
            </div>
        </div>
    );
};

export default DiscountProducts;
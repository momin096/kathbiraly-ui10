// ProductsPage.jsx
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard/ProductCard";


const Products = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category")?.toLowerCase() || ""; // e.g., "women", "men", "kids"
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.error("Failed to load products:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    const filtered = useMemo(() => {
        if (!category) return products;
        return products.filter(
            (p) => p.category && p.category.toLowerCase() === category
        );
    }, [products, category]);

    if (loading) return <div className="p-10">Loading...</div>;

    return (
        <div className="container mx-auto my-10 flex flex-col py-10">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-5">
                <h2 className="text-xl lg:text-3xl mb-5 font-semibold">
                    {category
                        ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
                        : "All Products"}
                </h2>
            </div>
            {filtered.length === 0 ? (
                <div className="text-center text-gray-500">No products found.</div>
            ) : (
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 ">
                        {filtered.map((item) => (
                            <ProductCard key={item._id || item.title} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;

import { useState, useMemo } from "react";
import CartItem from "../components/cart/CartItem";
import SummarySidebar from "../components/cart/SummarySlider";


const defaultItems = [
    {
        id: 1,
        name: "Floral Print Wrap Dress",
        category: "WOMEN",
        color: "Blue",
        size: "42",
        price: 20.5,
        quantity: 2,
        image: "https://i.ibb.co/jZswqqHL/706206cef51dcc833bb304556205edc26e2fabc2.jpg", 
    },
    {
        id: 2,
        name: "Floral Print Wrap Dress",
        category: "WOMEN",
        color: "Red",
        size: "42",
        price: 30.5,
        quantity: 1,
        image: "https://i.ibb.co/PLVVxGf/6899df9f0c0e8ecc38aa250d6c8589c049c4ebd3.jpg",
    },
    {
        id: 3,
        name: "Floral Print Wrap Dress",
        category: "WOMEN",
        color: "Blue",
        size: "42",
        price: 20.5,
        quantity: 2,
        image: "https://i.ibb.co/k2yMR0QL/6ec0bd9bddd0212d33e3355d9f86723c151c4d74.png", 
    },
    {
        id: 4,
        name: "Floral Print Wrap Dress",
        category: "WOMEN",
        color: "Red",
        size: "42",
        price: 30.5,
        quantity: 1,
        image: "https://i.ibb.co/35FYjQb9/a60971028fd8eb39564b70c8a39fa25a1623811b.jpg",
    },
];



const ShoppingCart = () => {
    const [items, setItems] = useState(defaultItems);
    const [coupon, setCoupon] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [shippingCost, setShippingCost] = useState(0);

    const subtotal = useMemo(
        () => items.reduce((acc, it) => acc + it.price * it.quantity, 0),
        [items]
    );

    const handleQuantityChange = (id, newQty) => {
        setItems((prev) =>
            prev.map((it) => (it.id === id ? { ...it, quantity: newQty } : it))
        );
    };

    const handleRemove = (id) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

    const applyCoupon = () => {
        // dummy logic: if code is SAVE5 give $5 off, if SAVE10 give 10% off
        if (coupon.trim().toUpperCase() === "SAVE5") {
            setAppliedDiscount(5);
        } else if (coupon.trim().toUpperCase() === "SAVE10") {
            setAppliedDiscount(subtotal * 0.1);
        } else {
            setAppliedDiscount(0);
            alert("Invalid coupon");
        }
    };

    const updateShipping = () => {
        // dummy: set flat shipping based on country
        if (country === "bd") setShippingCost(3);
        else if (country === "us") setShippingCost(10);
        else if (country === "in") setShippingCost(5);
        else setShippingCost(0);
    };

    return (
        <div className="min-h-screen bg-[#f0f4fa] p-6 md:p-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left: Items */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div>
                            <h1 className="text-2xl font-bold">Shopping Bag</h1>
                            <p className="text-sm text-gray-500 mt-1">
                                {items.length} item{items.length !== 1 && "s"} in your bag.
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {items.length ? (
                            items.map((it) => (
                                <CartItem
                                    key={it.id}
                                    item={it}
                                    onQuantityChange={handleQuantityChange}
                                    onRemove={handleRemove}
                                />
                            ))
                        ) : (
                            <div className="py-10 text-center text-gray-500">
                                Your cart is empty.
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Summary */}
                <SummarySidebar
                    subtotal={subtotal}
                    discount={appliedDiscount}
                    shippingCost={shippingCost}
                    coupon={coupon}
                    setCoupon={setCoupon}
                    applyCoupon={applyCoupon}
                    country={country}
                    setCountry={setCountry}
                    city={city}
                    setCity={setCity}
                    zip={zip}
                    setZip={setZip}
                    updateShipping={updateShipping}
                />
            </div>
        </div>
    );
};

export default ShoppingCart;

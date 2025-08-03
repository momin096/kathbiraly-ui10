// CheckoutPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import ThankYouModal from "../components/cart/ThankYouModal";

const formatPrice = (n) => `৳ ${n.toFixed(2)}`;

const CheckoutPage = () => {
    const RELATED = [
        {
            _id: "p1",
            service_name: "Matching Earrings",
            service_image: "https://i.ibb.co/hFqVTSxg/024fe8de56f19929bf9ff802393e550ebbd7e847.jpg",
            service_description: "Elegant earrings that pair perfectly with your necklace.",
        },
        {
            _id: "p2",
            service_name: "Gift Wrapping",
            service_image: "https://i.ibb.co/4gJnVgGd/24dc1ace4a191dd3a3edcb6120edf9dd9b317fc2.jpg",
            service_description: "Premium gift wrapping service to make it special.",
        },
        {
            _id: "p3",
            service_name: "Care Kit",
            service_image: "https://i.ibb.co/YTQtMBYL/452bc55271fc935d1099d141686e2b208a3b9948.jpg",
            service_description: "Keep your jewelry shining with this care kit.",
        },
        {
            _id: "p4",
            service_name: "Bracelet Set",
            service_image: "https://i.ibb.co/YTQtMBYL/452bc55271fc935d1099d141686e2b208a3b9948.jpg",
            service_description: "Complementary bracelet set for a coordinated look.",
        },
        {
            _id: "p5",
            service_name: "Met",
            service_image: "https://i.ibb.co/YTQtMBYL/452bc55271fc935d1099d141686e2b208a3b9948.jpg",
            service_description: "Keep your jewelry shining with this care kit.",
        },
    ];

    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    // Billing form state
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [shippingZone, setShippingZone] = useState("dhaka_outside");
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [showThanks, setShowThanks] = useState(false);
    const [suggestions, setSuggestions] = useState(() => {

        return RELATED.sort(() => 0.5 - Math.random()).slice(0, 4);
    });

    // Quantity state
    const [quantity, setQuantity] = useState(1);

    // shipping cost logic
    const shippingCost = useMemo(() => {
        if (shippingZone === "dhaka_inside") return 70;
        if (shippingZone === "dhaka_outside") return 130;
        return 0;
    }, [shippingZone]);

    if (!product) {
        return (
            <div className="p-10">
                <p>
                    Nothing to checkout.{" "}
                    <button
                        onClick={() => navigate(-1)}
                        className="text-blue-600 underline"
                    >
                        Go back
                    </button>
                </p>
            </div>
        );
    }


    const itemPrice = product.price || 0;
    const subtotal = itemPrice * quantity;
    const total = subtotal + shippingCost;

    const handlePlaceOrder = () => {
        if (!name || !phone || !address) {
            alert("Please fill all required fields.");
            return;
        }
        // here you would send order to backend
        console.table("Placing order for:", {
            product,
            billing: { name, phone, address },
            shippingZone,
            paymentMethod,
            quantity,
            total,
        });
        setShowThanks(true);
    };


    const decrement = () => setQuantity((q) => Math.max(1, q - 1));
    const increment = () => setQuantity((q) => q + 1);
    const onQuantityInput = (e) => {
        const v = parseInt(e.target.value, 10);
        if (!isNaN(v) && v >= 1) setQuantity(v);
    };


    return (
        <div className="min-h-screen bg-neutral-50 p-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left: Billing Form */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Fill out the form below with accurate information to place your
                        order
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block font-medium mb-1">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-md px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">
                                Your Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="01XXXXXXXXX"
                                className="w-full border border-gray-300 rounded-md px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">
                                Full Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="House Number, Road, Upazila, District"
                                className="w-full border border-gray-300 rounded-md px-4 py-3"
                            />
                        </div>

                        <div>
                            <div className="font-medium mb-1">Shipping</div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 border rounded-md p-3">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        value="dhaka_outside"
                                        checked={shippingZone === "dhaka_outside"}
                                        onChange={() => setShippingZone("dhaka_outside")}
                                    />
                                    <div className="flex-1">
                                        <div className="font-semibold">Outside Dhaka City:</div>
                                        <div className="text-sm text-gray-600">৳ 130.00</div>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 border rounded-md p-3">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        value="dhaka_inside"
                                        checked={shippingZone === "dhaka_inside"}
                                        onChange={() => setShippingZone("dhaka_inside")}
                                    />
                                    <div className="flex-1">
                                        <div className="font-semibold">Inside Dhaka City:</div>
                                        <div className="text-sm text-gray-600">৳ 70.00</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Order Summary */}
                <div className="w-full max-w-md flex-shrink-0 space-y-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-semibold text-lg mb-4">Your order</h3>
                        <div className="flex gap-3 border-b pb-4 mb-4">
                            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500">× {quantity}</div>
                                <div className="font-medium">{product.title}</div>
                            </div>
                            <div className="font-semibold">{formatPrice(itemPrice)}</div>
                        </div>

                        {/* Quantity control */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="font-medium">Quantity:</div>
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <button
                                    onClick={decrement}
                                    aria-label="decrease"
                                    className="px-3 py-1 hover:bg-gray-100"
                                >
                                    <FiMinus />
                                </button>
                                <input
                                    type="number"
                                    min={1}
                                    value={quantity}
                                    onChange={onQuantityInput}
                                    className="w-16 text-center border-l border-r px-2 py-1 outline-none"
                                />
                                <button
                                    onClick={increment}
                                    aria-label="increase"
                                    className="px-3 py-1 hover:bg-gray-100"
                                >
                                    <FiPlus />
                                </button>
                            </div>
                        </div>

                        <div className="text-sm flex justify-between mb-1">
                            <span>Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>
                        <div className="text-sm flex justify-between mb-1">
                            <span>Shipping</span>
                            <span>{formatPrice(shippingCost)}</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>{formatPrice(total)}</span>
                        </div>

                        <div className="mt-6 bg-gray-100 p-4 rounded">
                            <div className="font-semibold mb-1">Cash on delivery</div>
                            <div className="text-xs leading-relaxed">
                                🚚 Delivery Method: Inside Dhaka: Receive the delivery/package
                                first, then make the payment.
                                <br />
                                📦 Outside Dhaka: Home delivery is available in all districts,
                                upazilas, and unions across Bangladesh. Receive the package
                                first, then make the payment.
                            </div>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            className="w-full bg-[#ff6f00] hover:bg-orange-600 text-white font-bold py-3 rounded mt-4"
                        >
                            Confirm Your Order {formatPrice(total)}
                        </button>
                    </div>
                </div>
            </div>
            <ThankYouModal
                isOpen={showThanks}
                onClose={() => setShowThanks(false)}
                relatedProducts={suggestions}
            />

        </div>
    );
};

export default CheckoutPage;

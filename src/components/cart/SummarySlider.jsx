import { useMemo } from "react";
const formatCurrency = (num) =>
    `$${num.toFixed(2)}`; 



const SummarySidebar = ({
    subtotal,
    discount,
    shippingCost,
    coupon,
    setCoupon,
    applyCoupon,
    country,
    setCountry,
    city,
    setCity,
    zip,
    setZip,
    updateShipping,
}) => {
    const total = useMemo(
        () => Math.max(0, subtotal + shippingCost - discount),
        [subtotal, shippingCost, discount]
    );

    return (
        <div className="w-full max-w-md flex-shrink-0 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-lg font-semibold mb-4">Calculated Shipping</h2>
                <div className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium mb-1">Country</label>
                        <select
                            className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="">Select country</option>
                            <option value="us">United States</option>
                            <option value="bd">Bangladesh</option>
                            <option value="in">India</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">State / City</label>
                        <select
                            className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="">Select state/city</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="chattogram">Chattogram</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">ZIP Code</label>
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={updateShipping}
                        className="w-full mt-2 bg-black text-white rounded-full py-2 font-semibold text-sm hover:brightness-105 transition"
                    >
                        Update
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
                <p className="text-xs text-gray-500 mb-3">
                    Enter your coupon code to get discount on this order.
                </p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="flex-1 border border-gray-200 rounded-md py-2 px-3 text-sm"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button
                        onClick={applyCoupon}
                        className="bg-black text-white rounded-full px-4 py-2 text-sm font-semibold hover:brightness-105 transition"
                    >
                        Apply
                    </button>
                </div>
            </div>

            <div className="bg-[#fff3e0] rounded-xl p-6 shadow-md">
                <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Cart Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Design by Flutertop</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-red-600">-{formatCurrency(discount)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shippingCost > 0 ? formatCurrency(shippingCost) : "—"}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-semibold">
                        <span>Cart Total</span>
                        <span>{formatCurrency(total)}</span>
                    </div>
                </div>
                <button className="w-full mt-5 bg-black text-white rounded-full py-3 font-semibold hover:brightness-105 transition">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default SummarySidebar;
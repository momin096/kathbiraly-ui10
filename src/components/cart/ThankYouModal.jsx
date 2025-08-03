

const ThankYouModal = ({ isOpen, onClose, relatedProducts }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    aria-label="close"
                >
                    ✕
                </button>
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-2">Thank you for your order!</h2>
                    <p className="text-gray-600 mb-6">
                        Your order has been placed successfully. Here are some other items you
                        might like:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {relatedProducts.map((p) => (
                            <div
                                key={p._id}
                                className="flex gap-3 border  rounded-lg p-3 hover:shadow-md transition"
                            >
                                <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                    <img
                                        src={p.service_image}
                                        alt={p.service_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold">{p.service_name}</div>
                                    <div className="text-xs text-gray-500 line-clamp-2">
                                        {p.service_description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:brightness-105 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ThankYouModal;
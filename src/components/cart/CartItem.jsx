import { FiMinus, FiPlus } from "react-icons/fi";

const formatCurrency = (num) =>
    `$${num.toFixed(2)}`; 

const CartItem = ({ item, onQuantityChange, onRemove }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 py-6 border-b last:border-b-0">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="text-xs uppercase text-gray-500">{item.category}</div>
                    <h3 className="font-semibold text-base">{item.name}</h3>
                    <div className="text-sm text-gray-500 flex gap-4 mt-1">
                        <span>
                            Color: <span className="font-medium">{item.color}</span>
                        </span>
                        <span>
                            Size: <span className="font-medium">{item.size}</span>
                        </span>
                    </div>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center border rounded-md overflow-hidden w-max">
                        <button
                            onClick={() =>
                                onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                            aria-label="decrease"
                        >
                            <FiMinus />
                        </button>
                        <div className="px-4 py-1">{item.quantity}</div>
                        <button
                            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                            aria-label="increase"
                        >
                            <FiPlus />
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-sm">
                            Price: <span className="font-medium">{formatCurrency(item.price)}</span>
                        </div>
                        <div className="text-sm font-semibold">
                            Total: {formatCurrency(item.price * item.quantity)}
                        </div>
                    </div>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="text-xs text-red-500 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CartItem;
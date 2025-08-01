
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Plus } from "lucide-react";

const ProductCard = ({ item }) => {
    const {
        image,
        rating,
        reviewCount,
        title,
        price,
        originalPrice,
        info,
    } = item || {}
    return (
        <div className="max-w-96">
            <div className="card bg-base-100 w-full shadow-sm rounded-2xl hover:shadow-lg">
                <figure>
                    <img
                        className="w-full h-72 object-cover"
                        src={image}
                        alt={title} />
                </figure>
                <div className="card-body">

                    <div className="flex gap-3">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={rating}
                            readOnly
                        />
                        <span>({reviewCount})</span>

                    </div>

                    <div className="flex justify-between">
                        <h2 className="card-title font-bold text-lg text-gray-600">
                            {title}
                        </h2>
                        <span>
                            {info}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <h1 className="font-bold text-2xl">$ {price}</h1> <span className="line-through">$ {originalPrice}</span>
                        </div>
                        <div className="">
                            <Plus size={43} className="bg-gray-200 p-2  rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
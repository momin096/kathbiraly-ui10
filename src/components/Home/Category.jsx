import { Link } from "react-router-dom";

;

const categories = [
    {
        name: 'Women Collection',
        category: 'women',
        emoji: 'https://i.ibb.co/99Lch0Pd/woman.png',
        description: 'Variety of local and international brands.',
    },
    {
        name: 'Men Collection',
        category: 'men',
        emoji: 'https://i.ibb.co/RTMvZgSx/man.png',
        description: 'Best quality local and branded products.',
    },
    {
        name: 'Kids Collection',
        category: 'kids',
        emoji: 'https://i.ibb.co/Mkh1jnQ4/boy.png',
        description: 'Best for babies skin and health.',
    },
];

const CategoryCard = ({ name, emoji, description, category }) => (
    <div className=" bg-white rounded-xl shadow-md py-2 px-16  min-w-[18rem] bg-[url(/category-card-bg.svg)] bg-no-repeat bg-top-right cursor-pointer">
        <Link to={`/products?category=${category}`} className="flex flex-col items-center text-center gap-2 ">
            <img className="w-16" src={emoji} />
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </Link>
    </div>
);

const Category = () => {
    return (
        <section className="py-10 px-4 bg-[url(https://i.ibb.co/bj6XPZzf/Category.png)] mt-5">
            <div className="max-w-7xl mx-auto flex flex-col  md:flex-row items-center gap-6">
                {/* Left vertical label */}
                <div className="flex-shrink-0 flex items-center">
                    <div className="flex flex-col items-start">
                        <span className="text-sm text-gray-600 mb-1">Shop By</span>
                        <div className="flex items-baseline gap-1">
                            <h2 className="text-3xl font-bold text-amber-500">Category</h2>
                            <span className="text-3xl font-bold text-amber-500">.</span>
                        </div>
                    </div>
                </div>

                {/* Cards container */}
                <div className="flex flex-col md:flex-row gap-6 overflow-x-auto py-2 px-1">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.name} category={cat.category} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;

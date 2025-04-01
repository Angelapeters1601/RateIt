import { Link } from "react-router-dom";

function Sections({ data, title }) {
    return (
        <div className="border p-6 rounded-lg shadow-md bg-white mb-8">
            <h1 className="text-xl uppercase font-bold text-black border-b mb-4 pb-2">{title}</h1>
            <p className="mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet consequuntur sequi pariatur ut iste et sint nihil eum expedita.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((product) => (
                    <Link 
                        key={product.id} 
                        to={`/sectionDetails/${product.id}`} 
                        state={{ product }} 
                        className="block border p-4 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div>
                                <p className="font-semibold text-gray-700">{product.editorReview}</p>
                                <p className="text-sm text-gray-500">By: {product.editorName}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sections;

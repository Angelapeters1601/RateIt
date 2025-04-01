import { useLocation } from "react-router-dom";

function SectionDetails() {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white mt-10">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md my-4" />
            <p className="text-gray-700">{product.description}</p>

            <h3 className="mt-4 font-semibold text-gray-800">Editor's Review:</h3>
            <p className="italic text-gray-700">{product.editorReview}</p>
            <p className="text-sm text-gray-500">By: {product.editorName} - {product.editorTitle}</p>

            <h3 className="mt-4 font-semibold text-gray-800">Pros:</h3>
            <ul className="list-disc list-inside text-green-600">
                {product.pros?.map((pro, index) => <li key={index}>{pro}</li>)}
            </ul>

            <h3 className="mt-4 font-semibold text-gray-800">Cons:</h3>
            <ul className="list-disc list-inside text-red-600">
                {product.cons?.map((con, index) => <li key={index}>{con}</li>)}
            </ul>

            {product.awards && <p className="mt-4 font-semibold text-indigo-600">🏆 Award: {product.awards}</p>}

            <p className="mt-4 text-lg font-bold text-green-600">Price: ${product.price}</p>
        </div>
    );
}

export default SectionDetails;

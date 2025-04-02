import { useLocation} from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { addReview, removeReview } from "../features/reviews/savedReviewsSlice";


function SectionDetails() {
    const location = useLocation();
    const dispatch = useDispatch();
    const product = location.state?.product || allProducts.find(p => p.id === numericId);
    const { items } = useSelector(state => state.savedReviews);
    const isSaved = items.some(item => item.id === product.id);
  
    const handleSaveToggle = () => {
      if (isSaved) {
        dispatch(removeReview(product.id));
      } else {
        dispatch(addReview(product));
      }
    };

    if (!product) return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center p-8 bg-white rounded-lg border border-gray-100 max-w-md w-full">
                <h2 className="text-2xl font-light text-gray-800 mb-3 tracking-wide">PRODUCT NOT FOUND</h2>
                <p className="text-gray-500 font-light mb-6">The requested item is not available</p>
                <a 
                    href="/" 
                    className="inline-block px-6 py-2 border border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
                >
                    RETURN TO COLLECTION
                </a>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <nav className="flex text-xs text-gray-500 mb-8 tracking-wider">
                <a href="/" className="hover:text-gray-700">HOME</a>
                <span className="mx-2">/</span>
                <a href={`/categories/${product.category}`} className="hover:text-gray-700">{product.category.toUpperCase()}</a>
                <span className="mx-2">/</span>
                <span className="text-gray-700">{product.name.toUpperCase()}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <div className="relative bg-gray-50 aspect-[3/4]">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="absolute inset-0 w-full h-full object-cover p-8"
                            loading="eager"
                        />
                        {product.awards && (
                            <div className="absolute bg-pink-100 font-mono font-bold
                             top-4 right-4 px-3 py-1 text-xs tracking-wider
                              border border-gray-200">
                                {product.awards}
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:w-1/2 pt-4">
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h1 className="text-3xl font-light font-mono tracking-wide text-gray-900 mb-2">{product.name}</h1>
                        <p className="text-gray-500 font-serif text-sm tracking-wider">{product.brand || 'LUXURY BRAND'}</p>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                    key={i}
                                    className={`h-4 w-4
                                     ${i < Math.floor(product.editorRating) ? 
                                        'text-yellow-500' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-2 tracking-wider">
                            EDITOR'S RATING: {product.editorRating}/5
                        </span>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg  bg-blue-300 w-20 p-2 font-bold
                         rounded text-gray-900">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="prose font-mono max-w-none text-gray-700 mb-8 text-sm leading-relaxed tracking-wide">
                        <p>{product.description}</p>
                    </div>
                    <div className="mb-8 border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-mono font-medium text-gray-900 tracking-wider mb-4">EDITOR'S NOTES</h3>
                        <blockquote className="text-gray-700 italic text-sm leading-relaxed mb-3">"{product.editorReview}"</blockquote>
                        <p className="text-xs font-mono text-gray-500 tracking-wider">— {product.editorName}, {product.editorTitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-3">HIGHLIGHTS</h3>
                            <ul className="space-y-2">
                                {product.pros?.map((pro, index) => (
                                    <li key={index} className=" font-mono flex items-start text-gray-700 text-sm">
                                        <span className="mr-2">•</span>
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-3">CONSIDERATIONS</h3>
                            <ul className="space-y-2">
                                {product.cons?.map((con, index) => (
                                    <li key={index} className=" font-mono flex items-start text-gray-700 text-sm">
                                        <span className="mr-2">•</span>
                                        {con}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href={`https://www.amazon.com/s?k=${encodeURIComponent(product.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-black text-white text-xs 
                            tracking-wider hover:bg-amber-600 transition-colors 
                            duration-300 flex items-center justify-center gap-2"
                        >
                            <span>BUY ON AMAZON</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10.6 9.6l-.8 3.2h1.8l-.9-3.2zm5.4 0l-.8 3.2h1.8l-.9-3.2zm4.1-4.7c-.1-.1-.2-.1-.3-.1H4.2c-.1 0-.2 0-.3.1-.1.1-.1.2-.1.3v13.5c0 .1 0 .2.1.3.1.1.2.1.3.1h15.6c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3V5.2c0-.1 0-.2-.1-.3zm-1.6 10.6c0 .1-.1.2-.2.2H5.7c-.1 0-.2-.1-.2-.2V6.8c0-.1.1-.2.2-.2h12.6c.1 0 .2.1.2.2v9.1z"/>
                            </svg>
                        </a>
                        <button 
                          onClick={handleSaveToggle} 
                                className="px-8 py-3 border border-black text-black text-xs tracking-wider hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                {isSaved ? (
                                <>
                                    <BookmarkSolid className="w-4 h-4 text-amber-500" />
                                    SAVED
                                </>
                                ) : (
                                <>
                                    <BookmarkOutline className="w-4 h-4" />
                                    SAVE REVIEW
                                </>
                                )}
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionDetails;
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion"; 

function Sections({ data, title }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden mb-10">
            <div className="px-8 pt-6 pb-4 border-b border-gray-200">
                <Link
                    to={`/categories/${title}`}
                    className="bg-pink-200 p-3 mb-5 rounded text-2xl hover:text-pink-900 hover:bg-gray-100 font-serif font-semibold text-gray-900 tracking-wide"
                >
                    <Slide left>
                        {title}
                    </Slide>
                </Link>
                <Fade bottom delay={200}>
                    <p className="mt-4 font-serif leading-loose text-gray-600 max-w-3xl">
                        Expert-curated selection of top-rated beauty products tested by our editorial team.
                    </p>
                </Fade>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {data.map((product) => (
                    <Fade bottom delay={500} key={product.id}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-center font-serif text-5xl font-semibold mb-3">{product.ratingRank}</p>

                            <Link to={`/products/${product.id}`} state={{ product }} className="block group">
                                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-primary-300 transition-all duration-200 h-full flex flex-col">
                                    <div className="relative pt-[70%] bg-white">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute top-0 left-0 w-full h-full object-contain p-4"
                                            loading="lazy"
                                        />
                                        {product.awards?.includes("Editor's Choice") && (
                                            <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Editor's Pick
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5 flex-grow">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                                            </div>
                                            <div className="flex items-center bg-primary-50 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {product.editorRating}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-gray-600 font-serif tracking-wide text-sm italic line-clamp-3">
                                                "{product.editorReview}"
                                            </p>
                                            <p className="mt-2 font-mono text-xs text-gray-500">
                                                — {product.editorName}, {product.editorTitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-5 pb-5">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-serif font-semibold text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </Fade>
                ))}
            </div>
            <div className="px-6 pb-6 text-center">
                <Link
                    to={`/categories/${title.toLowerCase()}`}
                    className="inline-flex items-center text-primary-600 hover:text-pink-800 font-medium font-mono transition-colors"
                >
                    View all {title.toLowerCase()} products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Sections;

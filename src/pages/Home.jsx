import {
  StarIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import imgOne from "../assets/img1.png"

function Home() {
  return (
    <div>
      <section className="container">
        <img 
        src={imgOne} 
        alt="image-of-a-face" 
        className="mx-auto w-full md:w-40 lg:w-800 lg:h-150 rounded-sm"
        />

        <div className="container mx-auto text-center py-4 bg-stone-100">
          <h1 className="text-xl font-heading text-dark font-bold uppercase">
            Discover & Share {' '}
            <span className="text-primary">Product Reviews</span>
          </h1>
          <p className="mt-4 text-lg text-gray-900 font-bold font:dramatic max-w-lg mx-auto">
            Read real reviews from verified users and make informed decisions on
            beauty products.
          </p>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg">
              <StarIcon className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold text-dark">Top Ratings</h3>
                <p className="text-gray-500 text-sm">
                  Find the best-rated products across different categories.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg">
              <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-secondary" />
              <div>
                <h3 className="text-xl font-bold text-dark">User Reviews</h3>
                <p className="text-gray-500 text-sm">
                  Get real feedback from real customers.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg">
              <StarIcon className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Verified Feedback
                </h3>
                <p className="text-gray-500 text-sm">
                  Only genuine, verified reviews from real buyers.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a
              href="/add-review/1"
              className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Add Your Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

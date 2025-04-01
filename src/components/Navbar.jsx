import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div>
      <nav className=" lg:bg-stone-200 py-4 font-serif">
        <div className="container mx-auto flex items-center justify-center
         space-x-6 px-6 py-3 ">
        

          <div className="flex space-x-12">
            <Link
              to="/"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Home
            </Link>
            
            <Link to="/productReviews" className="text-xs font-bold text-gray-800 uppercase hover:text-black hover:underline underline-offset-3">
            Reviews
          </Link>

            <Link
              to="/categories/skincare"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Skincare
            </Link>
            <Link
              to="/categories/haircare"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Haircare
            </Link>
            <Link
              to="/categories/makeup"
              className=" hover:text-black hover:underline underline-offset-3 text-xs font-bold text-gray-600 hover:text-gray-900 uppercase"
            >
              Makeup
            </Link>   
            <Link
              to="/categories/fragrances"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Fragrance
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

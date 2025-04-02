import rev1 from "../assets/rev1.jpg";
import rev2 from "../assets/rev2.jpeg";
import rev3 from "../assets/rev3.jpg";
import rev4 from "../assets/rev4.jpeg";
import "../App.css"
import ReviewSection from "../components/ReviewSection";

function ProductReviews() {
  return (
    <div className="p-6">
        <div className="parent border border-stone-300 py-3 px-3 bg-blue-100 w-full">
            <div className="div1 font-serif text-pink-900 font-bold text-xl uppercase text-center mt-10"><h1>Product</h1></div>
            <div className="div2"><img src={rev1} alt="Product 1" /></div>
            <div className="div3"><img src={rev2} alt="Product 2" /></div>
            <div className="div4 font-serif text-pink-900 
            font-bold uppercase text-xl text-center mt-9"><h1>Reviews</h1></div>
            <div className="div5"><img src={rev3} alt="Product 4" /></div>
            <div className="div6"><img src={rev4} alt="Product 4" /></div>
        </div>
      <ReviewSection />
    </div>
  );
}

export default ProductReviews;

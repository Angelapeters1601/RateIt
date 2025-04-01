// import { Routes, Route } from "react-router-dom";
// import AppLayout from "./components/AppLayout";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Home from "./pages/Home";
// import ProductReviews from "./pages/ProductReviews";
// import ReviewForm from "./pages/ReviewForm";
// import SectionDetails from "./components/SectionDetails";
// import NotFound from "./pages/NotFound";
// import Skincare from "./pages/categories/Skincare";
// import Makeup from "./pages/categories/Makeup";
// import Fragrances from "./pages/categories/Fragrances";
// import Haircare from "./pages/categories/Haircare";
// import "./App.css"

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<AppLayout />}>
//         <Route index element={<Home />} /> 
//         <Route path="/productReviews" element={<ProductReviews />}/>
//         <Route path="reviewForm/:id" element={<ReviewForm />} />
//         <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/sectionDetails/:id" element={<SectionDetails />} />
//           <Route path="/skincare" element={<Skincare />} />
//           <Route path="/haircare" element={<Haircare />} />
//           <Route path="/makeup" element={<Makeup />} />
//           <Route path="/fragrances" element={<Fragrances />} />

//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import ProductReviews from "./pages/ProductReviews";
import ReviewForm from "./pages/ReviewForm";
import SectionDetails from "./components/SectionDetails";
import NotFound from "./pages/NotFound";
import Skincare from "./pages/categories/Skincare";
import Makeup from "./pages/categories/Makeup";
import Fragrances from "./pages/categories/Fragrances";
import Haircare from "./pages/categories/Haircare";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="productReviews" element={<ProductReviews />} />
        <Route path="reviews/:id" element={<ReviewForm />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="products/:id" element={<SectionDetails />} />
        <Route path="reviewForm" element={<ReviewForm />} />
        <Route path="categories">
          <Route path="skincare" element={<Skincare />} />
          <Route path="haircare" element={<Haircare />} />
          <Route path="makeup" element={<Makeup />} />
          <Route path="fragrances" element={<Fragrances />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
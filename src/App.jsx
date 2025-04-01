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
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} /> 
        {/* <Route path="product/:id" element={<ProductDetails />} /> */}
        <Route path="/productReviews" element={<ProductReviews />}/>
        <Route path="reviewForm/:id" element={<ReviewForm />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sectionDetails/:id" element={<SectionDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

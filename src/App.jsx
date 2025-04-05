import "./App.css";
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { PageSkeleton } from './ui/PageSkeleton';
import ScrollToTop from './helpers/scrollToTop';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ProductReviews = lazy(() => import("./pages/ProductReviews"));
const ReviewForm = lazy(() => import("./pages/ReviewForm"));
const SectionDetails = lazy(() => import("./components/SectionDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Skincare = lazy(() => import("./pages/categories/Skincare"));
const Makeup = lazy(() => import("./pages/categories/Makeup"));
const Fragrances = lazy(() => import("./pages/categories/Fragrances"));
const Haircare = lazy(() => import("./pages/categories/Haircare"));
const SavedReviews = lazy(() => import("./components/SavedReviews"));
const ProductCategoryDetails = lazy(() => import("./components/ProductCategoryDetails"));
const SearchResultsPage = lazy(() => import("./components/SearchResultsPage"));

function App() {
  return (
    <>
    <Suspense fallback={<PageSkeleton />}>
        <ScrollToTop />
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
          <Route path="/saved" element={<SavedReviews />}/>
          <Route path="/productcategorydetails/:productId" element={<ProductCategoryDetails />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="categories">
            <Route path="skincare" element={<Skincare />} />
            <Route path="haircare" element={<Haircare />} />
            <Route path="makeup" element={<Makeup />} />
            <Route path="fragrances" element={<Fragrances />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
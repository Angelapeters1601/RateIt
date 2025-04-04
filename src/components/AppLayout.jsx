import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import FloatingSaveButton from '../ui/FloatingSaveButton';
import SearchResultsPage from "./SearchResultsPage";


const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="w-full mx-auto lg:py-10 flex-grow">
        <Outlet />
      </main>
      <FloatingSaveButton />
      {/* <SearchResultsPage /> */}
      <Footer />
    </div>
  );
};

export default AppLayout;


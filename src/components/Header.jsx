import { Link } from "react-router-dom";
import Button from "./../ui/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="px-6 py-2 border-b-1 border-gray-100">
      <header className=" container flex items-center justify-between py-3 mx-auto max-w-9xl
       ">
        <Link to="/" className="text-xl border border-blue-200 p-1 font-bold mr-auto uppercase text-gray-900 drop-shadow-md">
             Rate-It
        </Link>
        <div className="flex items-center space-x-6">
          <Button type="primary">Subscribe</Button>
          <Button type="plain"> Sign in</Button>
          <div className="relative">
  <input
    type="search"
    placeholder="Search..."
    className="font-dramatic text-sm border rounded-full 
      py-1 pl-9 pr-4 outline-none
        focus:ring-1 focus:ring-primary"
    />
    <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 absolute 
        left-2 top-1/2 transform -translate-y-1/2" />
    </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

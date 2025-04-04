import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import img from "../assets/img1.png"; 

export const PageSkeleton = () => (
  <div className="p-4 relative">
    <div
      className="absolute inset-0 opacity-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})`}}
    ></div>

    <div className="relative z-10">
      <Skeleton height={300} className="mb-6" />
      <Skeleton width={200} className="mb-4" />
      <Skeleton count={4} className="mb-2" />
    </div>
  </div>
);

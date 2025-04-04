import { motion } from "framer-motion";
import rev1 from "../assets/rev1.jpg";
import rev2 from "../assets/rev2.jpeg";
import rev3 from "../assets/rev3.jpg";
import rev4 from "../assets/rev4.jpeg";
import ReviewSection from "../components/ReviewSection";

function ProductReviews() {
  const leftItem = {
    hidden: { opacity: 0, x: -60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const rightItem = {
    hidden: { opacity: 0, x: 60 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const images = [
    { src: rev1, alt: "Luxury skincare", direction: "left" },
    { src: rev2, alt: "Premium makeup", direction: "right" },
    { src: rev3, alt: "Beauty essentials", direction: "left" },
    { src: rev4, alt: "Skincare routine", direction: "right" }
  ];

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 p-8 bg-white rounded-xl shadow-sm border border-gray-100"
      >
        <motion.div variants={leftItem} className="col-span-2 flex items-center justify-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
            Product
          </h1>
        </motion.div>
        
        <motion.div variants={rightItem} className="col-span-2 flex items-center justify-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
            Reviews
          </h1>
        </motion.div>

        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={image.direction === "left" ? leftItem : rightItem}
            whileHover={{ 
              y: -6,
              transition: { duration: 0.3 }
            }}
            className="aspect-square overflow-hidden rounded-xl bg-gray-50"
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover brightness-100 hover:brightness-110 transition-all duration-300"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-16"
      >
        <ReviewSection />
      </motion.div>
    </div>
  );
}

export default ProductReviews;
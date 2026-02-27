import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./productCard";
import prod1 from "../assets/images/product-image-11.png";
import prod2 from "../assets/images/product-image-12.png";
import prod3 from "../assets/images/product-image-13.png";
import prod4 from "../assets/images/product-image-14.png";
import prod5 from "../assets/images/product-image-16.png";
import prod6 from "../assets/images/product-image-17.png";
import prod7 from "../assets/images/product-image-18.png";
import prod8 from "../assets/images/product-image-19.png";
import prod9 from "../assets/images/product-image-20.png";
import prod10 from "../assets/images/product-image-10.png";
const categories = ["All Products", "Moisturizers", "Sunscreens", "Foundations", "Lipsticks & Lip Glosses", "Eyeshadows"];

const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    brand: "Healthline",
    category: "Special Offers",
    price: 28.56,
    oldPrice: 31.56,
    discount: "10% OFF",
    rating: 5,
    img: prod1,
  },
  {
    id: 2,
    name: "Facial Moisturizer L3",
    brand: "Glow & Co",
    category: "Moisturizers",
    price: 45.0,
    oldPrice: 55.0,
    discount: "18% OFF",
    rating: 4.5,
    img: prod2,
  },
  {
    id: 3,
    name: "Daily Skin Revive Serum",
    brand: "Revive Pro",
    category: "Sunscreens",
    price: 32.2,
    oldPrice: 40.0,
    discount: "20% OFF",
    rating: 5,
    img: prod3,
  },
  {
    id: 4,
    name: "Nail Polish Pro Kit",
    brand: "Polish Master",
    category: "Lipsticks & Lip Glosses",
    price: 15.99,
    oldPrice: 19.99,
    discount: "25% OFF",
    rating: 4,
    img: prod4,
  },
  {
    id: 5,
    name: "Glow Foundation SPF 20",
    brand: "Fenty Beauty",
    category: "Foundations",
    price: 27.49,
    oldPrice: 30.0,
    discount: "8% OFF",
    rating: 5,
    img: prod5,
  },
  {
    id: 6,
    name: "Lipstick Matte Trio",
    brand: "L’Oréal Paris",
    category: "Lipsticks & Lip Glosses",
    price: 18.0,
    oldPrice: 20.0,
    discount: "10% OFF",
    rating: 5,
    img: prod6,
  },
  {
    id: 7,
    name: "Hyaluronic Acid Serum",
    brand: "The Ordinary",
    category: "Sunscreens",
    price: 22.0,
    oldPrice: 25.0,
    discount: "12% OFF",
    rating: 4.5,
    img: prod7,
  },
  {
    id: 8,
    name: "Velvet Eye Palette",
    brand: "Huda Beauty",
    category: "Eyeshadows",
    price: 35.0,
    oldPrice: 40.0,
    discount: "15% OFF",
    rating: 5,
    img: prod8,
  },
  {
    id: 9,
    name: "Propolis B5 Cream",
    brand: "Revive Pro",
    category: "Moisturizers",
    price: 22.1,
    oldPrice: 28.0,
    discount: "15% OFF",
    rating: 5,
    img: prod9,
  },
  {
    id: 10,
    name: "Blush Duo Pink",
    brand: "L’Oréal Paris",
    category: "Foundations",
    price: 20.0,
    oldPrice: 25.0,
    discount: "20% OFF",
    rating: 4,
    img: prod10,
  },
];

const categoriesproduct = () => {
  const [activeTab, setActiveTab] = useState("All Products");
  const scrollRef = useRef(null);

  // Filter Logic
  const filteredProducts = activeTab === "All Products" 
    ? rawProducts 
    : rawProducts.filter(p => p.category === activeTab);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveAmount = clientWidth / 2;
      scrollRef.current.scrollBy({ 
        left: direction === "left" ? -moveAmount : moveAmount, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto lg:px-6">
      
      <div className="relative flex items-end">
        <div className="bg-white relative z-10 pb-10 pr-12">
          <h2 className="text-3xl font-medium text-gray-900">Our Products</h2>
          
        </div>

        
      </div>

      <div className=" p-5 md:p-10 ">
        
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border shadow-sm
                ${activeTab === cat 
                  ? "bg-[#00796B] text-white border-sellzy-teal" 
                  : "bg-white text-[#00796B] border-transparent hover:border-sellzy-teal hover:text-sellzy-teal"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 flex-wrap  pb-4"
        >
          {filteredProducts.length > 0 ? (
             <ProductCard products={filteredProducts.slice(0, 8)} />
          ) : (
            <div className="w-full py-20 text-center font-bold text-gray-500">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default categoriesproduct;
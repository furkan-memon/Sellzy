import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Eye,
  RefreshCw,
} from "lucide-react";
import product6 from "../assets/images/product-image-6.png";
import product7 from "../assets/images/product-image-7 (1).png";
import product8 from "../assets/images/product-image-8.png";
import product9 from "../assets/images/product-image-9.png";
import product10 from "../assets/images/product-image-10.png";
const rawProducts = [
  {
    id: 1,
    name: "Nebulizer Ultracare",
    price: 28.56,
    oldPrice: 31.56,
    discount: "10% OFF",
    sold: 4,
    available: 200,
    img:product6 ,
  },
  {
    id: 2,
    name: "Facial Moisturizer",
    price: 45.0,
    oldPrice: 55.0,
    discount: "18% OFF",
    sold: 12,
    available: 150,
    img: product7,
  },
  {
    id: 3,
    name: "Skin Revive Serum",
    price: 32.2,
    oldPrice: 40.0,
    discount: "20% OFF",
    sold: 85,
    available: 200,
    img:product8,
  },
  {
    id: 4,
    name: "Nail Polish Kit",
    price: 15.99,
    oldPrice: 19.99,
    discount: "25% OFF",
    sold: 140,
    available: 300,
    img: product9,
  },
  {
    id: 5,
    name: "Propolis B5 Cream",
    price: 22.1,
    oldPrice: 28.0,
    discount: "15% OFF",
    sold: 60,
    available: 100,
    img: product10,
  },
];

const products = [...rawProducts, ...rawProducts, ...rawProducts];

const TopOfferSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 300;
      scrollRef.current.scrollLeft = rawProducts.length * cardWidth;
    }
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth } = container;
    const singleSetWidth = scrollWidth / 3;

    if (scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft <= singleSetWidth - container.clientWidth) {
      container.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const moveAmount = scrollRef.current.clientWidth / 2;
      const scrollTo =
        direction === "left"
          ? scrollRef.current.scrollLeft - moveAmount
          : scrollRef.current.scrollLeft + moveAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Today's Top Offer
          </h2>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Up to 69% discount for limited time{" "}
            <span className="animate-pulse">🔥</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#B2FF59]/20 px-4 py-2 rounded-full border border-[#B2FF59] flex items-center gap-2 font-bold text-gray-800">
            <span className="text-sm text-gray-500 font-medium">Ends in:</span>
            <span className="tabular-nums tracking-wider">
              289 : 00 : 50 : 52
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FCE4EC] p-6 md:p-10 rounded-[3rem]">
        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white rounded-[2rem] p-5 snap-start shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-[#F9FAFB]">
                <span className="absolute top-3 left-3 bg-[#E91E63] text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                  SALES
                </span>

                <img
                  src={product.img}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  alt={product.name}
                />

                <div
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden 
                                opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20"
                >
                  <button className="p-3 hover:bg-[#FCE4EC] hover:text-[#E91E63] text-gray-400 border-r border-gray-100 transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="p-3 hover:bg-[#E8F5E9] hover:text-[#00796B] text-gray-400 border-r border-gray-100 transition-colors">
                    <RefreshCw size={18} />
                  </button>
                  <button className="p-3 hover:bg-[#FFF8E1] hover:text-[#FFB300] text-gray-400 transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-widest">
                Store Name/Category
              </p>
              <h3 className="font-bold text-gray-900 mb-2 truncate group-hover:text-[#00796B] transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-black text-[#00796B] tracking-tight">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
                <span className="text-xs font-bold text-[#E91E63]">
                  {product.discount}
                </span>
              </div>

              <div className="space-y-1.5 mb-6">
                <div className="flex justify-between text-[11px] font-bold text-gray-500">
                  <span>Sold: {product.sold}</span>
                  <span>Available: {product.available}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FFB300] rounded-full transition-all duration-1000"
                    style={{
                      width: `${(product.sold / product.available) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-[#00796B] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#00695C] transition-all active:scale-95 shadow-lg shadow-[#00796B]/10">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopOfferSection;

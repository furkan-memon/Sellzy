
import React, { useRef,useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import categorybg1 from '../assets/images/category-bg-1.png'
import SkinSerums from '../assets/images/category-bg-2.png'
import Foundations from '../assets/images/category-bg-3.png'
import Blush from '../assets/images/category-bg-4.png'
import Lipsticks from '../assets/images/category-bg-5.png'
import Hair from '../assets/images/category-bg-6.png'
import Masks from '../assets/images/category-bg-7.png'
import Nail from '../assets/images/category-bg-8.png'

const rawCategories = [
  { name: 'Nail Polishes', img: Nail },
  { name: 'Hair Oils & Serums', img: Hair },
  { name: 'Moisturizers', img: categorybg1 },
  { name: 'Skin Serums', img: SkinSerums },
  { name: 'Foundations', img: Foundations },
  { name: 'Blush & Bronzers', img: Blush },
  { name: 'Lipsticks & Lip Glosses', img: Lipsticks },
  { name: 'Face Masks', img: Masks },
];

const categories = [...rawCategories, ...rawCategories, ...rawCategories];

const CategorySlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = scrollWidth / 6;
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const moveAmount = clientWidth / 6; 
      
      let scrollTo = direction === 'left' ? scrollLeft - moveAmount : scrollLeft + moveAmount;

      
      if (scrollTo <= 0) {
        scrollRef.current.scrollLeft = scrollWidth / 3;
        scrollTo = (scrollWidth / 3) - moveAmount;
      } else if (scrollTo + clientWidth >= scrollWidth) {
        scrollRef.current.scrollLeft = scrollWidth / 3;
        scrollTo = (scrollWidth / 3) + moveAmount;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 max-w-[1400px] mx-auto px-4 md:px-8 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop By Category</h2>
          <p className="text-gray-500 mt-1 flex items-center gap-2 text-sm md:text-base">
            Up to 69% discount for limited time <span className="animate-pulse">🔥</span>
          </p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#00796B] hover:text-white transition-all shadow-sm active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="flex-none w-[140px] md:w-[160px] snap-center group cursor-pointer"
          >
            <div className="relative w-full aspect-square rounded-full mb-4 overflow-hidden bg-gray-50 ">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-800 text-center px-2 group-hover:text-[#00796B] transition-colors leading-tight">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;





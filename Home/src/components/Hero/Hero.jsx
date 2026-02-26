import React from 'react';
import MainSlider from './MainSlider'; 
import { PromoCard } from './ActionButton';
import creamImg from '../../assets/images/hero-promo-1.png'; 
import lotionImg from '../../assets/images/hero-promo-2.png';

const HeroSection = () => {
  return (
    <section className=" max-w-[1400px] mx-auto">
      <div className="w-full ">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <MainSlider />

        <div className="flex flex-col gap-6">
          <PromoCard 
            title="Your Daily Store." 
            subtitle="Essentials, deals, and more."
            imageSrc={creamImg} 
          />
          <PromoCard 
            title="Click. Shop. Smile." 
            subtitle="Easy shopping for every lifestyle."
            imageSrc={lotionImg}
          />
        </div>

      </div>
      </div>

    </section>
  );
};

export default HeroSection;
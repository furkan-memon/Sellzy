import React from 'react';

export const ActionButton = ({ text }) => (
  <button className="bg-[#00796B] text-white px-8 py-3 rounded-full flex items-center gap-3 w-fit transition-transform active:scale-95">
    {text}
    <span className="bg-white/20 group-hover:bg-white group-hover:text-[#00796B] rounded-full p-1 transition-colors">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </button>
);

export const PromoCard = ({ title, subtitle, imageSrc }) => (
  <div className="bg-white    p-8 flex flex-col justify-between relative overflow-hidden h-full min-h-[220px] ">
    <div className="z-10 relative">
      <h2 className="text-xl font-bold mb-1 text-gray-900">{title}</h2>
      <p className="text-gray-400 text-xs mb-5 font-medium">{subtitle}</p>
      <ActionButton text="Shop Now" />
    </div>
    <img 
      src={imageSrc} 
      className="absolute bottom-4 right-4 w-72 h-72 object-contain" 
      alt="" 
      onError={(e) => e.target.style.display = 'none'} 
    />
  </div>
);
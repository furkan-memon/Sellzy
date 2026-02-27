import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategorySlider from "./components/categories ";
import Products from './components/Products'
import LovedProduct from './components/Lovedproduct'
import PromoBanners from "./components/banners";
import FeaturedBrands from "./components/FeaturedBrands ";
import DualBanners from "./components/DualBanners";
import NewProduct from './components/NewProduct'
import Categoriesproducts from './components/categoriesproducts'
import ShopByBrands from "./components/ShopBrands";
import CategoryFavorites from "./components/CategoryFavorites ";
import CarProducts from './components/careProducts'
import ListingBlog from './components/LatestBlog'
const App = () => {
  return (
    <div className="min-h-screen px-4 md:px-0 bg-white">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 md:px-0 mt-8">
        <Hero />
        <CategorySlider />
        <Products />
        <LovedProduct />
        <PromoBanners />
        <FeaturedBrands />
        <DualBanners />
        <NewProduct />
        <Categoriesproducts />
        <ShopByBrands />
        <CategoryFavorites />
        <CarProducts />
        <ListingBlog />
      </main>
    </div>
  );
};

export default App;
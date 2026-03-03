import React from 'react'
import Hero from "./Hero/Hero";
import CategorySlider from "./categories ";
import Products from './Products'
import LovedProduct from './Lovedproduct'
import PromoBanners from "./Banners";
import FeaturedBrands from "./FeaturedBrands ";
import DualBanners from "./DualBanners";
import NewProduct from './NewProduct'
import Categoriesproducts from './Categoriesproducts'
import ShopByBrands from "./ShopBrands";
import CategoryFavorites from "./CategoryFavorites ";
import CarProducts from './CareProducts'
import ListingBlog from './LatestBlog'
import Footer from "./footer";
import Nesletter from './nesletter'
const Home = () => {
  return (
        
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
  )
}

export default Home
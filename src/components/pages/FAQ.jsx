import { FaHome, FaSearch } from "react-icons/fa";
import FAQSection from "./faqData";
import SAI from "./SAI";
import FeaturesSection from "./FeaturesSection";

export default function FAQHeader() {
  return (
    <>
    
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-10">
          <FaHome className="mr-2 text-gray-400" />
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="text-gray-400">FAQ</span>
        </div>

        {/* FAQ Card */}
        <div className="bg-[#147d73] rounded-2xl py-12 px-6 text-center">

          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Frequently Asked Questions
          </h1>

          <p className="text-sm text-teal-100 mb-8">
            Find quick answers to common questions.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-sm text-gray-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
     <FAQSection />
     <SAI />
     <FeaturesSection />
    </>
  );
}
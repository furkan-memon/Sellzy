import React from "react";
import smallImg from "../../assets/images/man-woman.jpg";
import largeImg from "../../assets/images/two-women.jpg";

export default function AboutSection() {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* 12 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT SIDE - 8 COLUMNS */}
          <div className="col-span-12 lg:col-span-8">

            {/* Text + Small Image */}
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">

              {/* TEXT */}
              <div>
                <h1 className="text-[48px] font-semibold text-gray-900 leading-tight mb-10">
                  Empowering Better Health at Home
                </h1>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    To make quality healthcare products accessible,
                    affordable, and reliable for every household.
                    We are committed to helping individuals and families
                    take control of their health with ease and confidence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-[20px] mb-3">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    To become a trusted name in home healthcare by
                    simplifying the way people care for themselves
                    and their loved ones.
                  </p>
                </div>
              </div>

              {/* SMALL IMAGE */}
              <img
                src={smallImg}
                alt="man and woman"
                className="md:w-[200px] h-[280px] w-full object-cover rounded-2xl mt-4"
              />

            </div>

            {/* STATS CARD */}
            <div className="mt-12 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 text-center  ">

                <div className="py-8 ">
                  <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">

                  <h3 className="text-2xl font-bold text-gray-900">120+</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Years of Experience
                  </p>
                  </div>
                </div>

                <div className="py-8">
                                      <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">


                  <h3 className="text-2xl font-bold text-gray-900">100M</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Orders Delivered Safely
                  </p>
                  </div>
                </div>

                <div className="py-8">
                                        <div className="md:border-r-2 md:border-b-0 border-b-2 py-3 md:py-0 border-gray-200">


                  <h3 className="text-2xl font-bold text-gray-900">100K+</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Verified 5-Star Reviews
                  </p>
                  </div>
                </div>

                <div className="py-8">
                  <div className=" md:border-b-0 py-3 md:py-0 border-gray-200">
                      

                  <h3 className="text-2xl font-bold text-gray-900">99%</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Customer Satisfaction Rate
                  </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE - 4 COLUMNS */}
          <div className="col-span-12  h-full lg:col-span-4 flex justify-end">
            <img
              src={largeImg}
              alt="two women"
              className="w-full h-full  object-cover rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
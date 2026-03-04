import { Home} from "lucide-react";
import errorImg from "../../assets/images/404.png"; // your image
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className=" min-h-screen flex flex-col">
      
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 py-6">
          <Home size={16} className="text-green-600" />
          <span>Home</span>
          <span className="mx-1">•</span>
          <span className="text-gray-400">404</span>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center mt-16">

          {/* Image */}
          <img
            src={errorImg}
            alt="404 illustration"
            className="w-[450px] max-w-full mb-10"
          />

          {/* Heading */}
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Oops!
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm max-w-md mb-8">
            Sorry, we couldn’t find that page. Try going back or
            checking out our homepage.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="bg-[#0e766e] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0b5e58] transition shadow-md"
          >
            Back To Home
          </Link>

        </div>

      </div>
    </section>
  );
}
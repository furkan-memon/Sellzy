import { FaEnvelope, FaHeadphones, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "support@example.com",
    },
    {
      icon: <FaHeadphones />,
      title: "Phone",
      text: "+1 (555) 123–4567",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      text: "123 Innovation Street, Suite 456, San Francisco, CA 94107, USA",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      text: "www.createuiux.com",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center text-sm text-gray-500 mb-10">
                          <FaHome className="mr-2 text-gray-400" />
                          <Link to='/' className="hover:text-gray-700 cursor-pointer">Home</Link>
                          <span className="mx-2">›</span>
                          <span className="text-gray-400">FAQ</span>
                        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            We are happy to assist you
          </h2>
          <p className="text-gray-500 text-sm">
            Here to help, anytime you need us.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
                {item.icon}
              </div>

              <h4 className="font-medium text-gray-900 mb-1">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
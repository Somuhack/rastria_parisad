import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">

      {/* Top Info Cards */}
      <div className="max-w-7xl mx-auto px-6 bottom-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address */}
          <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 text-center">
            <FiMapPin className="mx-auto text-3xl text-orange-500 mb-3" />
            <h4 className="font-semibold text-lg">Address</h4>
            <p className="text-sm mt-2">
              623/1/C Diamond Harbour Road <br />
              West Bengal, Kolkata-700034
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 text-center">
            <FiPhone className="mx-auto text-3xl text-teal-500 mb-3" />
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-sm mt-2">
              +91 8617257007 <br />
              +91 8617461575
            </p>
          </div>

          {/* Email */}
          <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 text-center">
            <FiMail className="mx-auto text-3xl text-indigo-500 mb-3" />
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-sm mt-2">
              info@icceindia.co.in <br />
              info@icceindia.co.in
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h4 className="font-semibold text-lg mb-4">About ICCE</h4>
          <p className="text-sm leading-relaxed">
            To achieve excellent standards of quality education by keeping pace
            with rapidly changing technologies and create technical manpower of
            global standards.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>ID Verification</li>
            <li>Result Verification</li>
            <li>Certification Verification</li>
            <li>Centre Login</li>
            <li>Online Test</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Recognition</li>
            <li>Our Project</li>
            <li>Course</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-center md:text-left">
            © 2017 INDIAN COUNCIL OF COMPUTER EDUCATION. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}

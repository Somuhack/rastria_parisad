import React from "react";
import { FiCheckCircle, FiAward, FiFileText, FiShield } from "react-icons/fi";

const AboutSection = () => {
  // Extracting the heavy details into a data structure for clean rendering
  const highlights = [
    {
      icon: <FiShield className="w-6 h-6 text-green-600" />,
      title: "Government Registered",
      desc: "Regd. under Public Charitable Trust Act 1899 & N.C.T. New Delhi.",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-green-600" />,
      title: "ISO Certified",
      desc: "An ISO 9001:2015 Certified Organization for quality education.",
    },
    {
      icon: <FiFileText className="w-6 h-6 text-green-600" />,
      title: "Legal Status",
      desc: "CIN: U85499WB2025PTC275711 | Unit of ESR Foundation.",
    },
    {
      icon: <FiAward className="w-6 h-6 text-green-600" />,
      title: "Recognized Excellence",
      desc: "Winner of the Bengal Star Award 2022 for Best Literacy Program.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Who We Are
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              About <span className="text-green-600">R.P.K.K</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to the official website of the <strong>Rastria Parisad Kala Kendra</strong>. 
              We are a premier unit of the <em>ESR Foundation</em> and a sister concern of the 
              National Council of Vocational Training and Development (NCVTD).
            </p>

            <p className="text-gray-600 leading-relaxed">
              Working extensively across West Bengal and India, we specialize in 
              Computer Education and Vocational Training. Our programs are conducted 
              in alignment with State and Central Government standards to empower 
              students with industry-ready skills.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-green-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Image Composition */}
          <div className="relative">
            {/* Background Decorator */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200/50 rounded-full blur-3xl opacity-50"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* PLACEHOLDER FOR YOUR IMAGE 1 (The Award Ceremony) */}
              <img 
                src="carosal/c1.jpeg" 
                alt="ICCE Award Ceremony" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white">
                <p className="font-bold text-center">
                  🏆 Bengal Star Award Winner
                </p>
                <p className="text-xs text-center text-gray-300">
                  Best Education Literacy Program of the Year
                </p>
              </div>
            </div>

            {/* Secondary Floating Card (Optional Visual Interest) */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-green-500 max-w-xs">
              <p className="text-sm font-bold text-gray-800">Govt. Reg No.</p>
              <p className="text-xs text-gray-500 font-mono">IV-1721/17 (West Bengal)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
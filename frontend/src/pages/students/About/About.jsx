import React from 'react';

const AboutICCE = () => {
  const categories = [
    "Computer Course", "Vocational", "Technical", "Paramedical", 
    "Distance Education", "Regular Education", "Scholarship", 
    "IT Solution", "Travel & Tourism", "Competitive Exam", 
    "Nursing", "News Paper"
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans text-gray-800">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">ABOUT US</h1>
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold border-b-2 border-blue-900 inline-block pb-1">
            About ICCE
          </h2>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="lg:w-3/4 space-y-6 text-justify leading-relaxed">
          <p>
            Indian Council of Computer Education (A venture of ESR Foundation) Trust has been registered under the Public Charitable Trust Act. Reg. No. IV-190301721/2017 from Govt. of West Bengal, Registered Govt. of India N.C.T., New Delhi, also registered Planning Commission, Department of Labour, MSME, CVC, QCI. ICCE working in different fields of Programme & Commercial training conducted by the State Government & Central Government to approach every class of the society. Trust is also certified by ISO 9001:2015 Organization.
          </p>

          <p>
            The main function of the ICCE is to provide higher technical education in nominal charges for every group of society of Urban & Rural areas all over India and get success in computer revolution which is the main dream of Indian Govt.
          </p>

          <section>
            <h3 className="text-xl font-bold underline mb-3">Our Aim</h3>
            <p>
              In present time, some Institutions are running their one-year or more than one-year programme in higher charges. Due to financial problem many students of middle class family cannot afford the load of some Institutes course fees. Our mission studied their theme properly and decides to provide better higher technical education in computer at very nominal charges.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold underline mb-3 uppercase">Vission</h3>
            <p>
              To achieve excellent standards of quality education by keeping pace with rapidly changing technologies and create technical manpower of global standards with capabilities of accepting new challenges.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold underline mb-3 uppercase">Mission</h3>
            <p>
              Our efforts are dedicated to impart quality and value based education to raise satisfaction level of all stake-holders. Our strength is directed to create competent professionals. Our endeavour is to provide all possible support to promote research and development activities.
            </p>
          </section>
        </main>

        {/* Sidebar / Categories */}
        <aside className="lg:w-1/4">
          <h3 className="text-xl font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
            Categories
          </h3>
          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 transition-colors cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AboutICCE;
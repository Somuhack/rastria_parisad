import React from 'react';
import Main from '../../Layout/Main';

const RecognitionPage = () => {
  const categories = [
    "Computer Course", "Vocational", "Technical", "Paramedical", 
    "Distance Education", "Regular Education", "Scholarship", 
    "IT Solution", "Travel & Tourism", "Competitive Exam", 
    "Nursing", "News Paper"
  ];

  return (
    <Main>
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Main Content Area */}
        <div className="flex-1 text-center">
          <h2 className="text-blue-900 font-bold text-xl mb-4 text-left uppercase tracking-wider">
            Recognition
          </h2>
          
          <h1 className="text-red-700 text-3xl md:text-4xl font-black mb-4">
            INDIAN COUNCIL OF COMPUTER EDUCATION
          </h1>

          <div className="space-y-3 italic text-blue-900 font-semibold text-sm md:text-base">
            <p className="underline decoration-2">A Unit of E.S.R. Foundation.</p>
            
            <p>A Sister Concern of National Council of Vocational Training and Development.</p>
            
            <p>Our Sister Concern of Rastriya Parisad Kala Kendra.</p>
            
            <p>Registered Under The Public Trust Act – Govt. Of India, N.C.T., New Delhi.<br/>
               <span className="font-bold">(Registration No. IV-1721/17)</span>
            </p>

            <h3 className="text-blue-900 text-xl md:text-2xl font-bold not-italic pt-2">
              Registered Ministry of Corporate Affaire Govt. of India
            </h3>

            <p className="underline decoration-2">
              Corporate Identity Number - U85499WB2025PTC275711
            </p>

            <p className="font-bold">An ISO 9001:2015 Certified Organization.</p>
            
            <p>Certificate Registered Under CR. Act. 1957 Govt. of India.</p>
            
            <p>Member of Planning Commission Govt. of India.</p>

            <p className="not-italic px-4 md:px-10">
              A National Educational programme of Information Technology Registered under 
              Ministry of Human Resource Development Govt. of India.
            </p>

            <p className="not-italic text-xs md:text-sm px-4 md:px-8">
              Central Vigilance Commission has adopted the Integrity Pledge and is committed to 
              uphold highest standards of integrity and good governance and to follow ethical 
              practices in conducting its activities.
            </p>

            <h3 className="text-blue-900 text-lg md:text-xl font-bold not-italic">
              Registered Ministry of Micro, Small and Medium Enterprises Govt. of India.
            </h3>
          </div>
        </div>

        {/* Sidebar Categories */}
        <div className="w-full md:w-64">
          <h2 className="text-blue-900 font-bold text-lg mb-2">Categories</h2>
          <div className="border-t-2 border-gray-300">
            {categories.map((item, index) => (
              <div 
                key={index} 
                className="bg-orange-600 text-white p-2 mb-1 text-sm border-b border-orange-700 hover:bg-orange-500 cursor-pointer transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </Main>
  );
};

export default RecognitionPage;
import React from 'react';
import Main from '../../Layout/Main';
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
  const categories = [
    "Computer Course", "Vocational", "Technical", "Paramedical", 
    "Distance Education", "Regular Education", "Scholarship", 
    "IT Solution", "Travel & Tourism", "Competitive Exam", 
    "Nursing", "News Paper"
  ];

  return (
    <Main>
      <div className="max-w-6xl mx-auto p-4">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ✅ Main Content from child routes */}
          <div className="lg:w-3/4">
            <Outlet />
          </div>

          {/* ✅ Sidebar */}
          <aside className="lg:w-1/4">
            <h3 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">
              Categories
            </h3>

            <ul className="space-y-1">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </div>
    </Main>
  );
};

export default AboutLayout;
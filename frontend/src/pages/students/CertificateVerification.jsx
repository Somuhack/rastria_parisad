import React from "react";
import "./CertificateVerification.css";

const categories = [
  "Computer Course",
  "Vocational",
  "Technical",
  "Paramedical",
  "Distance Education",
  "Regular Education",
  "Scholarship",
  "IT Solution",
  "Travel & Tourism",
  "Competitive Exam",
  "Nursing",
  "News Paper",
];

const CertificateVerification = () => {
  return (
    <div className="page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">Categories</h3>
        <ul className="category-list">
          {categories.map((item, index) => (
            <li key={index} className="category-item">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h2 className="title">Certificate Verification</h2>

        <label className="label">Certificate No</label>
        <input
          type="text"
          className="input"
          placeholder="Enter certificate number"
        />

        <button className="submit-btn3">SUBMIT</button>
      </main>
    </div>
  );
};

export default CertificateVerification;

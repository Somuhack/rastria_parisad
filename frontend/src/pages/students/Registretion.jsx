import React from "react";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  return (
    
    <div className="page">
      {/* Sidebar */}
      <aside className="sidebar">
        <span ><b >Categories</b></span>
  
        <ul>
          {[
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
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>

      {/* Main Form */}
      <main className="content">
        <span >Online Admission Form</span>

        <form className="form">
          {/* Location */}
          <section>
            <h4>Choose your location</h4>
            <div className="grid-2">
              <select required>
                <option>Select State</option>
              </select>
              <select required>
                <option>Select Study Centre Address</option>
              </select>
            </div>
          </section>

          {/* Course */}
          <section>
            <h4>Choose your course</h4>
            <div className="grid-2">
              <select required>
                <option>Select Course Category</option>
              </select>
              <select required>
                <option>Select Course Name</option>
              </select>
            </div>
          </section>

          {/* Personal Info */}
          <section>
            <h4>Enter your information</h4>
            <div className="grid-2">
              <input placeholder="Full Name" required />
              <input placeholder="Father's Name" required />
            </div>

            <input type="date" placeholder="Date of Birth" required />
            <input placeholder="Nationality" />
            <input placeholder="Religion" />
            <input type="email" placeholder="Email Address" />
            <input placeholder="State / City" />
            <input placeholder="Caste" />
            <input placeholder="Mobile" />

            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Residential Address" rows="3" />
          </section>

          {/* Education */}
          <section>
            <h4>Educational Qualification</h4>
            <div className="table">
              {[
                "Below 10th / 10th",
                "Higher Secondary",
                "Graduation",
                "Post Graduation",
              ].map((row) => (
                <div className="table-row" key={row}>
                  <span>{row}</span>
                  <input placeholder="Board / University" />
                  <input placeholder="Year" />
                  <input placeholder="% Marks" />
                  <input placeholder="Grade" />
                </div>
              ))}
            </div>
          </section>

          {/* Captcha */}
          <section className="captcha">
            <div className="captcha-box">AB12X</div>
            <input placeholder="Enter captcha" />
          </section>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </main>
    </div>
    
  );
};

export default AdmissionForm;

import React, { useState } from "react";
import { courses } from "../../data/courses";
import Filters from "./Filters";
import CourseSection from "./CourseSection";
import Main from "../../Layout/Main";

const durations = [3, 6, 9, 12, 18, 24];

const Course = () => {
  const [filters, setFilters] = useState({
    duration: "",
    category: "",
    search: "",
  });

  const filteredCourses = courses.filter((course) => {
    return (
      (!filters.duration || course.duration == filters.duration) &&
      (!filters.category || course.category === filters.category) &&
      course.title.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <Main>
    <div className="p-4 md:p-8">
      
      <h1 className="text-2xl font-bold mb-6">
        Courses by Duration
      </h1>

      <Filters filters={filters} setFilters={setFilters} />

      {durations.map((duration) => (
        <CourseSection
          key={duration}
          duration={duration}
          courses={filteredCourses.filter(
            (c) => c.duration === duration
          )}
        />
      ))}
    </div>
    </Main>
  );
};

export default Course;
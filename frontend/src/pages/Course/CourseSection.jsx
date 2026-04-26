import CourseCard from "./CourseCard";

const CourseSection = ({ duration, courses }) => {
  if (courses.length === 0) return null;

  return (
    <div className="collapse collapse-plus bg-base-200 mb-3">
      
      <input type="checkbox" defaultChecked={duration === 18} />

      <div className="collapse-title text-lg font-medium">
        {duration} Months Courses
      </div>

      <div className="collapse-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      
      <figure>
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm">{course.title}</h2>

        <p className="text-xs opacity-70">{course.code}</p>

        <div className="badge badge-primary">{course.duration} Months</div>

        <div className="card-actions justify-end mt-2">
          <button className="btn btn-sm btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
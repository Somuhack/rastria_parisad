import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const STUDENTS = [
  {
    name: "SUPARNA MONDAL",
    year: 2023,
    marks: 72,
    image: "st.jpg",
  },
  {
    name: "PRIYA SHEE",
    year: 2023,
    marks: 85,
    image: "st.jpg",
  },
  {
    name: "PRIYA HALDER",
    year: 2023,
    marks: 74,
    image: "st.jpg",
  },
  {
    name: "ANOTHER STUDENT",
    year: 2024,
    marks: 88,
    image: "st.jpg",
  },
];

export default function StudentsSlider() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const [speed, setSpeed] = useState(0.4); // smooth speed
  const [paused, setPaused] = useState(false);
  const position = useRef(0);

  // duplicate list
  const slides = [...STUDENTS, ...STUDENTS];

  useEffect(() => {
    const animate = () => {
      if (!paused && trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;

        position.current += speed;
        position.current %= trackWidth; // 🔥 FIXES JERK

        trackRef.current.style.transform = `translateX(-${position.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [paused, speed]);

  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-indigo-700 mb-8">
        Our Students
      </h2>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Track */}
        <div ref={trackRef} className="flex w-max">
          {slides.map((student, index) => (
            <div
              key={index}
              className="w-[260px] md:w-[300px] mx-4 bg-white rounded-xl shadow-md p-4 flex-shrink-0 hover:shadow-xl transition"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-32 h-32 mx-auto rounded-lg object-cover border"
              />

              <h3 className="mt-4 text-center font-semibold">
                {student.name}
              </h3>

              <p className="mt-2 text-sm text-gray-600 text-center">
                Year: {student.year}
              </p>

              <p className="text-sm text-gray-600 text-center">
                Marks: <span className="font-semibold">{student.marks}</span>
              </p>
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={() => setSpeed((s) => Math.max(0.2, s - 0.2))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-indigo-600 hover:text-white transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setSpeed((s) => s + 0.2)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-indigo-600 hover:text-white transition"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

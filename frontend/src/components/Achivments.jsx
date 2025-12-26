import { useEffect, useState } from "react";
import {
  FaSchool,
  FaBook,
  FaUserGraduate,
  FaMapMarkedAlt,
} from "react-icons/fa";

/* DATA */
const ACHIEVEMENTS = [
  {
    label: "Study Centres",
    value: 2500,
    icon: <FaSchool className="text-5xl text-orange-500" />,
  },
  {
    label: "Courses",
    value: 100,
    suffix: "+",
    icon: <FaBook className="text-5xl text-blue-500" />,
  },
  {
    label: "Learners",
    value: 10000,
    suffix: "L",
    icon: <FaUserGraduate className="text-5xl text-yellow-500" />,
  },
  {
    label: "States",
    value: 18,
    suffix: "+",
    icon: <FaMapMarkedAlt className="text-5xl text-purple-500" />,
  },
];

/* COUNT UP HOOK */
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 5);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 5);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
}

export default function Achievements() {
  return (
    <section className="bg-gray-100 mb-10 py-14">
      <h2 className="text-center text-3xl font-bold text-indigo-700 mb-10">
        Achievements
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ACHIEVEMENTS.map((item, i) => {
          const count = useCountUp(item.value);

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="mb-5 flex justify-center">{item.icon}</div>

              <h3 className="text-4xl font-bold text-yellow-500">
                {count}
                {item.suffix || ""}
              </h3>

              <p className="mt-3 text-lg font-medium text-gray-700">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

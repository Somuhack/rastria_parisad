import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function AwardCarousel() {
    const SLIDES = [
  {
    image: "carosal/c1.jpeg",
    // title: "Great Success",
    // subtitle: "ICCE Achieved",
    // description:
    //   "Bengal Star Award – Best Education Literacy Program of the Year 2022",
  },
  {
   image: "carosal/c2.jpeg",
    // title: "Proud Moment",
    // subtitle: "National Recognition",
    // description: "Awarded in Kolkata, West Bengal",
  },
  {
    image: "caros al/c3.jpeg",
  },
  {
    image: "carosal/c4.jpeg",
  },
  {
    image: "carosal/c5.jpeg",
  },
  {
    image: "carosal/c6.jpeg",
  },
  {
    image: "carosal/c7.jpeg",
  },
];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[400px] md:h-[500px] relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-4xl px-6 text-white">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <h3 className="text-xl md:text-3xl text-yellow-400 mt-2">
                  {slide.subtitle}
                </h3>
                <p className="mt-4 text-sm md:text-lg max-w-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

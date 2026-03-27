import React, { useEffect, useRef, useState } from "react";

function Temdesign() {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const trackRef = useRef(null);
  const positionRef = useRef(0);

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/imagee3.jpg",
  ];

  const loopImages = [...images, ...images, ...images, ...images];

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      if (!paused && trackRef.current) {
        positionRef.current -= 0.5;
        if (Math.abs(positionRef.current) > trackRef.current.scrollWidth / 2) {
          positionRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <section className="py-16 text-center bg-[#d8efef] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Templates designed to sell
      </h2>

      <p className="text-sm text-gray-700 mb-10 max-w-2xl mx-auto">
        Choose from 100s of designs for every idea and industry
      </p>

      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex w-max">
          {loopImages.map((img, index) => {
            const position = index % 3;
            const isActive = activeIndex === index;

            const buttonClasses =
              position === 2
                ? "px-9 py-2.5 text-base"
                : "px-11 py-3.5 text-base";

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  setPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setActiveIndex(null);
                }}
                className={`flex-shrink-0 px-3 ${
                  position === 2
                    ? "w-[200px] sm:w-[220px] md:w-[250px] h-[300px] sm:h-[360px] md:h-[420px]"
                    : "w-[320px] sm:w-[400px] md:w-[620px] h-[300px] sm:h-[360px] md:h-[420px]"
                }`}
              >
                <div className="relative w-full h-full cursor-pointer">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />

                  <div
                    className={`absolute inset-0 rounded-lg bg-black/50 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {isActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 px-2">
                      <button
                        className={`bg-white rounded-md font-semibold shadow-lg transition-all duration-300 ${buttonClasses}`}
                      >
                        Start Editing
                      </button>
                      <p
                        className={`text-white font-bold text-xs sm:text-sm ${
                          position === 2 ? "text-sm" : "text-sm md:text-base"
                        }`}
                      >
                        Preview
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-10 bg-black text-white px-10 md:px-14 py-3 rounded-sm font-semibold">
        Browse All Templates
      </button>
    </section>
  );
}

export default Temdesign;

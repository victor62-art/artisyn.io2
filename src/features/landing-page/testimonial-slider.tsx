"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sabo Masties",
    desc: "The quality of artisans on Artisyn stood out immediately. The experience felt simple and professional.",
  },
  {
    name: "Jane Cooper",
    desc: "Finding skilled professionals has never been easier. The verification process ensures top-quality work.",
  },
  {
    name: "Michael Chen",
    desc: "Artisyn connected me with talented artisans who delivered exceptional results. Highly recommended!",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);


  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [handleNext]);

  const getVisibleTestimonials = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return [
      { ...testimonials[prevIndex], position: "left" },
      { ...testimonials[currentIndex], position: "center" },
      { ...testimonials[nextIndex], position: "right" },
    ];
  };

  return (
    <section className="max-w-268 mx-auto text-black mt-16 md:mt-35 overflow-hidden pb-3 px-4">
      <p className="leading-tight text-center text-3xl md:text-[48px] font-bold max-w-full md:w-148 mx-auto">
        Trusted by Clients Who Value Quality
      </p>

      <div className="flex items-center justify-center mt-8 md:mt-12">
        <motion.div
          key={currentIndex}
          className="flex items-center"
          initial={{ x: direction > 0 ? 300 : -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`${index !== 1 ? "hidden md:block" : ""}`}
            >
              <Testimonial
                name={testimonial.name}
                desc={testimonial.desc}
                isCenter={testimonial.position === "center"}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8.75">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? "w-4.75 h-1.5 bg-black"
                : "w-1.5 h-1.5 bg-[#6B6878]"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-5">
        <button
          onClick={handlePrev}
          className="p-2 rounded-xl ring ring-black/20 hover:ring-black cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-xl ring ring-black/20 hover:ring-black cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

type TestimonialProps = {
  name: string;
  desc: string;
  isCenter?: boolean;
};

function Testimonial({ name, desc, isCenter = false }: TestimonialProps) {
  return (
    <div
      className={`w-full md:w-86.5 py-4 md:py-6 px-4 transition-all duration-300 rounded-lg ${
        isCenter ? "md:scale-105 shadow-[0px_7px_16px_0px_#0000001A] " : ""
      }`}
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={"/images/star.png"}
            alt="star"
            width={300}
            height={300}
            className="w-4.5 h-4.5"
          />
        ))}
      </div>

      <p className="text-sm md:text-base text-[#425466] leading-tight py-4 md:py-5.25">
        {desc}
      </p>
      <p className="font-bold text-base md:text-lg">{name}</p>
      <p className="text-xs md:text-sm text-[#425466]">Hired X5</p>
    </div>
  );
}

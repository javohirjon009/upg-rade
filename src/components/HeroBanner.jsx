"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerImg from "src/assets/img/banner.png";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: bannerImg,
    },
    {
      id: 2,
      image: bannerImg,
    },
    {
      id: 3,
      image: bannerImg,
    },
    {
      id: 4,
      image: bannerImg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative container mx-auto px-4 py-3 mt-3 w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 100,0 80,100 0,100"
                  fill="white"
                  opacity="0.1"
                />
                <polygon
                  points="20,0 100,0 100,60 40,100"
                  fill="white"
                  opacity="0.05"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Product Info */}
              <div className="mt-78 ml-4">
                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-3 text-2xl font-bol shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  ПОДРОБНЕЕ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-4 top-110 transform -translate-y-1/2 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-pink-500 p-3 hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          size="sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-blue-500 p-3 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          size="sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-pink-500 shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Rasmlarni import qilish
import img1 from "src/assets/img/img1.jpg";
import img2 from "src/assets/img/img2.jpg";
import img3 from "src/assets/img/img3.jpg";
import img5 from "src/assets/img/img4.jpg";
import img6 from "src/assets/img/img5.jpg";
import img7 from "src/assets/img/img6.jpg";
import img8 from "src/assets/img/img7.jpg";
import img9 from "src/assets/img/img8.jpg";
import konfig from "src/assets/img/konfig.jpg";

const categories = [
  { title: "Мат. Платы", img: img1 },
  { title: "SSD", img: img2 },
  { title: "Кулеры", img: img3 },
  { title: "Блоки питания", img: img5 },
  { title: "Столы", img: img6 },
  { title: "Кресла", img: img7 },
  { title: "Освещение", img: img8 },
  { title: "Аксессуары", img: img9 },
  { title: "Ноутбуки", img: konfig },
  { title: "Консоли", img: img1 },
  { title: "Контроллеры", img: img2 },
  { title: "Wi-Fi", img: img3 },
  { title: "Корпуса", img: img5 },
  { title: "Процессоры", img: img6 },
  { title: "Видеокарты", img: img7 },
  { title: "ОЗУ", img: img8 },
];

export default function Complect() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8;

  const handleNext = () => {
    if (startIndex + visibleCount < categories.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleItems = categories.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full px-6 py-12 bg-white text-black font-sans container">
      {/* Title and Buttons */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          Комплектующие
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-20">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl w-[350px] h-[350px] shadow hover:shadow-lg hover:-translate-y-1 transform transition-all cursor-pointer group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-24 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-center text-base font-semibold tracking-tight flex justify-center items-center gap-1">
              {item.title}
              <span className="text-pink-600 group-hover:translate-x-1 transition-all">
                →
              </span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Heart, Scale, Star, ShoppingCart } from "lucide-react";

export default function ProductsSection() {
  const [favorites, setFavorites] = useState(new Set());
  const [compareList, setCompareList] = useState(new Set());
  const products = [
    {
      id: 1,
      title: "Brateck LDT69-C022 Black",
      brand: "Brateck",
      brandColor: "bg-black",
      rating: 4,
      price: 1110000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/dd/13/2c/dd132cbf69449eb24ac58383c5dbf04522cbc59b4c6c9dd77156f76beabebce1.png",
    },
    {
      id: 2,
      title: "DarkProject ALU87 Daylight",
      brand: "Dark Project",
      brandColor: "bg-purple-700",
      rating: 5,
      price: 1175000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/2e/3d/ca/2e3dcae656853932acb8b355f2cbaadb35a8e9d33706574e6937fa9085d23a21.png",
    },
    {
      id: 3,
      title: "DarkProject ALU87 Violet",
      brand: "Dark Project",
      brandColor: "bg-purple-700",
      rating: 4,
      price: 849000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/81/d4/f4/81d4f4821852c26a6471a02251c9503ba5fc4fb469d8c5979381a9cb578e608d.png",
    },
    {
      id: 4,
      title: "HyperX Cloud III Red Wireless",
      brand: "HyperX",
      brandColor: "bg-red-600",
      rating: 5,
      price: 2100000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/10/3d/16/103d16da78a5530d3b5710e5e86ec06aaf77e37654a843af43d54e2718f8fe4f.png",
    },
    {
      id: 5,
      title: "HyperX QuadCast 2",
      brand: "HyperX",
      brandColor: "bg-red-600",
      rating: 5,
      price: 1755000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/93/91/20/939120b096040e83e2e842de03d10f5d262a0f74df665b6f2662b1e852d99fa0.png",
    },
    {
      id: 6,
      title: "Red Square Alumix TKL Kitsune White",
      brand: "Red Square",
      brandColor: "bg-pink-600",
      rating: 4,
      price: 1235000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/aa/43/5a/aa435a42be013f160ccaae5efd5213933b4045d0181906abc214adb51a8db0f0.png",
    },
    {
      id: 7,
      title: "Thronmax Boom Arm S8",
      brand: "Thronmax",
      brandColor: "bg-blue-600",
      rating: 3,
      price: 783000,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/e0/f6/97/e0f6974912a85e2f8d364db4031f1aa0b3776e9022fc8a5a2fbdfebcea9c71ca.png",
    },
    {
      id: 8,
      title: "Victrix Pro BFG White Wireless",
      brand: "PlayStation",
      brandColor: "bg-indigo-700",
      rating: 5,
      price: 3212500,
      currency: "UZS",
      image:
        "https://files.ox-sys.com/cache/500x_/image/0f/eb/92/0feb92c61d2d3d6f06a65330437ccf137e7b4f7e776bde9b0f82f5abb2dc6cea.png",
    },
  ];

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(productId)
      ? newFavorites.delete(productId)
      : newFavorites.add(productId);
    setFavorites(newFavorites);
  };

  const toggleCompare = (productId) => {
    const newCompareList = new Set(compareList);
    newCompareList.has(productId)
      ? newCompareList.delete(productId)
      : newCompareList.add(productId);
    setCompareList(newCompareList);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          НОВИНКИ
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl duration-300 border border-gray-100 overflow-hidden group w-full"
          >
            {/* Image Section */}
            <div className="relative p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                {/* Favorite */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    favorites.has(product.id)
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-400 hover:text-pink-500 hover:bg-pink-50 shadow-md"
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={favorites.has(product.id) ? "currentColor" : "none"}
                  />
                </button>
                {/* Compare */}
                <button
                  onClick={() => toggleCompare(product.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    compareList.has(product.id)
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white text-gray-400 hover:text-blue-500 hover:bg-blue-50 shadow-md"
                  }`}
                >
                  <Scale className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 space-y-3">
              <h3 className="font-medium text-gray-900 text-sm leading-tight h-10 overflow-hidden">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>

              {/* Brand */}
              <div className="flex justify-start">
                <span
                  className={`${product.brandColor} text-white text-xs px-3 py-1 rounded-full font-medium inline-block`}
                >
                  {product.brand}
                </span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Цена:</p>
                <p className="text-lg font-bold text-pink-500">
                  {product.price.toLocaleString("ru-RU")}{" "}
                  <span className="text-sm">{product.currency}</span>
                </p>
              </div>

              {/* Add to cart */}
              <button className="w-full bg-pink-500 hover:bg-pink-200 hover:text-pink-600 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" /> В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

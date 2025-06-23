"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Scale,
  Heart,
  ShoppingCart,
  Phone,
  Sun,
  Moon,
  User,
  Menu,
  X,
  Settings,
  Computer,
  Grid3X3,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm dark:shadow-lg transition-colors duration-300">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold">
                <span className="text-black dark:text-white">UPG</span>
                <span className="text-pink-500">RADE</span>
              </div>
            </div>

            {/* Search Bar (desktop only) */}
            <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  className="w-full h-12 pl-4 pr-12 text-base border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                <button
                  size="sm"
                  className="absolute right-2 top-2 h-8 w-8 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-white rounded-md"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Currency */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <div className="text-sm font-medium dark:text-white">₽</div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  UZS/USD
                </span>
              </div>

              {/* Compare */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors relative">
                <div className="w-8 h-8 flex items-center justify-center mb-1 relative">
                  <Scale className="h-5 w-5 dark:text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    0
                  </div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Сравнение
                </span>
              </div>

              {/* Favorites */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <Heart className="h-5 w-5 dark:text-white" />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Избранное
                </span>
              </div>

              {/* Cart */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <ShoppingCart className="h-5 w-5 dark:text-white" />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Корзина
                </span>
              </div>

              {/* Contacts */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <Phone className="h-5 w-5 dark:text-white" />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Контакты
                </span>
              </div>

              {/* Theme */}
              <div
                className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors"
                onClick={toggleTheme}
              >
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 dark:text-white" />
                  ) : (
                    <Moon className="h-5 w-5 dark:text-white" />
                  )}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Тема
                </span>
              </div>

              {/* User */}
              <div className="flex flex-col items-center text-center cursor-pointer hover:text-pink-500 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <User className="h-5 w-5 dark:text-white" />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <nav className={`${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 py-3">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center lg:justify-start font-medium">
                <Grid3X3 className="h-4 w-4" />
                Каталог
              </button>

              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 lg:ml-8">
                <div className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-pink-500 cursor-pointer transition-colors px-2 py-1">
                  <Settings className="h-4 w-4" />
                  <span className="font-medium">Конфигуратор</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-pink-500 cursor-pointer transition-colors px-2 py-1">
                  <Computer className="h-4 w-4" />
                  <span className="font-medium">Купить компьютер</span>
                </div>

                <div className="text-gray-700 dark:text-white hover:text-pink-500 cursor-pointer transition-colors px-2 py-1">
                  <span className="font-medium">Новинки</span>
                </div>

                <div className="text-gray-700 hover:text-pink-500 cursor-pointer transition-colors px-2 py-1 relative">
                  <span className="font-bold text-black dark:text-white">
                    HyperX
                  </span>
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-pink-500"></div>
                </div>

                <div className="text-gray-700 dark:text-white hover:text-pink-500 cursor-pointer transition-colors px-2 py-1">
                  <span className="font-medium">Все бренды</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  className="w-full h-12 pl-4 pr-12 text-base border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
                />
                <button
                  size="sm"
                  className="absolute right-2 top-2 h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-white rounded-md"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Mobile Actions Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                ["₽", "UZS/USD"],
                [<Scale className="h-5 w-5" />, "Сравнение"],
                [<Heart className="h-5 w-5" />, "Избранное"],
                [<ShoppingCart className="h-5 w-5" />, "Корзина"],
                [<Phone className="h-5 w-5" />, "Контакты"],
                [
                  isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  ),
                  "Тема",
                ],
              ].map(([icon, label], index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
                  onClick={label === "Тема" ? toggleTheme : undefined}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    {icon}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

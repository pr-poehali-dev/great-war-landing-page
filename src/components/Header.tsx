import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b-4 border-amber-800 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Shield" size={40} className="text-amber-800" />
            <div>
              <h1 className="text-3xl font-bold text-amber-900 font-serif">
                Великая Отечественная Война
              </h1>
              <p className="text-amber-700 text-sm">
                1941-1945 • Документальный архив
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#timeline"
              className="text-amber-800 hover:text-amber-900 font-medium transition-colors"
            >
              Хронология
            </a>
            <a
              href="#heroes"
              className="text-amber-800 hover:text-amber-900 font-medium transition-colors"
            >
              Герои
            </a>
            <a
              href="#map"
              className="text-amber-800 hover:text-amber-900 font-medium transition-colors"
            >
              Карта боёв
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

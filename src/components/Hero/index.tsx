import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative w-full h-screen text-white px-8 py-10 flex flex-col justify-center items-center">
      {/* Buttons */}
      <div className="absolute top-10 right-10 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-orange-500 text-white font-semibold py-6 px-12 2xl:py-4 2xl:px-8 rounded-full shadow-md hover:bg-orange-600 text-xl transition-colors duration-300 max-sm:hidden"
        >
          Let's Talk
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          onClick={toggleMenu}
          className="bg-black border-2 border-white text-white flex items-center gap-2 py-3 px-6 2xl:py-4 2xl:px-8 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
        >
          {isMenuOpen ? "Close" : "Menu"}
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute top-10 right-10 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 min-w-[300px]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-black">Menu</h3>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-black transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-6">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-xl font-semibold text-black hover:text-orange-500 transition-all duration-300 transform hover:translate-x-2 ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: "opacity, transform",
                  }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-[80px] md:text-[150px] font-bold leading-none 2xl:text-[200px]"
        >
          <span className="text-orange-500">Portfolio</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          className="text-[20px] md:text-[40px] text-white text-right"
        >
          @sebbysol
        </motion.div>
      </div>
    </section>
  );
}

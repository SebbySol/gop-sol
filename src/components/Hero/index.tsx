import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative w-full h-screen text-white px-8 py-10 flex flex-col justify-center items-center">
      <div className="absolute top-10 right-10 flex items-center gap-4">
        <button className="bg-orange-500 text-white font-semibold py-6 px-12 rounded-full shadow-md hover:bg-orange-600 text-xl transition-colors duration-300 max-sm:hidden">
          Let's Talk
        </button>
        <button 
          onClick={toggleMenu}
          className="bg-black border-2 border-white text-white flex items-center gap-2 py-3 px-6 md:py-6 md:px-12 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Hamburger Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`absolute top-10 right-10 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-4 scale-95'
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
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: 'opacity, transform'
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

      <div className="text-center">
        <div className="text-[80px] md:text-[150px] lg:text-[250px] font-bold leading-none">
          <span className="text-orange-500">Portfolio</span>
        </div>
        <div className="text-[20px] md:text-[40px] lg:text-[50px] text-white text-right">@sebbysol</div>
      </div>
    </section>
  );
}

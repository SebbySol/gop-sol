import { Menu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen text-white px-8 py-10 flex flex-col justify-center items-center">
      <div className="absolute top-10 right-10 flex items-center gap-4">
        <button className="bg-orange-500 text-white font-semibold py-6 px-12 rounded-full shadow-md hover:bg-orange-600 text-xl">
          Let's Talk
        </button>
        <button className="bg-black text-white flex items-center gap-2 py-6 px-12 rounded-full text-xl">
          Menu
          <Menu size={30} />
        </button>
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

export default function IllustratorGallery() {
  return (
    <section className="bg-[#FF5500] px-6 py-10">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl md:text-9xl font-bold text-black mb-5">Illustrator</h2>
        <a href="#" className="text-black text-xl text-sm hover:underline">
          View More
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[950px]">
        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[50%]" />
          <div className="bg-black w-full h-[25%]" />
          <div className="bg-black w-full h-[25%]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[30%]" />
          <div className="bg-black w-full h-[70%]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[60%]" />
          <div className="bg-black w-full h-[40%]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black w-full h-[50%]" />
          <div className="bg-black w-full h-[50%]" />
        </div>
      </div>
    </section>
  );
}

import { skills } from '../../utility/constants';

export default function Skills() {
    return (
        <section className="bg-black bg-[url('/path/to/your/noise-texture.png')] bg-cover py-20 px-6 md:px-12 lg:px-20 text-white">
            <div className="mx-[30px]">
                <div className="grid lg:grid-cols-2 gap-40">
                    <div className="max-w-3xl justify-self-end max-sm:w-full">
                        <h2 className="text-4xl xl:text-5xl font-bold text-center mb-10">
                            Technical Skills
                        </h2>
                        <div className="grid md:grid-cols-2 gap-[25px]">
                            {skills.technical.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] rounded-xl p-[20px] border border-gray-700 lg:min-h-[200px]"
                                >
                                    <h3 className="text-[#FF5500] font-semibold text-[0.8rem] lg:text-[1rem] xl:text-[1.7rem]">{item.title}</h3>
                                    <p className="text-[1rem] text-gray-300 mb-[10px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <h2 className="lg:text-4xl xl:text-5xl md:text-6xl font-bold text-center mb-10">
                            Soft Skills
                        </h2>
                        <div className="grid md:grid-cols-2 gap-[25px]">
                            {skills.soft.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111111] rounded-xl p-[20px] border border-gray-700 lg:min-h-[200px]"
                                >
                                    <h3 className="text-[#FF5500] font-semibold text-[0.8rem] lg:text-[1rem] xl:text-[1.7rem]">{item.title}</h3>
                                    <p className="text-[1rem] text-gray-300 mb-[10px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

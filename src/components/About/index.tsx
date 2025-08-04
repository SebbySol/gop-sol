import {IMAGES} from '../../utility/constants';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-5 bg-[#FF5500]">

            <div className="flex flex-col lg:flex-row items-start gap-10 space-y-50 lg:space-y-70 mb-20 lg:mb-0">
                <div className="flex-1 max-h-[10px] lg:max-h-full">
                    <motion.h2 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[40px] lg:text-[70px] md:text-[70px] sm:text-[50px] font-bold text-black leading-tight"
                    >
                        Discover my projects and see the <span className="hidden sm:inline"><br /></span>
                        story of each works.
                    </motion.h2>
                </div>
                <div className="flex-shrink-0 self-start lg:self-start md:mt-15">
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="bg-black text-white 2xl:text-2xl text-xl px-10 py-5 rounded-r-full lg:rounded-r-none lg:rounded-l-full font-semibold"
                    >
                        sebastian
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 lg:mb-80">
                <motion.p 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="text-white text-xl md:text-2xl lg:max-w-[48vw]"
                >
                    Every layout, interaction, and pixel is thoughtfully designed to create seamless experiences that engage users and bring ideas to life. I focus on usability and visual clarity to deliver solutions that solve problems and elevate brands.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-10 mb-50">
                <div className="lg:row-span-2 flex justify-center h-full">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        src={IMAGES.profile}
                        alt="Sebastian"
                        className="rounded-xl border-9 border-black max-w-4xl w-full object-cover"
                    />
                </div>

                <div className="flex justify-center lg:justify-end lg:mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="text-[3rem] lg:text-[9rem] text-black"
                    >
                        About me
                    </motion.h2>
                </div>

                <div className="text-xl md:text-2xl lg:text-2xl text-white leading-relaxed text-justify">
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        I'm a passionate Graphic Designer, Web Designer and UI/UX enthusiast with expertise in crafting engaging and user-friendly digital experiences. Through my projects and internships, I’ve developed expertise in crafting designs that blend creativity with functionality, using tools like Adobe Photoshop, Figma, and modern web technologies. From crafting user-friendly interfaces to coding responsive designs, I thrive on creating solutions that not only look good but also work seamlessly. My journey in Graphic and Web Design has equipped me with the tools and mindset to tackle challenges and deliver results that leave a lasting impression.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};


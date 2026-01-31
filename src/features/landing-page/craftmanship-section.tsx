"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CraftmanshipSection() {
  const features = [
    {
      title: "Carefully Curated Network",
      description:
        "Artisans are selected for skill, experience, and professionalism.",
    },
    {
      title: "Quality-First Platform",
      description: "Artisyn prioritizes results, not volume.",
    },
    {
      title: "Trust at Every Step",
      description:
        "Clear expectations, accountability, and consistent standards.",
    },
  ];

  return (
    <section className="max-w-268 mx-auto pt-16 md:pt-35 px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-[48px] font-bold text-black max-w-full md:w-lg leading-tight"
      >
        Built Around Craftsmanship
      </motion.p>

      <div className="flex flex-col md:flex-row mt-8 md:mt-12 gap-8 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-lg"
        >
          <Image
            src={"/images/craftm.png"}
            alt="craft"
            width={500}
            height={500}
            className="w-full md:w-132 h-auto md:h-153.75 rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          className="text-black space-y-6 md:space-y-9"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="cursor-default"
            >
              <p className="font-bold text-xl md:text-[24px]">
                {feature.title}
              </p>
              <p className="text-base md:text-[18px] text-[#6B6878] pt-1 leading-tight max-w-full md:w-89">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

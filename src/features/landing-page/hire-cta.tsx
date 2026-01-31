"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HireCTA() {
  return (
    <section className="px-1 py-20 sm:py-35">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-96 md:h-159.5 overflow-hidden rounded-xl relative group"
      >
        <div className="bg-linear-to-b from-[#00000000] to-[#000000] h-full w-full absolute inset-0 z-10" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={"/images/hire-bg.jpg"}
            alt="bg"
            width={500}
            height={500}
            className="w-full h-full object-cover object-[72%_28%]"
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
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="absolute text-white bottom-0 left-1/2 -translate-x-1/2 text-center pb-8 md:pb-15 space-y-4 md:space-y-8 px-4 w-full z-20"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-[56px] max-w-full md:w-121 mx-auto font-bold leading-tight"
          >
            Ready to Hire With Confidence?
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base md:text-[18px] max-w-full md:w-85 mx-auto leading-tight"
          >
            Get a professional artisan working with you in few minutes
          </motion.p>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-[#605DEC] px-6 py-3 rounded-xl hover:bg-[#3d3ae7] transition shadow-lg hover:shadow-xl"
          >
            Find a Trusted Artisan
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

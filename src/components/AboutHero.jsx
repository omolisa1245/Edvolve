"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutHero() {
  return (
    <section className="bg-[#303030] -mt-23 pb-23 pt-55 overflow-hidden">

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="relative flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Gold Ring */}
            <motion.div
              variants={zoomIn}
              className="absolute w-[430px] h-[430px] border-2 border-[#b9a443] rounded-full top-5 left-10"
            />

            {/* Main Image */}
            <motion.div
              variants={zoomIn}
              className="relative w-[450px] h-[450px] rounded-full overflow-hidden"
            >
              <Image
                src="/edu6.jpeg"
                alt="Edvolve Foundation"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Small Image */}
            <motion.div
              variants={zoomIn}
              className="absolute bottom-0 left-10 w-[170px] h-[170px] rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <Image
                src="/edu1.jpeg"
                alt="Community Impact"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Play Button */}
            <motion.button
              variants={zoomIn}
              className="absolute top-32 left-16 bg-red-500 w-24 h-24 rounded-xl flex items-center justify-center shadow-xl"
            >
              <Play className="text-white w-10 h-10 fill-white" />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              custom={1}
              className="text-[#d8be4c] font-medium uppercase tracking-wider"
            >
              Welcome to Edvolve Foundation
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-5xl font-bold text-gray-50 mt-3 leading-tight"
            >
              Empowering Change,
              <br />
              Inspiring Impact
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-gray-50 mt-6 leading-8"
            >
              Edvolve Foundation discovers, supports and facilitates solutions
              that transform lives through education, human capital development
              and social change.
            </motion.p>

            {/* Highlight Box */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="bg-gray-100 border-l-4 border-[#b9a443] p-5 rounded-md mt-8"
            >
              <p className="text-gray-700">
                We are creating a community where ordinary people do
                extraordinary things through education, civic engagement and
                sustainable development.
              </p>
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={5}
              className="mt-10 bg-[#b9a443] hover:bg-[#948232] cursor-pointer text-white px-8 py-4 rounded-md font-semibold transition"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import React from "react";
import ShuffleCard from "./ShuffleCardsGrid";
import { NavHashLink } from "react-router-hash-link";
export default function Grid() {
  return (
    <div id="home" className=" w-screen h-fit relative bg-orange-500 font-mono">
      <section className=" w-full grid grid-cols-5 md:grid-cols-12 h-screen overflow-y-clip">
        {Array.from(Array(20 * 12), (i, index) => (
          <motion.div
            key={index}
            className=" aspect-square bg-red-500 border border-orange-200 "
            whileHover={{ backgroundColor: "#B15EFF" }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        ))}
      </section>
      <div className=" flex flex-col h-fit lg:flex-row justify-between lg:items-center lg:justify-evenly pointer-events-none absolute inset-0 gap-5 overflow-hidden px-6">
        <div
          className=" flex flex-col h-[100vh] items-center lg:items-start justify-center pointer-events-none lg:w-[35vw] gap-2 md:gap-3 lg:pt-0
         "
        >
          <motion.h1
            className=" text-2xl text-neutral-200 pointer-events-none"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            Welcome to👋 ,
          </motion.h1>
          <motion.h1
            className=" text-4xl text-center lg:text-left z-[999] whitespace-nowrap md:text-wrap lg:text-nowrap md:text-6xl font-bold  pointer-events-none md:leading-[70px] bg-gradient-to-r from-purple-600 via-white to-blue-400 text-transparent ... bg-clip-text"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            Parindeyy Wings Of <br /> Imagination
          </motion.h1>
          <motion.p
            className=" w-[90vw] lg:w-[35vw] text-slate-500 text-md text-center lg:text-justify pointer-events-none hometext "
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {/* "Parindeyy Studioz brings your vision to life with exceptional event
            planning, mesmerizing cultural dance performances, and top-notch
            film production services. Let us create unforgettable moments for
            your special occasions!" */}
            Parindey wings of imagination is working since 2015 in the field of
            art and culture in haryana. our proceedings are always towards
            entertainment art and audience targeted. we perform instruct and
            organize events. We are grant-winning industry pioneers giving the
            executives complete gathering, event coordination and inventing
            generation. We offer key direction and program to the board from
            idea to conveyance to Pwoi organisation.
          </motion.p>
          <button
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.9 }}
            // transition={{ type: "spring", stiffness: 400, damping: 17 }}
            data-aos="fade-right"
            data-aos-duration="2000"
            className=" hover:scale-110 duration-300 text-neutral-100 rounded-full text-xl md:text-3xl bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto"
          >
            <NavHashLink to={"/#features"}>Explore Now </NavHashLink>
          </button>{" "}
        </div>
        {/* <ShuffleCard /> */}
      </div>
    </div>
  );
}

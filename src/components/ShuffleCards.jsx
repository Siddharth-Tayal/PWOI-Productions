import { motion } from "framer-motion";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
export default function Grid() {
  return (
    <div id="home" className=" w-screen h-fit relative bg-blue-500 font-mono">
      <section className=" w-full grid grid-cols-5 md:grid-cols-12 h-screen overflow-y-clip">
        {Array.from(Array(50 * 12), (i, index) => (
          <motion.div
            key={index}
            className=" aspect-square bg-blue-500 border border-blue-400 "
            whileHover={{ backgroundColor: "#B15EFF" }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        ))}
      </section>
      <div
        className=" flex flex-col h-[100vh] w-screen  absolute inset-0 text-white items-center justify-center pointer-events-none gap-2 md:gap-3 lg:pt-0
         "
      >
        <h1
          className=" text-2xl pointer-events-none"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          Welcome to👋 ,
        </h1>
        <h1
          className=" text-4xl text-center  z-[999] whitespace-nowrap md:text-wrap lg:text-nowrap md:text-6xl font-bold  pointer-events-none md:leading-[70px]"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          Parindeyy Wings Of <br /> Imagination
        </h1>
        <p
          className=" w-[90vw] lg:w-[55vw]  text-md text-center pointer-events-none hometext "
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          Parindey wings of imagination is working since 2015 in the field of
          art and culture in haryana. our proceedings are always towards
          entertainment art and audience targeted. we perform instruct and
          organize events. We are grant-winning industry pioneers giving the
          executives complete gathering, event coordination and inventing
          generation. We offer key direction and program to the board from idea
          to conveyance to Pwoi organisation.
        </p>
        <button
          data-aos="fade-right"
          data-aos-duration="2000"
          className=" hover:scale-110 duration-300 text-neutral-100 rounded-full text-xl md:text-3xl bg-orange-500 px-10 py-3 border border-white pointer-events-auto"
        >
          <NavHashLink to={"/#features"}>Explore Now </NavHashLink>
        </button>{" "}
      </div>
    </div>
  );
}

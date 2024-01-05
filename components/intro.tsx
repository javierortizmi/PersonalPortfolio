"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import photo from "@/public/photo.jpg";

export default function Intro() {
  return (
    <section className="mb-20 md:mb-0">
      <div className="flex items-center justify-start">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={photo}
              alt="Javier portrait"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-lg font-medium !leading-normal sm:text-xl md:text-2xl lg:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Javier.</span> I&apos;m
        a&nbsp;
        <span className="font-bold">full-stack developer</span> with&nbsp;
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is&nbsp;
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col w-full md:flex-row items-center justify-center gap-2 md:gap-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group h-12 w-56 md:w-auto bg-gray-900 text-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black border-opacity-20"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <Link
          href="https://www.linkedin.com/in/javierortizmi"
          target="_blank"
          className="h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-100 transition border border-black border-opacity-20"
        >
          <BsLinkedin className="w-4 h-4 text-[#0A66C2]" />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/javierortizmi"
          target="_blank"
          className="h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-100 transition border border-black border-opacity-20"
        >
          <FaGithubSquare className="w-5 h-5 text-[#181717]" />
          GitHub
        </Link>
      </motion.div>
    </section>
  );
}

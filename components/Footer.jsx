"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { TypingText, TitleText } from "./customText";
import { socials } from "@/data/index";

import StartSteps from "./StartSteps";
import NewFeatures from "./NewFeatures";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="md:text-[64px] text-[44px] font-bold text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center 
          bg-[#25618b] rounded-[32px] py-4 px-6 gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="text-white w-[24px] h-[24px] object-contain "
            />
            <span className="text-white font-normal text-[16px]">
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className="flex flex-col ">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h4 className="text-white text-[24px] font-extrabold">METAVERUS</h4>
            <p className="text-white opacity-50 text-[14px] font-normal">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

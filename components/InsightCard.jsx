"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      viewport={{once: false, amount: 0.25}}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt="plant-01"
        className="md:w-[270px] h-[250px] w-full 
      rounded-[32px] object-cover"
      />
      <div className=" w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] ">
          <h4 className="lg:text-[42px] text-[26px] text-white font-normal ">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px]">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;

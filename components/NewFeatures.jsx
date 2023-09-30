"use client";

import { motion } from "framer-motion";
import styles from "@/styles";

const NewFeatures = ({ subtitle, title, imgUrl }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[60px] rounded-[24px] bg-[#323f5d]`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">Title {title}</h1>
      <p className="flex-1 mt-[16px] text-normal text-[18px] leading-[32px] text-[#b0b0b0]">{subtitle}</p>
    </div>
  );
};

export default NewFeatures;

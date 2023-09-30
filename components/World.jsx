"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TypingText, TitleText } from "./customText";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative flex w-full mt-[68px] h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[10%] left-1/2  w-[180px] h-[136px] p-[6px] rounded-[24px] bg-[#5d6680] ">
          <img
            src="/1624 2.png"
            alt="plant"
            className="w-full h-full object-cover rounded-[24px]"
          />

          <div className="absolute w-[24px] h-[24px] top-1/2 left-[10%] z-10 ">
            <img src="/Ellipse 44.png" alt="people" />
          </div>
          <div className="absolute w-[24px] h-[24px] top-1/2 left-[17%] z-[4]">
            <img src="/Ellipse 43.png" alt="people" />
          </div>
          <div className="absolute w-[24px] h-[24px] top-1/2 left-[22%] ">
            <img src="/Ellipse 42.png" alt="people" />
          </div>
          <p className="absolute text-white font-normal text-[12px] top-1/2 left-[40%] ">
            + 264 has joined
          </p>
          <h6 className="text-white text-[18px] font-[700] absolute bottom-3 left-5">
            Hawkins Labs
          </h6>
        </div>

        <div className="absolute bottom-[25%]  w-[210px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <div className="relative w-full h-full overflow-hidden rounded-[24px] ">
            <img
              src="/planet-02.png"
              alt="people"
              className=" absolute w-full h-full object-cover scale-150"
            />

            <div className="absolute w-[24px] h-[24px] top-1/2 left-[10%] z-10 ">
              <img src="/Ellipse 44.png" alt="people" />
            </div>
            <div className="absolute w-[24px] h-[24px] top-1/2 left-[17%] z-[4]">
              <img src="/Ellipse 43.png" alt="people" />
            </div>
            <div className="absolute w-[24px] h-[24px] top-1/2 left-[22%] ">
              <img src="/Ellipse 42.png" alt="people" />
            </div>
            <p className="absolute text-white font-normal text-[12px] top-1/2 left-[40%] ">
              + 264 has joined
            </p>
            <h6 className="text-white text-[18px] font-[700] absolute bottom-3 left-5">
              The Upside Down
            </h6>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default World;

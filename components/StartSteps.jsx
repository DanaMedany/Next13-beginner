import styles from "@/styles";

const StartSteps = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} `}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px]
      bg-[#323f5d]`}
      >
        <p className="font-bold text-white text-[20px]">0{number}</p>
      </div>
      <p
        className="ml-[30px] flex-1 font-normal text-[18px] text-[#B0B0B0] 
      leading-[32px]"
      >
        {text}
      </p>
    </div>
  );
};

export default StartSteps;

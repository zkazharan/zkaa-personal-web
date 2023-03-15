import Image from "next/image";
import { useContext } from "react";

import zka from "../public/zka.png";
import { LanguageSwitch } from "./Context";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
export default function MainHead() {
  const { language } = useContext(LanguageSwitch);

  return (
    <div className="text-center p-5 sm:p-10 pb-10">
      <h2 className="text-4xl sm:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl select-none">
        Azka Azharan
      </h2>
      <h3 className="text-lg py-1 sm:text-2xl sm:py-2 dark:text-white md:text-3xl">
        Student and Developer
      </h3>
      <p className="text-xs sm:text-base py-3 sm:py-5 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
        <span className={language === "id" ? "hidden" : ""}>
          As a college student pursuing a degree in software engineering, i am
          constantly seeking new opportunities to learn and grow. I am
          passionate about using my skills and knowledge to create innovative
          solutions and make a positive impact in the world. I am a quick
          learner and always eager to take on new challenges. In my free time, I
          enjoy staying up-to-date with the latest technologies and exploring
          new ways to apply my skills. I am excited to see what the future holds
          and am confident that my passion for software engineering will guide
          me towards a rewarding career.
        </span>
        <span className={language === "en" ? "hidden" : ""}>
          Sebagai mahasiswa perguruan tinggi yang mengejar gelar dalam teknik
          software, saya selalu mencari kesempatan baru untuk belajar dan
          berkembang. Saya sangat antusias untuk menggunakan keterampilan dan
          pengetahuan saya untuk menciptakan solusi inovatif dan membuat dampak
          positif di dunia. Saya adalah pembelajar yang cepat dan selalu
          antusias untuk mengambil tantangan baru. Di waktu luang saya, saya
          senang menjaga diri up-to-date dengan teknologi terbaru dan
          mengeksplorasi cara baru untuk menerapkan keterampilan saya. Saya
          senang melihat apa yang akan terjadi di masa depan dan yakin bahwa
          passion saya untuk teknik software akan membimbing saya menuju karier
          yang memuaskan
        </span>
      </p>
      <div className="text-3xl sm:text-5xl flex justify-center gap-8 sm:gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/zkazharan" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com/in/azka-ahmad-azharan" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/zkazharan" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
      <div className="select-none relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 sm:w-72 sm:h-72 mt-10 mb-10 sm:mt-20 sm:mb-20 overflow-hidden md:w-86 md:h-86">
        <Image
          alt="profile photo"
          src={zka}
          fill
          className="object-cover"
          draggable="false"
        />
      </div>
    </div>
  );
}

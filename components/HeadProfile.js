import Image from "next/image";

import zka from "../public/zka.png";

export default function HeadProfile() {
  return (
    <section className="py-20">
      <div className="select-none relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 mb-2 sm:mb-4 overflow-hidden">
        <Image
          alt="profile photo"
          src={zka}
          fill
          className="object-cover"
          draggable="false"
        />
      </div>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 select-none">
        Azka Azharan
      </h2>
    </section>
  );
}

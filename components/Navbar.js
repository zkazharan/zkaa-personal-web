import Link from "next/link";
import { useContext } from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { DarkMode, LanguageSwitch } from "../components/Context";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const { language, languageHandle } = useContext(LanguageSwitch);

  return (
    <nav className="bg-white px-12 sm:px-10 md:px-20 lg:px-40 py-10 flex justify-between dark:bg-gray-900 dark:text-white">
      <Link href="/">
        <h1 className="font-burtons text-xl select-none">zkaa</h1>
      </Link>
      <ul className="flex items-center gap-8 sm:gap-12">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <h1
            className="font-burtons text-2xl select-none cursor-pointer"
            onClick={languageHandle}
          >
            {language}
          </h1>
        </li>
      </ul>
    </nav>
  );
}

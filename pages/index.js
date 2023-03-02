import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import zka from "../public/zka.png";
import { LanguageSwitch } from "../components/Context";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  const { language } = useContext(LanguageSwitch);

  return (
    <>
      <Head>
        <title>Zkaa Personal Web</title>
        <meta name="description" content="Personal web for collage use" />
        <link rel="icon" href="/zka-icon.png" />
      </Head>

      <main className="bg-white px-8 sm:px-10 md:px-20 lg:px-40 pt-2 sm:pt-12 pb-10 sm:pb-20 dark:bg-gray-900">
        <section>
          <div className="text-center p-5 sm:p-10 pb-10">
            <h2 className="text-4xl sm:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl select-none">
              Azka Azharan
            </h2>
            <h3 className="text-lg py-1 sm:text-2xl sm:py-2 dark:text-white md:text-3xl">
              Student and Developer
            </h3>
            <p className="text-xs sm:text-base py-3 sm:py-5 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
              <span className={language === "id" ? "hidden" : ""}>
                As a college student pursuing a degree in software engineering,
                i am constantly seeking new opportunities to learn and grow. I
                am passionate about using my skills and knowledge to create
                innovative solutions and make a positive impact in the world. I
                am a quick learner and always eager to take on new challenges.
                In my free time, I enjoy staying up-to-date with the latest
                technologies and exploring new ways to apply my skills. I am
                excited to see what the future holds and am confident that my
                passion for software engineering will guide me towards a
                rewarding career.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Sebagai mahasiswa perguruan tinggi yang mengejar gelar dalam
                teknik software, saya selalu mencari kesempatan baru untuk
                belajar dan berkembang. Saya sangat antusias untuk menggunakan
                keterampilan dan pengetahuan saya untuk menciptakan solusi
                inovatif dan membuat dampak positif di dunia. Saya adalah
                pembelajar yang cepat dan selalu antusias untuk mengambil
                tantangan baru. Di waktu luang saya, saya senang menjaga diri
                up-to-date dengan teknologi terbaru dan mengeksplorasi cara baru
                untuk menerapkan keterampilan saya. Saya senang melihat apa yang
                akan terjadi di masa depan dan yakin bahwa passion saya untuk
                teknik software akan membimbing saya menuju karier yang
                memuaskan
              </span>
            </p>
            <div className="text-3xl sm:text-5xl flex justify-center gap-8 sm:gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/zkazharan" target="_blank">
                <AiFillGithub />
              </a>
              <a
                href="https://linkedin.com/in/azka-ahmad-azharan"
                target="_blank"
              >
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
        </section>

        <section>
          <div>
            <h3 className="text-xl sm:text-3xl py-1 dark:text-white">
              <span className={language === "id" ? "hidden" : ""}>
                College Project Gallery
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Galeri Proyek Kuliah
              </span>
            </h3>
            <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200">
              <span className={language === "id" ? "hidden" : ""}>
                Highlighting my skills and achievements through a selection of
                my best academic projects and assignments.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Menampilkan keterampilan dan pencapaian dalam tugas dan proyek
                akademik terbaik saya.
              </span>
            </p>
          </div>
          <div className="flex flex-col py-5 sm:py-10">
            <span className="lg:flex lg:gap-8">
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/ubuntu-install-guide">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          In this tutorial, you will learn how to install Ubuntu
                          Server on a virtual machine using VirtualBox.
                          VirtualBox is a powerful and free virtualization
                          software that allows you to run multiple operating
                          systems on a single physical machine. Ubuntu Server is
                          a popular and open-source operating system that is
                          widely used for server applications.
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Dalam tutorial ini, Anda akan belajar cara menginstal
                          Ubuntu Server pada mesin virtual menggunakan
                          VirtualBox. VirtualBox adalah software virtualisasi
                          yang kuat dan gratis yang memungkinkan Anda untuk
                          menjalankan beberapa sistem operasi pada satu mesin
                          fisik. Ubuntu Server adalah sistem operasi populer dan
                          sumber terbuka yang banyak digunakan untuk aplikasi
                          server
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/ubuntu-install/Screenshot(32).png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
              <div className="basis-1/2 relative select-none">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/file-management">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          These are questions and answers about file management
                          from the Operating System course
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Berikut merupakan soal beserta jawaban tentang
                          manajemen file dari mata kuliah sistem operasi
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/file-management/fm-home.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

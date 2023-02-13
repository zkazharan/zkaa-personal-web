import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Collapse } from "@nextui-org/react";

import zka from "../public/zka.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  const languageHandle = () => {
    if (language == "id") {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Azka Azharan Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/zka-icon.png" />
      </Head>

      <main className="bg-white px-7 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="px-4 sm:px-0 py-10 mb-2 sm:mb-12 flex justify-between dark:text-white">
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
          <div className="text-center p-5 sm:p-10 pt-0 pb-10 sm:pt-10">
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
                Step-by-Step Guide to Installing Ubuntu Server on VirtualBox
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Panduan Langkah demi Langkah untuk Menginstal Ubuntu Server di
                VirtualBox
              </span>
            </h3>
            <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 text-justify sm:text-left">
              <span className={language === "id" ? "hidden" : ""}>
                In this tutorial, you will learn how to install Ubuntu Server on
                a virtual machine using VirtualBox. VirtualBox is a powerful and
                free virtualization software that allows you to run multiple
                operating systems on a single physical machine. Ubuntu Server is
                a popular and open-source operating system that is widely used
                for server applications.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Dalam tutorial ini, Anda akan belajar cara menginstal Ubuntu
                Server pada mesin virtual menggunakan VirtualBox. VirtualBox
                adalah software virtualisasi yang kuat dan gratis yang
                memungkinkan Anda untuk menjalankan beberapa sistem operasi pada
                satu mesin fisik. Ubuntu Server adalah sistem operasi populer
                dan sumber terbuka yang banyak digunakan untuk aplikasi server
              </span>
            </p>
          </div>
          <div className="pb-10 sm:pb-40 mt-4 sm:mt-6 flex flex-col gap-4">
            <Collapse.Group accordion={false}>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      1. Download and Install Ubuntu Server and Virtual Box on
                      your machine
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      1. Unduh dan Instal Ubuntu Server dan VirtualBox pada
                      mesin Anda
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(1).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(2).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(3).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(7).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(9).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      2. Open your virtual box and click "Add" to create new
                      virtual machine
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      2. Buka VirtualBox Anda dan klik "Tambah" untuk
                      menciptakan mesin virtual baru
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(10).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      3. Name your virtual machine, choose the folder where you
                      would like to save your virtual machine, and select the
                      previously downloaded Ubuntu Server ISO image for the
                      virtual optical disk
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      3. Beri nama pada mesin virtual Anda, pilih folder tempat
                      Anda ingin menyimpan mesin virtual Anda, dan pilih gambar
                      ISO Ubuntu Server yang sebelumnya sudah diunduh sebagai
                      disk optik virtual
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(11).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      4. Set up the username, password, and hostname for your
                      configuration
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      4. Atur nama pengguna, kata sandi, dan nama host untuk
                      konfigurasi Anda
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(12).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      5. Adjust the RAM, virtual CPU, and virtual hard disk
                      specifications as needed
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      5. Sesuaikan spesifikasi RAM, CPU virtual, dan hard disk
                      virtual sesuai kebutuhan
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(14).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(15).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      6. Review the summary of your configuration before
                      proceeding. After that, log in to your newly installed
                      Ubuntu Server
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      6. Tinjau ringkasan dari konfigurasi Anda sebelum
                      melanjutkan. Setelah itu, masuk ke server Ubuntu baru yang
                      terinstal
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(16).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(18).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      7. Choose your preferred language for the installation
                      process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      7. Pilih bahasa pilihan Anda untuk proses instalasi
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(19).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      8. If you are not using the latest version, the
                      installation process may offer updates, which are optional
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      8. Jika Anda tidak menggunakan versi terbaru, proses
                      instalasi mungkin menawarkan pembaruan, yang merupakan
                      opsional
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(20).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      9. Configure the keyboard layout for your installation
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      9. Konfigurasikan tata letak keyboard untuk proses
                      instalasi
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(21).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      10. Establish the network connections for your
                      installation environment
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      10. Tentukan koneksi jaringan sesuai kebutuhan
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(22).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      11. If you have a proxy server, enter to that column
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      11. Jika Anda memiliki server proxy, masukkan pada kolom
                      tersebut
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(23).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      12. Choose to either have a guided storage layout or
                      create a custom one, and configure the storage settings
                      accordingly
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      12. Pilih untuk memiliki tata letak penyimpanan yang
                      dipandu atau membuat yang baru, dan konfigurasi pengaturan
                      penyimpanan sesuai yang dibutuhkan
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(24).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(25).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      13. Configure your profile settings
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      13. Konfigurasikan pengaturan profil Anda
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(27).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      14. Optionally, set up SSH for secure remote access
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      14. Secara opsional, atur SSH untuk akses jarak jauh yang
                      aman
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(28).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      15. Select and install the popular snaps that you would
                      like to have on your server environment
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      15. Pilih dan instal snap populer yang ingin kamu miliki
                      di lingkungan servermu
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(29).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      16. Wait for the system to complete the installation
                      process and then reboot when finished
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      16. Tunggu sampai proses instalasi selesai dan reboot
                      ketika selesai
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(30).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(31).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      17. After reboot is completed, you will be directed to the
                      login screen of your Ubuntu Server. Use the username and
                      password that you set up during the installation process
                      to log in
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      17. Setelah proses reboot selesai, Anda akan dialihkan ke
                      layar login dari server Ubuntu Anda. Gunakan username dan
                      password yang Anda buat selama proses instalasi untuk
                      masuk
                    </span>
                  </h3>
                }
              >
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(33).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
                <Image
                  className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                  src="/ubuntu-install/Screenshot(34).png"
                  alt="image"
                  width={1920}
                  height={1080}
                  draggable="false"
                />
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      18. And that's it! Your Ubuntu Server is now fully
                      installed and ready to use on VirtualBox.
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      18. Dan selesai! Server Ubuntu Anda sekarang sudah
                      terinstall secara penuh dan siap digunakan pada
                      VirtualBox.
                    </span>
                  </h3>
                }
              >
                <div className="flex flex-wrap md:flex-nowrap">
                  <Image
                    className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                    src="/ubuntu-install/thankyou(1).jpg"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                  <Image
                    className="pointer-events-none sm:pl-4 pt-2 sm:pt-3 sm:pr-8"
                    src="/ubuntu-install/thankyou(2).jpg"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                </div>
              </Collapse>
            </Collapse.Group>
          </div>
        </section>
      </main>
    </div>
  );
}
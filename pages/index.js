import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import MainHead from "../components/MainHead";
import { LanguageSwitch } from "../components/Context";

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
          <MainHead />
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
          <div className="flex flex-col py-5 sm:py-10 lg:gap-8">
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
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0">
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
            <span className="lg:flex lg:gap-8">
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 border-solid border-2 border-white rounded-lg">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/latihan1-pemrograman-web/biodata">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          This biodata page contains information about me as a
                          student and an individual
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Halaman biodata ini berisi informasi tentang saya
                          sebagai mahasiswa dan individu
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/latihan1-web/l1-web-1.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 border-solid border-2 border-white rounded-lg">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/latihan1-pemrograman-web/register">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          This page displays a form that users need to fill out
                          to create a new account on the website. The form
                          includes fields such as full name, user name,
                          password, and password confirmation
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Halaman ini menampilkan formulir yang harus diisi oleh
                          pengguna untuk membuat akun baru pada website.
                          Formulir tersebut berisi field seperti nama lengkap,
                          nama pengguna, password, dan konfirmasi password
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/latihan1-web/l1-web-2.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
            </span>
            <span className="lg:flex lg:gap-8">
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 border-solid border-2 border-white rounded-lg">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/latihan1-pemrograman-web/login">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          This page displays a form that users need to fill out
                          to log into their account on the website. The form
                          includes fields such as username and password
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Halaman ini menampilkan form yang harus diisi oleh
                          pengguna untuk masuk ke dalam akun pada website. Form
                          tersebut berisi field seperti nama pengguna dan
                          password
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/latihan1-web/l1-web-3.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 border-solid border-2 border-white rounded-lg">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/process-and-thread">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          These are questions and answers about processes and
                          threads from the Operating System course
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Berikut merupakan soal beserta jawaban tentang proses
                          dan thread dari mata kuliah sistem operasi
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/pnt/pnt-cover.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
            </span>
            <span className="lg:flex lg:gap-8">
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 border-solid border-2 border-white rounded-lg">
                <div className="absolute w-full h-full bg-gray-800/0 hover:bg-gray-800/90 rounded-lg ease-in duration-200 p-1">
                  <Link href="/concurrency">
                    <div className="w-full h-full opacity-0 hover:opacity-100 p-10">
                      <p className="text-center w-full h-full text-gray-200 flex justify-center items-center text-xs sm:text-base md:text-xl lg:text-xs xl:text-sm font-medium">
                        <span className={language === "id" ? "hidden" : ""}>
                          These are questions and answers about Concurrency from
                          the Operating System course
                        </span>
                        <span className={language === "en" ? "hidden" : ""}>
                          Berikut merupakan soal beserta jawaban tentang
                          Konkurensi dari mata kuliah sistem operasi
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
                <Image
                  src="/concurrency/c1.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  responsive="true"
                />
              </div>
              <div className="basis-1/2 relative select-none mb-4 lg:mb-0 rounded-lg"></div>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

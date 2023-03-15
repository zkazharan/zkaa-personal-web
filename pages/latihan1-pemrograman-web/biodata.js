import Head from "next/head";

import { useContext } from "react";
import MainHead from "../../components/MainHead";
import { LanguageSwitch } from "../../components/Context";

export default function Biodata() {
  const { language } = useContext(LanguageSwitch);

  return (
    <>
      <Head>
        <title>Personal Information</title>
        <meta
          name="description"
          content="Tugas untuk Mata Kuliah Pemrograman Web RPL 4A"
        />
        <link rel="icon" href="/zka-icon.png" />
      </Head>
      <main className="bg-white px-8 sm:px-10 md:px-20 lg:px-40 pt-2 sm:pt-12 pb-10 sm:pb-20 dark:bg-gray-900">
        <section>
          <MainHead />
        </section>
        <section className="pb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 select-none mb-4">
            <span className={language === "id" ? "hidden" : ""}>
              My Personal Information
            </span>
            <span className={language === "en" ? "hidden" : ""}>
              Data Diri Saya
            </span>
          </h3>
          <div className="text-sm sm:text-base md:text-lg py-1 sm:py-2 dark:text-white">
            <div className="flex justify-start gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    Full Name
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Nama Lengkap
                  </span>
                </div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    Student ID
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>NIM</span>
                </div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    Study Program
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Program Studi
                  </span>
                </div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    University
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Universitas
                  </span>
                </div>
                <div>Email</div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    Phone Number
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Nomor Ponsel
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>: Azka Ahmad Azharan</div>
                <div>: 2101284</div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    : Software Engineering
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    : Rekayasa Perangkat Lunak
                  </span>
                </div>
                <div>
                  <span className={language === "id" ? "hidden" : ""}>
                    : Indonesian University of Education
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    : Universitas Pendidikan Indonesia
                  </span>
                </div>
                <div>: azka.azharan@upi.edu</div>
                <div>: +62 857-7752-1396</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

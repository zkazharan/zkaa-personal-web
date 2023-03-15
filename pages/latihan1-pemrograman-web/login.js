import Head from "next/head";
import Link from "next/link";

import { useContext, useState } from "react";
import { LanguageSwitch } from "../../components/Context";

export default function Login() {
  const { language } = useContext(LanguageSwitch);

  const [form, setForm] = useState({
    uname: "",
    pass: "",
  });

  const [warning, setWarning] = useState("");

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta
          name="description"
          content="Tugas untuk Mata Kuliah Pemrograman Web RPL 4A"
        />
        <link rel="icon" href="/zka-icon.png" />
      </Head>
      <main className="bg-white px-8 sm:px-10 md:px-20 lg:px-40 pt-2 sm:pt-12 pb-10 sm:pb-20 dark:bg-gray-900 h-[calc(100vh-112px)] flex justify-center">
        <div className="dark-card-shadow w-[300px] md:w-[400px] rounded-lg h-fit py-6 px-8 md:px-12">
          <h1 className="text-center text-white font-poppinsR text-sm md:text-lg mb-6">
            <span className={language === "id" ? "hidden" : ""}>Login to </span>
            <span className={language === "en" ? "hidden" : ""}>Masuk ke </span>
            <strong>Zkaa</strong>
          </h1>
          <input
            className="w-full bg-transparent border-solid border-[1px] focus:border-[2px] border-gray-700 hover:border-blue-500 focus:border-blue-500 outline-none rounded-xl h-10 py-2 px-4 text-white text-sm mb-3 md:mb-4 font-poppinsR"
            type="text"
            placeholder={language === "en" ? "username" : "nama pengguna"}
            autoCorrect="off"
            defaultValue={""}
            value={form.uname}
            onChange={(e) => {
              setForm({ ...form, uname: e.target.value });
              setWarning("");
            }}
          />
          <input
            className="w-full bg-transparent border-solid border-[1px] focus:border-[2px] border-gray-700 hover:border-blue-500 focus:border-blue-500 outline-none rounded-xl h-10 py-2 px-4 text-white text-sm mb-3 md:mb-4 font-poppinsR"
            type="password"
            placeholder={language === "en" ? "password" : "kata sandi"}
            autoCorrect="off"
            defaultValue={""}
            value={form.pass}
            onChange={(e) => {
              setForm({ ...form, pass: e.target.value });
              setWarning("");
            }}
          />
          <Link href="/latihan1-pemrograman-web/register">
            <p className="text-right font-poppinsR text-sm text-white mb-4">
              <span className={language === "id" ? "hidden" : ""}>
                not have an account?
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Belum punya akun?
              </span>
            </p>
          </Link>
          <p
            className={
              "text-center font-poppinsR text-sm mb-4 " +
              (warning === "success" ? "text-green-600" : "text-red-600")
            }
          >
            {language === "en"
              ? warning === "uname"
                ? "Username Can't be Empty"
                : warning === "pass"
                ? "Password Can't be Empty"
                : warning === "success"
                ? "Login Success"
                : ""
              : warning === "uname"
              ? "Nama Pengguna Tidak Boleh Kosong"
              : warning === "pass"
              ? "Kata Sandi Tidak Boleh Kosong"
              : warning === "success"
              ? "Masuk Berhasil"
              : ""}
          </p>
          <div className="flex justify-center">
            <button
              className="font-poppinsR text-gray-200 border-solid border-[2px] hover:border-b-[5px] border-gray-200 px-6 py-3 rounded-xl hover:-translate-y-1 mb-[5px] hover:mb-[2px] select-none"
              onClick={() => {
                if (!form.uname) {
                  setWarning("uname");
                } else if (!form.pass) {
                  setWarning("pass");
                } else {
                  setWarning("success");
                }
              }}
            >
              <span className={language === "id" ? "hidden" : ""}>Login</span>
              <span className={language === "en" ? "hidden" : ""}>Masuk</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

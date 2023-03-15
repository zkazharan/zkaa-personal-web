import Head from "next/head";
import Link from "next/link";

import { useContext, useState } from "react";
import { LanguageSwitch } from "../../components/Context";

export default function Register() {
  const { language } = useContext(LanguageSwitch);

  const [form, setForm] = useState({
    fname: "",
    uname: "",
    pass: "",
    repass: "",
  });

  const [warning, setWarning] = useState("");

  return (
    <>
      <Head>
        <title>Registration Page</title>
        <meta
          name="description"
          content="Tugas untuk Mata Kuliah Pemrograman Web RPL 4A"
        />
        <link rel="icon" href="/zka-icon.png" />
      </Head>
      <main className="bg-white px-8 sm:px-10 md:px-20 lg:px-40 pt-2 sm:pt-12 pb-10 sm:pb-20 dark:bg-gray-900 h-[calc(100vh-112px)] flex justify-center">
        <div className="dark-card-shadow w-[300px] md:w-[400px] rounded-lg h-fit py-6 px-8 md:px-12">
          <h1 className="text-center text-white font-poppinsR text-sm md:text-lg mb-6">
            <span className={language === "id" ? "hidden" : ""}>
              Register to{" "}
            </span>
            <span className={language === "en" ? "hidden" : ""}>
              Daftar ke{" "}
            </span>
            <strong>Zkaa</strong>
          </h1>
          <input
            className="w-full bg-transparent border-solid border-[1px] focus:border-[2px] border-gray-700 hover:border-blue-500 focus:border-blue-500 outline-none rounded-xl h-10 py-2 px-4 text-white text-sm mb-3 md:mb-4 font-poppinsR"
            type="text"
            placeholder={language === "en" ? "full name" : "nama lengkap"}
            autoCorrect="off"
            defaultValue={""}
            value={form.fname}
            onChange={(e) => {
              setForm({ ...form, fname: e.target.value });
              setWarning("");
            }}
          />
          <input
            className="w-full bg-transparent border-solid border-[1px] focus:border-[2px] border-gray-700 hover:border-blue-500 focus:border-blue-500 outline-none rounded-xl h-10 py-2 px-4 text-white text-sm mb-3 md:mb-4 font-poppinsR"
            type="text"
            placeholder={language === "en" ? "user name" : "nama pengguna"}
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
            placeholder={language === "en" ? "new password" : "kata sandi baru"}
            autoCorrect="off"
            defaultValue={""}
            value={form.pass}
            onChange={(e) => {
              setForm({ ...form, pass: e.target.value });
              setWarning("");
            }}
          />
          <input
            className="w-full bg-transparent border-solid border-[1px] focus:border-[2px] border-gray-700 hover:border-blue-500 focus:border-blue-500 outline-none rounded-xl h-10 py-2 px-4 text-white text-sm mb-4 md:mb-6 font-poppinsR"
            type="password"
            placeholder={
              language === "en"
                ? "re-enter password"
                : "masukkan ulang kata sandi"
            }
            autoCorrect="off"
            defaultValue={""}
            value={form.repass}
            onChange={(e) => {
              setForm({ ...form, repass: e.target.value });
              setWarning("");
            }}
          />
          <Link href="/latihan1-pemrograman-web/login">
            <p className="text-right font-poppinsR text-sm text-white mb-4">
              <span className={language === "id" ? "hidden" : ""}>
                have an account?
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Sudah punya akun?
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
              ? warning === "fname"
                ? "Full Name Can't be Empty"
                : warning === "uname"
                ? "Username Can't be Empty"
                : warning === "pass" || warning === "repass"
                ? "Password Can't be Empty"
                : warning === "diffPass"
                ? "Password Can't be Different"
                : warning === "success"
                ? "Registration Success"
                : ""
              : warning === "fname"
              ? "Nama Lengkap Tidak Bolek Kosong"
              : warning === "uname"
              ? "Nama Pengguna Tidak Bolek Kosong"
              : warning === "pass" || warning === "repass"
              ? "Kata Sandi Tidak Bolek Kosong"
              : warning === "diffPass"
              ? "Kata Sandi Tidak Bolek Berbeda"
              : warning === "success"
              ? "Pendaftaran Berhasil"
              : ""}
          </p>
          <div className="flex justify-center">
            <button
              className="font-poppinsR text-gray-200 border-solid border-[2px] hover:border-b-[5px] border-gray-200 px-6 py-3 rounded-xl hover:-translate-y-1 mb-[5px] hover:mb-[2px] select-none"
              onClick={() => {
                if (!form.fname) {
                  setWarning("fname");
                } else if (!form.uname) {
                  setWarning("uname");
                } else if (!form.pass) {
                  setWarning("pass");
                } else if (!form.repass) {
                  setWarning("repass");
                } else if (form.pass !== form.repass) {
                  setWarning("diffPass");
                } else {
                  setWarning("success");
                }
              }}
            >
              <span className={language === "id" ? "hidden" : ""}>
                Register
              </span>
              <span className={language === "en" ? "hidden" : ""}>Daftar</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

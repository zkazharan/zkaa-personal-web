import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { Collapse } from "@nextui-org/react";

import HeadProfile from "../components/HeadProfile";
import { LanguageSwitch } from "../components/Context";

export default function Management() {
  const { language } = useContext(LanguageSwitch);

  return (
    <>
      <Head>
        <title>TP2 Sistem Operasi</title>
        <meta
          name="description"
          content="How to install ubuntu server on virtual box"
        />
        <link rel="icon" href="/zka-icon.png" />
      </Head>

      <main className="bg-white px-7 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <HeadProfile />
        <section>
          <div>
            <h3 className="text-xl sm:text-3xl py-1 dark:text-white">
              <span className={language === "id" ? "hidden" : ""}>
                File Management
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Manajemen File
              </span>
            </h3>
            <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 text-justify sm:text-left">
              <span className={language === "id" ? "hidden" : ""}>
                These are questions and answers about file management from the
                Operating System course.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Berikut merupakan soal beserta jawaban tentang manajemen file
                dari mata kuliah sistem operasi.
              </span>
            </p>
          </div>
          <div className="pb-10 sm:pb-40 mt-4 sm:mt-6 flex flex-col gap-4">
            <Collapse.Group accordion={false}>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      1. Why do we need file management?
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      1. Mengapa kita membutuhkan manajemen file?
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4">
                    File management is a system for organizing and managing
                    files on a computer or software that aims to facilitate
                    access, use, and storage of files. We need file management
                    because:
                  </p>
                  <ul className="[&>*]:text-gray-800 [&>*]:dark:text-gray-200 [&>*]:text-justify pl-8">
                    <li>
                      1. Increase efficiency: With good file management, we can
                      easily find, open, and edit the files we need, thus
                      improving efficiency in working.
                    </li>
                    <li>
                      2. Save time: Good file management can also help us save
                      time. For example, we can create folders to store certain
                      types of files, so we no longer need to search for
                      scattered files in various folders.
                    </li>
                    <li>
                      3. Improve security: File management can also help improve
                      file security. By setting access permissions on files or
                      folders, we can restrict access by certain users to
                      specific files.
                    </li>
                    <li>
                      4. Avoid data loss: With good file management, we can
                      avoid losing important data. For example, we can create
                      regular file backups to prevent data loss due to hard disk
                      damage or other accidents.
                    </li>
                    <li>
                      5. Reduce errors: Good file management can also help
                      reduce errors that occur due to negligence or carelessness
                      in organizing files. By organizing files regularly, we can
                      avoid mistakes such as editing or deleting the wrong file.
                    </li>
                  </ul>
                  <p className="text-gray-800 dark:text-gray-200 mt-4">
                    Overall, file management is essential to ensure that our
                    files are well-organized, easily accessible, and secure from
                    data damage or loss.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4">
                    Manajemen file adalah suatu sistem pengaturan dan
                    pengorganisasian file dalam komputer atau perangkat lunak
                    yang bertujuan untuk mempermudah akses, penggunaan, dan
                    penyimpanan file. Kita butuh manajemen file karena:
                  </p>
                  <ul className="[&>*]:text-gray-800 [&>*]:dark:text-gray-200 [&>*]:text-justify pl-8">
                    <li>
                      1. Meningkatkan efisiensi: Dengan manajemen file yang
                      baik, kita dapat dengan mudah menemukan, membuka, dan
                      mengedit file yang kita butuhkan, sehingga dapat
                      meningkatkan efisiensi dalam bekerja.{" "}
                    </li>
                    <li>
                      2. SMenghemat waktu: Manajemen file yang baik juga dapat
                      membantu kita menghemat waktu. Misalnya, kita dapat
                      membuat folder untuk menyimpan jenis file tertentu,
                      sehingga kita tidak perlu lagi mencari file yang tercecer
                      di berbagai folder.
                    </li>
                    <li>
                      3. Meningkatkan keamanan: Manajemen file juga dapat
                      membantu meningkatkan keamanan file. Dengan mengatur izin
                      akses pada file atau folder, kita dapat membatasi akses
                      pengguna tertentu pada file tertentu.
                    </li>
                    <li>
                      4. Menghindari kehilangan data: Dengan manajemen file yang
                      baik, kita dapat menghindari kehilangan data yang penting.
                      Misalnya, kita dapat membuat backup file secara teratur
                      untuk mencegah hilangnya data akibat kerusakan pada hard
                      disk atau kecelakaan lainnya.
                    </li>
                    <li>
                      5. Mengurangi kesalahan: Manajemen file yang baik juga
                      dapat membantu mengurangi kesalahan yang terjadi akibat
                      kelalaian atau kecerobohan dalam mengorganisasikan file.
                      Dengan mengatur file secara teratur, kita dapat
                      menghindari kesalahan seperti mengedit atau menghapus file
                      yang salah.
                    </li>
                  </ul>
                  <p className="text-gray-800 dark:text-gray-200 mt-4">
                    Secara keseluruhan, manajemen file sangat penting untuk
                    memastikan bahwa file kita terorganisir dengan baik, mudah
                    diakses, dan aman dari kerusakan atau kehilangan data.
                  </p>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      2. Difference between FAT and NTFS
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      2. Perbedaan antara FAT dan NTFS
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <table className="w-full border-2 border-solid border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200">
                    <thead className="bg-gray-300 dark:bg-gray-700 [&>*>*]:border-[1px] [&>*>*]:border-solid [&>*>*]:border-gray-800 [&>*>*]:dark:border-gray-200 [&>*>*]:px-4 [&>*>*]:py-2">
                      <tr className="border-2 border-solid border-gray-800 dark:border-gray-200 font-semibold">
                        <td>Criteria</td>
                        <td>FAT</td>
                        <td>NTFS</td>
                      </tr>
                    </thead>
                    <tbody className="[&>*>*]:border-[1px] [&>*>*]:border-solid [&>*>*]:border-gray-800 [&>*>*]:dark:border-gray-200 [&>*>*]:px-4 [&>*>*]:py-1">
                      <tr>
                        <td>Abbreviation</td>
                        <td>File Allocation Table</td>
                        <td>New Technology File System</td>
                      </tr>
                      <tr>
                        <td>Introduced in Year</td>
                        <td>1977</td>
                        <td>1993</td>
                      </tr>
                      <tr>
                        <td>File System</td>
                        <td>32 bit (FAT32)</td>
                        <td>32 dan 64 bit</td>
                      </tr>
                      <tr>
                        <td>Access Speed</td>
                        <td>Low</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>Security Level</td>
                        <td>Low</td>
                        <td>High</td>
                      </tr>
                      <tr>
                        <td>File Fragmentation</td>
                        <td>High</td>
                        <td>Low</td>
                      </tr>
                      <tr>
                        <td>Deleted File Recovery</td>
                        <td>Not Support</td>
                        <td>Support</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <table className="w-full border-2 border-solid border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200">
                    <thead className="bg-gray-300 dark:bg-gray-700 [&>*>*]:border-[1px] [&>*>*]:border-solid [&>*>*]:border-gray-800 [&>*>*]:dark:border-gray-200 [&>*>*]:px-4 [&>*>*]:py-2">
                      <tr className="border-2 border-solid border-gray-800 dark:border-gray-200 font-semibold">
                        <td>Kriteria</td>
                        <td>FAT</td>
                        <td>NTFS</td>
                      </tr>
                    </thead>
                    <tbody className="[&>*>*]:border-[1px] [&>*>*]:border-solid [&>*>*]:border-gray-800 [&>*>*]:dark:border-gray-200 [&>*>*]:px-4 [&>*>*]:py-1">
                      <tr>
                        <td>Kepanjangan</td>
                        <td>File Allocation Table</td>
                        <td>New Technology File System</td>
                      </tr>
                      <tr>
                        <td>Tahun Diperkenalkan</td>
                        <td>1977</td>
                        <td>1993</td>
                      </tr>
                      <tr>
                        <td>Sistem File</td>
                        <td>16 bit</td>
                        <td>32 dan 64 bit</td>
                      </tr>
                      <tr>
                        <td>Kecepatan Akses</td>
                        <td>Rendah</td>
                        <td>Tinggi</td>
                      </tr>
                      <tr>
                        <td>Tingkat Keamanan</td>
                        <td>Rendah</td>
                        <td>Tinggi</td>
                      </tr>
                      <tr>
                        <td>Fragmentasi File</td>
                        <td>Tinggi</td>
                        <td>Rendah</td>
                      </tr>
                      <tr>
                        <td>Pemulihan File Terhapus</td>
                        <td>Tidak Mendukung</td>
                        <td>Mendukung</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      3. What is tree-structured directory and acyclic-graph
                      directory?
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      3. Apa itu tree-structured direktori dan acyclic-graph
                      direktori?
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="px-4 sm:px-8 text-gray-800 dark:text-gray-200 text-justify">
                    A tree-structured directory is a directory structure
                    commonly used in computer operating systems. This structure
                    is similar to a tree, where there is one main directory
                    called the "root directory", and there are sub-directory
                    branches that are children of the main directory. Each file
                    on the system has a unique path name to distinguish it from
                    others.
                    <br /> <br />
                    Meanwhile, an acyclic-graph directory allows a directory to
                    have sub-directories and files that can be used together.
                    This allows the same file and sub-directory to exist in two
                    or more different directories without creating a copy of the
                    file.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="px-4 sm:px-8 text-gray-800 dark:text-gray-200 text-justify">
                    Direktori berstruktur pohon merupakan struktur direktori
                    yang biasanya digunakan pada sistem operasi komputer.
                    Struktur ini mirip dengan pohon, dimana terdapat satu
                    direktori utama yang disebut "root directory", dan terdapat
                    cabang-cabang sub-direktori yang merupakan anak dari
                    direktori utama tersebut. Setiap file pada sistem memiliki
                    sebuah nama path yang unik untuk membedakan satu sama lain.
                    <br /> <br />
                    Sedangkan direktori acyclic graph memungkinkan suatu
                    direktori memiliki sub-direktori dan file yang dapat
                    digunakan secara bersama-sama. Hal ini memungkinkan file dan
                    sub-direktori yang sama untuk berada pada dua atau lebih
                    direktori yang berbeda, tanpa harus membuat salinan file
                    tersebut.
                  </p>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      4. Practical Results from the Operating System Module
                      (Page 9-19)
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      4. Hasil Praktikum dari Modul Sistem Operasi (Hal. 9-19)
                    </span>
                  </h3>
                }
              >
                <div className="w-full md:w-4/6 md:pl-6 flex flex-col gap-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create a directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat sebuah direktori
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-1.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create multiple directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat banyak direktori
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-2.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create directory and sub directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat direktori dan sub direktori
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-3.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create new empty file
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat file kosong baru
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-4.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Write a file
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - menulis sebuah file
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-5.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Write a new content direct to the file with "echo"
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menulis konten baru langsung kedalam file dengan "echo"
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-6.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Read a file previously created using "echo" with "cat"
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membaca sebuah file yang sebelumya dibuat menggunakan
                      "echo" dengan "cat"
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-7.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Read another file with "cat"
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membaca file lain menggunakan "cat"
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-8.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Read another file with "cat"
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membaca file lain menggunakan "cat"
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-9.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Read first 5 lines of a file
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membaca 5 baris pertama dari sebuah file
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-10.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Delete file and directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menghapus file dan direktori
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-11.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Search a file by name
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mencari sebuah file berdasarkan namanya
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-12.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Matches existing files/directories
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mencocokan file/direktori yang ada
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-13.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Change the bytes of a file to zero (partially remove)
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mengubah bit sebuah file menjadi nol (hapus sebagian)
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-14.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Checking the current directory location
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mengecek keberadaan tempat direktori kita sekarang
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-15.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Copy a file to another directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menyalin sebuah file ke direktori lain
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-16.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Move a file to another directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Memindahkan sebuah file ke direktori lain
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-17.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Deleting a directory that still has files inside
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menghapus direktori yang masih memiliki file didalamnya
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-18.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Login to root access with "sudo"
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Login ke akses root menggunakan "sudo"
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-19.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Changing the permission of a file
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mengubah hak akses sebuah file
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-21.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Transferring the permission of a file to another user
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Memindahkan hak akses sebuah file ke user lain
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-22.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create directory and sub directory
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat direktori dan sub direktori
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-23.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                </div>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      5. Exercise
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      5. Latihan
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 pl-4 text-justify">
                    In a job interview for a System Administrator position, you
                    are asked to create two users that represent your identity
                    (for example: user1=first name; user2=last name). Create a
                    directory named "Ujian1" (user1) and "Ujian2" (user2) in
                    each user's home directory. Then, create 3 files with a size
                    of 100 bytes at once in the "Ujian1" directory, while
                    creating 3 files with a size of 300 bytes at once in the
                    "Ujian2" directory. Swap the ownership of the "Ujian1"
                    directory to User2 and vice versa. Then, set the permission
                    of one file (any file) so that it can only be read by the
                    user and the group owner of the file, but cannot be read by
                    other users
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 pl-4 text-justify">
                    Pada sebuah wawancara kerja untuk posisi Sistem
                    Administrator, Anda diminta untuk membuat dua buah user yang
                    menunjukkan identitas Anda (misal: user1=nama depan; user2=
                    nama belakang). Pada masing-masing user tersebut buatlah
                    direktori dengan nama Ujian1 (user1) dan Ujian2 (user2).
                    Kemudian pada direktori Ujian1 buatlah 3 file dengan ukuran
                    100 byte secara sekaligus, sedangkan pada direktori Ujian2
                    buatlah 3 file dengan ukuran 300 byte secara sekaligus.
                    Tukarlah kepemilikan dari direktori Ujian1 menjadi milik
                    User2 dan sebaliknya. Kemudian atur hak akses dari salah
                    satu file (bebas) menjadi hanya dapat di baca saja oleh
                    pengguna dan grup pengguna pemilik file, tapi tidak bisa
                    dibaca oleh pengguna lain.
                  </p>
                </span>
                <div className="w-full md:w-4/6 md:pl-6 mt-5 flex flex-col gap-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create user1 and user2
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat user1 dan user2
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-23.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Login to ubuntu with user1 account
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Login ke ubuntu menggunakan user1 akun
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-24.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create 3 files with a size of 100 bytes in user1
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat 3 file dengan ukuran 100 bit di user1
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-25.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Login to ubuntu with user2 account
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Login ke ubuntu menggunakan user2 akun
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-26.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Create 3 files with a size of 300 bytes in user1
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Membuat 3 file dengan ukuran 100 bit di user1
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-27.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Login to sudoers account (root)
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Login ke akun pemegang sudo (root)
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-28.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Swapping the home directory access of both users
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menukar akses direktori utama dari kedua user
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-29.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Changing the access of a file so that it can only be
                      read by the creator and cannot be read by other users
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Mengubah akses dari suatu file agar hanya dapat dibaca
                      oleh pembuat dan tidak dapat dibaca oleh pengguna lain
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-30.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/file-management/fm-31.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                </div>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      6. Reference(s)
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      6. Referensi
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-blue-500 dark:text-blue-500 pl-4">
                    <a
                      href="https://id.spot-the-difference.info/difference-between-ntfs"
                      target="_blank"
                    >
                      The difference between NTFS and FAT file systems.
                    </a>
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-blue-500 dark:text-blue-500 pl-4">
                    <a
                      href="https://id.spot-the-difference.info/difference-between-ntfs"
                      target="_blank"
                    >
                      - Perbedaan antara Sistem File NTFS dan FAT
                    </a>
                  </p>
                </span>
              </Collapse>
            </Collapse.Group>
          </div>
        </section>
      </main>
    </>
  );
}

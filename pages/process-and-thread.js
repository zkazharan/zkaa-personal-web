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
        <title>TP4 - Process and Thread</title>
        <meta
          name="description"
          content="definition and example of process and thread"
        />
        <link rel="icon" href="/zka-icon.png" />
      </Head>

      <main className="bg-white px-7 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <HeadProfile />
        <section>
          <div>
            <h3 className="text-xl sm:text-3xl py-1 dark:text-white">
              <span className={language === "id" ? "hidden" : ""}>
                Processes and Threads
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Proses dan Thread
              </span>
            </h3>
            <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 text-justify sm:text-left">
              <span className={language === "id" ? "hidden" : ""}>
                These are questions and answers about processes and threads from
                the Operating System course.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Berikut merupakan soal beserta jawaban tentang proses dan thread
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
                      1. Video Summary
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      1. Rangkuman Video
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Processes are individual parts of a program that run
                    separately from each other. Each process has its own memory
                    and resources, and they can communicate with each other
                    using communication tools like pipes and sockets.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Threads are smaller units of execution within a process that
                    share the same memory and resources. Multiple threads can be
                    created within a single process, allowing for different
                    parts of the program to run at the same time. Communication
                    between threads is done through shared memory, but it's
                    important to be careful to prevent synchronization issues.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    When a process is created, it means that a new instance of a
                    program is created with its own memory and resources. This
                    involves copying the program into memory and setting up the
                    necessary structures and resources.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    When a thread is created, it means that a new thread is
                    added to an existing process. This typically involves
                    allocating new structures, initializing the thread's stack,
                    and setting up any necessary synchronization mechanisms.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Process termination involves freeing up all the resources
                    that were allocated to the process, including memory and
                    other resources. This is done by sending a signal to the
                    process that tells it to clean up and exit.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Thread termination involves freeing up the structures and
                    stack space that were allocated to the thread. This can
                    happen when the thread completes its execution or is
                    explicitly terminated by another thread or the operating
                    system. It's important to make sure that all shared
                    resources are properly cleaned up to prevent synchronization
                    issues.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Proses adalah bagian individu dari program yang berjalan
                    secara terpisah satu sama lain. Setiap proses memiliki
                    memori dan sumber daya sendiri, dan mereka dapat
                    berkomunikasi satu sama lain menggunakan alat komunikasi
                    seperti pipa dan soket.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Thread adalah unit eksekusi yang lebih kecil dalam sebuah
                    proses yang membagi memori dan sumber daya yang sama.
                    Beberapa thread dapat dibuat dalam satu proses, memungkinkan
                    beberapa bagian program untuk berjalan secara bersamaan.
                    Komunikasi antar thread dilakukan melalui memori bersama,
                    tetapi penting untuk berhati-hati untuk mencegah masalah
                    sinkronisasi.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Ketika sebuah proses dibuat, artinya sebuah instansi baru
                    dari program dibuat dengan memori dan sumber daya sendiri.
                    Ini melibatkan menyalin program ke memori dan menyiapkan
                    struktur dan sumber daya yang diperlukan.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Ketika sebuah thread dibuat, artinya sebuah thread baru
                    ditambahkan ke dalam proses yang ada. Ini biasanya
                    melibatkan alokasi struktur baru, menginisialisasi tumpukan
                    thread, dan menyiapkan mekanisme sinkronisasi yang
                    diperlukan.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Pengakhiran proses melibatkan membebaskan semua sumber daya
                    yang dialokasikan untuk proses, termasuk memori dan sumber
                    daya lainnya. Ini dilakukan dengan mengirimkan sinyal ke
                    proses yang memberitahunya untuk membersihkan dan keluar.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Pengakhiran thread melibatkan membebaskan struktur dan ruang
                    tumpukan yang dialokasikan untuk thread. Ini bisa terjadi
                    ketika thread menyelesaikan eksekusinya atau secara
                    eksplisit diakhiri oleh thread lain atau sistem operasi.
                    Penting untuk memastikan bahwa semua sumber daya bersama
                    dibersihkan dengan benar untuk mencegah masalah
                    sinkronisasi.
                  </p>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      2. Practical Results from the Operating System Module
                      (Page 20-24)
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      2. Hasil Praktikum dari Modul Sistem Operasi (Hal. 20-24)
                    </span>
                  </h3>
                }
              >
                <div className="w-full md:w-4/6 md:pl-6 flex flex-col gap-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Check the status of SSH service on the system
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Memeriksa status layanan SSH di sistem
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/pnt/pnt-1.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Stop the SSH service
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Menghentikan layanan SSH
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/pnt/pnt-2.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Start the SSH service
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Memulai layanan SSH
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/pnt/pnt-3.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Managing SSH service using physical path
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Pengelolaan layanan SSH menggunakan path fisik
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/pnt/pnt-4.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />

                  <p className="text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      - Monitor system activity in real-time, displaying a list
                      of running processes and the system resources used by each
                      process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - Memantau aktivitas sistem secara real-time, menampilkan
                      daftar proses yang sedang berjalan dan sumber daya sistem
                      yang digunakan oleh masing-masing proses
                    </span>
                  </p>
                  <Image
                    className="pointer-events-none pl-2 md:pl-3"
                    src="/pnt/pnt-5.png"
                    alt="image"
                    width={1920}
                    height={1080}
                    draggable="false"
                  />
                </div>
                <p className="text-gray-800 dark:text-gray-200 ml-6 md:ml-10 mt-4 text-justify">
                  <span className={language === "id" ? "hidden" : ""}>
                    The "top" command in Ubuntu is used to display the system's
                    resource usage and the processes that are currently running.
                    The output of the "top" command includes several columns
                    that provide information about the processes, such as the
                    process ID (PID), the user who started the process, the CPU
                    and memory usage, and the process's status.
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Perintah "top" pada Ubuntu digunakan untuk menampilkan
                    penggunaan sumber daya sistem dan proses yang sedang
                    berjalan. Output dari perintah "top" termasuk beberapa kolom
                    yang menyediakan informasi tentang proses, seperti ID proses
                    (PID), pengguna yang memulai proses, penggunaan CPU dan
                    memori, dan status proses.
                  </span>
                </p>
                <p className="text-gray-800 dark:text-gray-200 ml-6 md:ml-10 mt-4 text-justify">
                  <span className={language === "id" ? "hidden" : ""}>
                    Here are some of the common columns that are displayed in
                    the "top" command output and their functions:
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Berikut adalah beberapa kolom umum yang ditampilkan dalam
                    output perintah "top" beserta fungsinya:
                  </span>
                </p>
                <ul className="text-gray-800 dark:text-gray-200 ml-12 md:ml-16">
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - PID: the process ID of the running process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - PID: ID proses dari proses yang sedang berjalan
                    </span>
                  </li>
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - USER: the user who started the process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - USER: pengguna yang memulai proses
                    </span>
                  </li>
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - %CPU: the percentage of CPU resources being used by the
                      process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - %CPU: persentase penggunaan sumber daya CPU oleh proses
                    </span>
                  </li>
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - %MEM: the percentage of memory resources being used by
                      the process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - %MEM: persentase penggunaan sumber daya memori oleh
                      proses
                    </span>
                  </li>
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - TIME+: the total CPU time used by the process
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - TIME+: total waktu CPU yang digunakan oleh proses
                    </span>
                  </li>
                  <li>
                    <span className={language === "id" ? "hidden" : ""}>
                      - COMMAND: the name of the process or command that is
                      running
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      - COMMAND: nama proses atau perintah yang sedang berjalan
                    </span>
                  </li>
                </ul>
                <p className="text-gray-800 dark:text-gray-200 ml-6 md:ml-10 mt-4 text-justify">
                  <span className={language === "id" ? "hidden" : ""}>
                    The "top" command can also be used to monitor system
                    performance in real-time, as it updates the resource usage
                    statistics every few seconds by default. Additionally, the
                    "top" command can be used to manage processes by sending
                    signals to them, sorting the process list by different
                    criteria, and changing the display format of the command
                    output.
                  </span>
                  <span className={language === "en" ? "hidden" : ""}>
                    Perintah "top" juga dapat digunakan untuk memantau kinerja
                    sistem secara real-time, karena ia akan memperbarui
                    statistik penggunaan sumber daya setiap beberapa detik
                    secara default. Selain itu, perintah "top" dapat digunakan
                    untuk mengelola proses dengan mengirim sinyal ke proses
                    tersebut, mengurutkan daftar proses berdasarkan kriteria
                    yang berbeda, dan mengubah format tampilan output perintah.
                  </span>
                </p>
              </Collapse>
            </Collapse.Group>
          </div>
        </section>
      </main>
    </>
  );
}

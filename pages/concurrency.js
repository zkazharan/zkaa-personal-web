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
        <title>TP7 - Concurrency</title>
        <meta name="description" content="problems due to concurrency" />
        <link rel="icon" href="/zka-icon.png" />
      </Head>

      <main className="bg-white px-7 sm:px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <HeadProfile />
        <section>
          <div>
            <h3 className="text-xl sm:text-3xl py-1 dark:text-white">
              <span className={language === "id" ? "hidden" : ""}>
                Problems due to concurrency
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Permasalahan karena konkurensi
              </span>
            </h3>
            <p className="text-xs sm:text-base py-2 leading-5 sm:leading-8 text-gray-800 dark:text-gray-200 text-justify sm:text-left">
              <span className={language === "id" ? "hidden" : ""}>
                These are questions and answers about Concurrency from the
                Operating System course.
              </span>
              <span className={language === "en" ? "hidden" : ""}>
                Berikut merupakan soal beserta jawaban tentang Konkurensi dari
                mata kuliah sistem operasi.
              </span>
            </p>
          </div>
          <div className="pb-10 sm:pb-40 mt-4 sm:mt-6 flex flex-col gap-4">
            <Collapse.Group accordion={false}>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      <strong>1. Resume of Content</strong>
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      <strong>1. Resume Materi</strong>
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Concurrency occurs when two or more processes compete to use
                    the same resources, such as I/O equipment, memory, and
                    clock, without any information exchange mechanism. This can
                    cause processes that are denied access to become slow or
                    blocked. The problems that arise from concurrency can be
                    categorized into two main problems, namely the
                    Producer-Consumer Problem and the Reader-Writer Problem.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    The Producer-Consumer Problem occurs when two or more
                    processes interact using the same shared buffer. There is a
                    process that acts as a Producer, which inserts values into
                    the buffer, and a process that acts as a Consumer, which
                    retrieves or removes the contents of the buffer. At the same
                    time, only one process is allowed to modify the buffer, and
                    when the buffer is full, production must be stopped, so the
                    Producer process is blocked. Conversely, when the buffer is
                    empty, consumption must be stopped, so the Consumer process
                    is blocked.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    To avoid Race Condition, which occurs when multiple
                    processes access and manipulate data together at the same
                    time, mutual exclusion is used. Mutual exclusion is a way to
                    prevent more than one process from performing writing and
                    reading processes to shared data at the same time. This can
                    be done by involving shared memory, shared files, and other
                    shared resources. When multiple processes have a code
                    segment that, if executed, can mutually modify variables,
                    update a table, write to a file, and so on, the code segment
                    is called a Critical Section.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    The Critical Section consists of the Entry Section, Exit
                    Section, and Remainder Section. The Entry Section is the
                    code used to enter the critical section, the Exit Section is
                    the end of the critical section that allows other processes,
                    and the Remainder Section is the break code after entering
                    the critical section.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    One of the problems that arise due to concurrency is
                    Starvation, which is a condition where one or more processes
                    never get the resources they need because they always lose
                    to other processes that are more superior. Starvation occurs
                    when there are many processes competing to access a resource
                    with the same priority.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Deadlock can also occur when two or more processes hold
                    resources owned by other processes, so that these processes
                    cannot continue their execution. Deadlock can be avoided by
                    implementing strategies to reduce resource requirements,
                    allocating resources in the right way, or by using deadlock
                    detection and recovery algorithms.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Konkurensi terjadi ketika dua atau lebih proses bersaing
                    untuk menggunakan sumber daya yang sama, seperti peralatan
                    I/O, memory, dan clock, tanpa adanya mekanisme tukar
                    informasi. Hal ini dapat menyebabkan proses yang ditolak
                    aksesnya menjadi melambat atau menjadi terblokir.
                    Permasalahan yang timbul karena konkurensi dapat
                    dikategorikan dalam dua permasalahan utama, yaitu
                    Producer-Consumer Problem dan Reader-Writer Problem.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Producer-Consumer Problem terjadi ketika dua atau lebih
                    proses berinteraksi menggunakan satu buffer yang sama. Ada
                    proses yang menjadi Producer yang memasukkan nilai ke dalam
                    buffer, dan ada proses yang menjadi Consumer yang mengambil
                    atau mengurangi isi buffer. Pada saat yang sama, hanya satu
                    proses yang diizinkan memodifikasi buffer dan ketika buffer
                    penuh, produksi harus dihentikan sehingga proses Producer
                    diblokir. Sebaliknya, ketika buffer kosong, konsumsi harus
                    dihentikan sehingga proses Consumer diblokir.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Untuk menghindari Race Condition, yang terjadi ketika
                    beberapa proses mengakses dan memanipulasi data bersama-sama
                    pada saat yang sama, digunakan mutual exclusion. Mutual
                    exclusion adalah cara untuk mencegah lebih dari satu proses
                    melakukan proses writing dan reading kepada shared data di
                    waktu yang sama. Hal ini dapat dilakukan dengan melibatkan
                    shared memory, shared file, dan shared sumber daya lain.
                    Ketika beberapa proses memiliki segmen kode yang jika
                    dieksekusi maka proses-proses tersebut dapat saling mengubah
                    variabel, meng-update suatu tabel, menulis ke dalam file,
                    dan sebagainya, maka segmen kode tersebut dinamakan sebagai
                    Critical Section.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Critical Section terdiri dari Entry Section, Exit Section,
                    dan Remainder Section. Entry Section adalah kode yang
                    digunakan untuk memasuki critical section, Exit Section
                    adalah akhir dari critical section yang mengizinkan proses
                    lain, dan Remainder Section adalah kode istirahat setelah
                    masuk ke critical section.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Salah satu masalah yang muncul karena konkurensi adalah
                    Starvation, yaitu kondisi ketika satu atau beberapa proses
                    tidak pernah mendapatkan sumber daya yang mereka butuhkan
                    karena selalu kalah bersaing dengan proses lain yang lebih
                    unggul. Starvation terjadi ketika terdapat banyak proses
                    yang bersaing untuk mengakses suatu sumber daya dengan
                    prioritas yang sama.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    Deadlock juga dapat terjadi ketika dua atau lebih proses
                    memegang sumber daya yang dimiliki oleh proses lain,
                    sehingga proses tersebut tidak dapat melanjutkan eksekusi.
                    Deadlock dapat dihindari dengan menerapkan strategi
                    pengurangan kebutuhan sumber daya, alokasi sumber daya
                    dengan cara yang tepat, atau menggunakan algoritma deteksi
                    dan pemulihan deadlock.
                  </p>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      <strong>
                        {
                          "2. Meaning of 1). Mutual Exclusion, 2). Deadlock, 3). Startvation and 4). Coherence Data ? "
                        }
                      </strong>
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      <strong>
                        {
                          "2. Pengertian dari 1). Mutual Exclusion, 2). Deadlock, 3). Startvation dan 4). Data Koherensi ? "
                        }
                      </strong>
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    1. Mutual Exclusion refers to the property of a system where
                    only one process can access a resource or a critical section
                    at a time.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    2. Deadlock occurs when two or more processes are waiting
                    for each other to release resources or to complete an
                    action, resulting in a standstill of the system.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    3. Starvation is a situation where a process is unable to
                    get access to a resource or a critical section despite
                    repeated attempts, and as a result, it remains blocked
                    indefinitely.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    4. Data Coherence refers to the consistency of data across
                    multiple copies or caches of a shared resource in a
                    distributed system.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    1. Mutual Exclusion adalah sebuah mekanisme untuk memastikan
                    bahwa dua proses tidak dapat mengakses sumber daya yang sama
                    secara bersamaan. Hal ini dilakukan untuk mencegah
                    terjadinya konflik pada sumber daya tersebut, sehingga dapat
                    memastikan konsistensi data dan keamanan sistem.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    2. Deadlock terjadi ketika dua atau lebih proses saling
                    menunggu satu sama lain untuk melepaskan sumber daya yang
                    mereka butuhkan. Akibatnya, proses-proses tersebut tidak
                    dapat melanjutkan eksekusi dan terjebak dalam kondisi yang
                    tidak produktif.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    3. Starvation terjadi ketika satu atau lebih proses tidak
                    dapat mengakses sumber daya yang mereka butuhkan, karena
                    sumber daya tersebut selalu diberikan kepada proses lain.
                    Proses yang mengalami starvation akan terus menunggu sumber
                    daya yang dibutuhkan tanpa pernah mendapatkannya.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    4. Data Koherensi adalah keadaan di mana semua salinan data
                    yang tersedia pada sistem harus selalu konsisten dan sesuai
                    dengan data asli. Data koheren sangat penting untuk
                    memastikan konsistensi dan keamanan sistem.
                  </p>
                </span>
              </Collapse>
              <Collapse
                title={
                  <h3 className="text-base sm:text-base text-gray-800 dark:text-gray-200">
                    <span className={language === "id" ? "hidden" : ""}>
                      <strong>
                        {
                          "3. How to handle 1). Mutual Exclusion, 2). Deadlock, 3). Startvation and 4). Coherence Data ? "
                        }
                      </strong>
                    </span>
                    <span className={language === "en" ? "hidden" : ""}>
                      <strong>
                        {
                          "3. Penanganan dari 1). Mutual Exclusion, 2). Deadlock, 3). Startvation dan 4). Data Koherensi ? "
                        }
                      </strong>
                    </span>
                  </h3>
                }
              >
                <span className={language === "id" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    1. Mutual Exclusion can be handled through the use of
                    synchronization techniques such as semaphores, mutexes, or
                    monitors that allow only one process to access a resource or
                    a critical section at a time.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    2. Deadlock can be prevented by using techniques such as
                    resource allocation graphs, timeouts, or using a global
                    ordering of resource requests to ensure that resources are
                    always acquired in a specific order.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    3. Starvation can be handled through the use of techniques
                    such as priority scheduling, aging, or the use of semaphore
                    signaling to ensure that a blocked process is eventually
                    granted access to a resource or a critical section.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    4. Data Coherence can be handled by implementing cache
                    coherence protocols that ensure that all the copies of a
                    shared resource are kept up-to-date with the latest changes,
                    and by using techniques such as message passing or
                    distributed locks to coordinate access to shared resources
                    in a distributed system.
                  </p>
                </span>
                <span className={language === "en" ? "hidden" : ""}>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    1. Mutual Exclusion dapat ditangani dengan menggunakan
                    teknik locking, yaitu mekanisme yang memastikan hanya satu
                    proses yang dapat mengakses sumber daya pada satu waktu
                    tertentu.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    2. Deadlock dapat ditangani dengan menggunakan teknik
                    seperti pembebasan sumber daya secara terstruktur dan
                    alokasi sumber daya secara bijaksana, sehingga proses yang
                    terjebak deadlock dapat dilepaskan dari kondisi tersebut.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    3. Starvation dapat ditangani dengan menggunakan teknik
                    seperti prioritas, yaitu memberikan prioritas kepada proses
                    yang telah menunggu lebih lama atau dengan cara memastikan
                    bahwa semua proses mendapatkan akses sumber daya secara
                    adil.
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-justify mb-4 ml-4">
                    4. Data Koherensi dapat ditangani dengan menggunakan teknik
                    seperti caching, yaitu memastikan bahwa salinan data yang
                    tersedia pada sistem selalu konsisten dengan data asli.
                    Selain itu, teknik seperti validasi data dan sinkronisasi
                    data juga dapat digunakan untuk memastikan keamanan dan
                    konsistensi data pada sistem.
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

'use client';

import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Image from 'next/image';

const Program: React.FC = () => {
    return (
        <div
            className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bgprogram.png')" }}
        >
            <Navbar colour="text-orange-500" />

            <main className="grow px-4 md:px-16 pt-[190px] pb-20 text-black">
                {/* Bagian Fasilitas, Spesifikasi, Program */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
                    {/* Fasilitas */}
                    <div className="bg-gray-200 rounded-[5rem] p-6 shadow-lg w-fit lg:w-1/3 relative transition-transform duration-300 hover:scale-105">
                        <div className="absolute top-[-30px] right-[-10px] w-[130px] h-[130px] rounded-full overflow-hidden">
                            <Image
                                src="/images/fasilitas.png"
                                alt="Fasilitas"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="font-bold mb-3 text-2xl pl-5">FASILITAS</h3>
                        <ul className="list-disc list-inside text-lg pl-5">
                            <li>webinar dan google classroom</li>
                            <li>pendamping portofolio SNBP-SNBT</li>
                            <li>Konsultasi online</li>
                            <li>Pendampingan kualitas upload karya</li>
                            <li>E-Learning : video materi referensi gambar</li>
                        </ul>
                    </div>

                    {/* Spesifikasi */}
                    <div className="bg-gray-200 rounded-[5rem] p-10 shadow-lg w-fit lg:w-1/3 relative transition-transform duration-300 hover:scale-105">
                        <div className="absolute top-[-30px] right-[-10px] w-[130px] h-[130px] rounded-full overflow-hidden">
                            <Image
                                src="/images/spesifikasi.png"
                                alt="Spesifikasi"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="font-bold mb-3 text-2xl pl-3">SPESIFIKASI</h3>
                        <ul className="list-disc list-inside text-lg pl-3">
                            <li>Jumlah sesi: 40 sesi (1 sesi 2 jam)</li>
                            <li>Kuota siswa perkelas: 8-12 siswa</li>
                            <li>Pilihan waktu belajar: sabtu / minggu</li>
                            <li>Frekuensi belajar: seminggu 2-4 sesi</li>
                        </ul>
                    </div>

                    {/* Program */}
                    <div className="bg-gray-200 rounded-[5rem] p-11 shadow-lg w-fit lg:w-1/3 relative transition-transform duration-300 hover:scale-105">
                        <div className="absolute top-[-30px] right-[-10px] w-[130px] h-[130px] rounded-full overflow-hidden">
                            <Image
                                src="/images/program.png"
                                alt="Program"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="font-bold mb-3 text-2xl">PROGRAM</h3>
                        <ul className="list-disc list-inside text-lg">
                            <li>TK / SD</li>
                            <li>SMP / SEDERAJAT</li>
                            <li>SMA / SEDERAJAT</li>
                            <li>KELAS UMUM</li>
                        </ul>
                    </div>
                </div>

                {/* Program Terfavorit */}
                <div className="text-center mb-10">
                    <h2 className="bg-gray-200 text-black inline-block px-6 py-2 rounded-full font-bold text-lg tracking-wide">
                        PROGRAM TERFAVORIT
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 - Program SD */}
                    <div className="bg-gray-200 rounded-[3rem] p-6 shadow-md transition-transform duration-300 hover:scale-105">
                        <h4 className="text-red-600 font-bold mb-2 text-2xl">PROGRAM SD</h4>
                        <p className="mb-1 italic">Rp. 6,500,000</p>
                        <p className="text-xl mb-3">
                            Program Jangka Pendek khusus anak SD yang ingin mengembangkan
                            minat dan bakat dalam menggambar dengan materi yang terukur dan
                            sistematis.
                        </p>
                        <div className="relative w-full h-[100px]">
                            <Image
                                src="/images/sd.png"
                                alt="Program SD"
                                width={300}
                                height={300}
                                className="absolute top-1 right-[-70px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2 - SNBP & SNBT */}
                    <div className="bg-gray-200 rounded-[3rem] p-6 shadow-md transition-transform duration-300 hover:scale-105">
                        <h4 className="text-red-600 font-bold mb-2 text-2xl">INTENSIF SNBP & SNBT 2025</h4>
                        <p className="mb-1 italic">Rp. 16,500,000</p>
                        <p className="text-xl mb-3">
                            Program kelas Khusus XII SMA untuk menghadapi SNBP & SNBT 2024/2025.
                            Materi disesuaikan dengan persiapan pembuatan portofolio gambar
                            dan didukung video tutorial eksklusif.
                        </p>
                        <div className="relative w-full h-[100px]">
                            <Image
                                src="/images/snbp.png"
                                alt="Program SNBP"
                                width={350}
                                height={350}
                                className="absolute top-[-30] right-[-90px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 3 - USM I */}
                    <div className="bg-gray-200 rounded-[3rem] p-6 shadow-md transition-transform duration-300 hover:scale-105">
                        <h4 className="text-red-600 font-bold mb-2 text-2xl">INTENSIF USM I</h4>
                        <p className="mb-1 italic">Rp. 8,000,000</p>
                        <p className="text-xl mb-3">
                            Program ini mencakup pelatihan intensif seperti teknik menggambar perspektif,
                            analisis desain, dan penyusunan portofolio gambar yang menarik.
                        </p>
                        <div className="relative w-full h-[100px]">
                            <Image
                                src="/images/usm.png"
                                alt="Program USM"
                                width={170}
                                height={100}
                                className="absolute top-[-140px] right-[-40px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Program;

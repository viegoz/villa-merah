'use client';

import React, { useRef, useEffect } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Image from 'next/image';

const Galeri = () => {
    const karyaRef = useRef<HTMLDivElement>(null);
    const kegiatanRef = useRef<HTMLDivElement>(null);

    const karyaImages = ['karya1.jpg', 'karya2.jpg', 'karya3.jpg', 'karya4.jpg'];
    const kegiatanImages = ['kegiatan1.png', 'kegiatan2.png', 'kegiatan3.jpg', 'kegiatan4.jpg'];

    const loopedKaryaImages = [...karyaImages, ...karyaImages];
    const loopedKegiatanImages = [...kegiatanImages, ...kegiatanImages];

    useEffect(() => {
        const autoScroll = (
            container: HTMLDivElement | null,
            imageCount: number,
            pixelPerImage: number,
            gap: number
        ) => {
            if (!container) return;

            let scrollAmount = 0;
            const totalScroll = imageCount * (pixelPerImage + gap);

            const interval = setInterval(() => {
                container.scrollLeft += 1;
                scrollAmount += 1;

                if (scrollAmount >= totalScroll) {
                    container.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }, 20);

            return interval;
        };

        const karyaInterval = autoScroll(karyaRef.current, karyaImages.length, 250, 8);
        const kegiatanInterval = autoScroll(kegiatanRef.current, kegiatanImages.length, 250, 8);

        return () => {
            clearInterval(karyaInterval!);
            clearInterval(kegiatanInterval!);
        };
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/bgGaleri.png')" }}
        >
            <Navbar colour="text-orange-500" />

            <main className="grow px-4 md:px-16 pt-[120px] pb-20 relative">
                {/* Judul GALERI */}
                <div className="flex justify-center mb-10 ">
                    <div className="bg-[#D9D9D9] px-8 py-5 rounded-3xl text-black text-4xl font-bold border pr-20 pl-20">
                        GALERI
                    </div>
                </div>

                {/* Kontainer dua kotak */}
                <div className="flex md:flex-row gap-6 justify-center items-start z-10 relative flex-wrap">
                    {/* Karya Siswa */}
                    <div className="flex flex-col items-center bg-[#D9D9D9] px-6 pt-8 pb-6 rounded-[20px] w-[400px] h-[350px] text-black relative shadow-2xl">
                        <div className="bg-white inline-block px-10 py-5 rounded-xl mb-4 text-3xl font-bold mx-auto w-fit text-center">
                            KARYA SISWA
                        </div>

                        <div
                            ref={karyaRef}
                            className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-[150px] rounded-md scrollbar-hide"
                        >
                            {loopedKaryaImages.map((img, idx) => (
                                <div key={idx} className="w-[250px] h-[150px] flex-shrink-0 rounded-md overflow-hidden">
                                    <Image
                                        src={`/images/${img}`}
                                        alt={`Karya ${idx + 1}`}
                                        width={250}
                                        height={150}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Kegiatan Siswa */}
                    <div className="flex flex-col items-center bg-[#D9D9D9] px-6 pt-8 pb-6 rounded-[20px] w-[400px] h-[350px] text-black shadow-xl">
                        <div className="bg-white inline-block px-10 py-5 rounded-xl mb-4 text-3xl font-bold mx-auto w-fit text-center">
                            KEGIATAN SISWA
                        </div>

                        <div
                            ref={kegiatanRef}
                            className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-[150px] rounded-md scrollbar-hide"
                        >
                            {loopedKegiatanImages.map((img, idx) => (
                                <div key={idx} className="w-[250px] h-[150px] flex-shrink-0 rounded-md overflow-hidden">
                                    <Image
                                        src={`/images/${img}`}
                                        alt={`Kegiatan ${idx + 1}`}
                                        width={250}
                                        height={150}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Galeri;

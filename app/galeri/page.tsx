import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Image from 'next/image';

const Galeri = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: "url('/images/bgGaleri.png')" }}
        >
            <Navbar colour="text-orange-500" />

            <main className="grow px-4 md:px-16 pt-[120px] pb-20 relative">
                {/* Judul GALERI */}
                <div className="flex justify-center mb-10">
                    <div className="bg-[#D9D9D9] px-8 py-2 rounded-xl text-black text-4xl font-bold border">
                        GALERI
                    </div>
                </div>

                {/* Kontainer dua kotak */}
                <div className="flex md:flex-row gap-6 justify-center items-start z-10 relative">
                    {/* Karya Siswa */}
                    <div className="flex flex-col items-center bg-[#D9D9D9] px-6 pt-4 pb-6 rounded-[20px] w-[450px] h-[400px] text-black relative shadow-lg">
                        <div className="bg-white inline-block px-6 py-2 rounded-xl mb-4 text-4xl font-medium mx-auto w-fit text-center">
                            KARYA SISWA
                        </div>

                        <br></br>
                        {/* Container Gambar */}
                        <div className="flex gap-2 overflow-hidden w-full h-[150px] rounded-md">
                            <div className="w-[300px] h-[150px] overflow-hidden rounded-md">
                                <Image
                                    src="/images/karya1.png"
                                    alt="Karya 1"
                                    width={160}
                                    height={150}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-[250px] h-[150px] overflow-hidden rounded-md">
                                <Image
                                    src="/images/karya2.png"
                                    alt="Karya 2"
                                    width={160}
                                    height={150}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Dot slider */}
                        <div className="flex justify-center mt-5 gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        </div>
                    </div>


                    {/* Kegiatan Siswa */}
                    <div className="flex flex-col items-center bg-[#D9D9D9] px-6 pt-4 pb-6 rounded-[20px] w-[450px] h-[400px] text-black shadow-lg">
                        <div className="bg-white inline-block px-6 py-2 rounded-xl mb-4 text-4xl font-medium">
                            KEGIATAN SISWA
                        </div>
                        <br></br>
                        <div className="flex gap-2 overflow-hidden w-full h-[150px] rounded-md">
                            <Image
                                src="/images/kegiatan1.png"
                                alt="Kegiatan 1"
                                width={250}
                                height={150}
                                className="rounded object-cover"
                            />
                            <Image
                                src="/images/kegiatan2.png"
                                alt="Kegiatan 2"
                                width={250}
                                height={150}
                                className="rounded object-cover"
                            />
                        </div>
                        {/* Dot slider */}
                        <div className="flex justify-center mt-5 gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Galeri;

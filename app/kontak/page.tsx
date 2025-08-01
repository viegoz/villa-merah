// pages/kontak.tsx

import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Image from 'next/image';

const Kontak = () => {
    return (
        <div className="min-h-screen bg-[#2E2E2E] flex flex-col">
            <Navbar colour="text-white" />

            <main className="grow flex flex-col lg:flex-row justify-between items-start gap-10 px-6 md:px-20 pt-[130px] pb-7 text-white">
                {/* Form Join Us */}
                <div className="bg-[#D9D9D9] text-black w-full max-w-md rounded-3xl p-8 shadow-md">
                    <h2 className="text-xl font-bold text-center mb-6 font-mono">JOIN US</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-mono mb-1">Nama</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded bg-[#ECECEC] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 rounded bg-[#ECECEC] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono mb-1">No Telp.</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded bg-[#ECECEC] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono mb-1">Pesan</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-2 rounded bg-[#ECECEC] outline-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 w-full py-2 bg-[#D9D9D9] border border-black rounded-xl text-black font-mono font-semibold hover:bg-gray-300"
                        >
                            KIRIM
                        </button>
                    </form>
                </div>

                {/* Info Kontak */}
                <div className="flex flex-col gap-8 w-full max-w-xl">
                    <div className="flex flex-col items-center gap-4 pb-30 pt-10">
                        <Image src="/images/phone.png" alt="Phone" width={100} height={100} />
                        <div>
                            <p className="text-sm font-mono text-center">NO. TELFON</p>
                            <p className="text-lg font-semibold text-center">+62 8765431298</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Image src="/images/instagram.png" alt="Instagram" width={100} height={100} />
                        <div>
                            <p className="text-sm font-mono text-center">INSTAGRAM</p>
                            <p className="text-lg font-semibold text-center">@bimbelgambar_villamerah</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full max-w-xl">
                    <div className="flex flex-col items-center gap-4 pt-10">
                        <Image src="/images/email.png" alt="Email" width={100} height={100} />
                        <div>
                            <p className="text-sm font-mono text-center">EMAIL</p>
                            <p className="text-lg font-semibold text-center">Bimbelvillamerah@gmail.com</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-mono mb-2">LOKASI</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5957096605074!2d107.6271103!3d-6.911394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c92ffc02a3%3A0x6188a7f2a265edac!2sBimbel%20Gambar%20Villa%20Merah!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Kontak;
